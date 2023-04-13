const textErea = document.querySelector("#cleanLinks");
const showLinks = document.querySelector(".showLinks");
const submitBtn = document.querySelector(".submitBtn");
const copyValue = document.querySelector("#copyValue");
const copyIcon = document.querySelector(".icon");
const cleanIcon = document.querySelector(".clean-icon");

let html = "";

textErea.addEventListener("input", (e) => {
  html += e.target.value;
});

submitBtn.addEventListener("click", () => {
  textErea.value = "";
  const url = extractUrls(html);
  const links = url.toString();
  const result = links.replaceAll(",", "\n");
  copyValue.value = result;
  html = "";
});

function extractUrls(html) {
  if (!html.includes("ul") || !html.includes("li")) {
    showLinks.innerHTML = `<h3 class="error">Please Enter Valid Ul list</h3>`;
    setTimeout(() => {
      showLinks.innerHTML = `<h3 class="error"></h3>`;
    }, 5000);
  } else {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const links = doc.querySelectorAll("a[href]");
    let urls = [];
    links.forEach((link) => {
      const url = link.getAttribute("href");
      urls.push(url);
    });
    return urls;
  }
}

cleanIcon.addEventListener("click", () => {
  copyValue.value = "";
  html = "";
});
copyIcon.addEventListener("click", () => {
  copyValue.select();
  document.execCommand("copy");
});
