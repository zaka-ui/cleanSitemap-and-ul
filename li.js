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
  const url = extractUrls(html);
  const links = url.toString();
  console.log(links);
  const result = links.replaceAll(",", "\n");
  console.log(result);
  copyValue.value = result;
  textErea.value = "";
});
function extractUrls(html) {
  copyValue.value = "";
  if (!html.includes("ul") || !html.includes("li")) {
    showLinks.innerHTML = `<h3 class="error">Please Enter Valid Ul list</h3>`;
  } else {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const links = doc.querySelectorAll("a[href]");
    const urls = [];
    links.forEach((link) => {
      const url = link.getAttribute("href");
      urls.push(url);
    });
    return urls;
  }
}

cleanIcon.addEventListener("click", () => {
  textErea.value = "";
  copyValue.value = "";
});
copyIcon.addEventListener("click", () => {
  copyValue.select();
  document.execCommand("copy");
});
