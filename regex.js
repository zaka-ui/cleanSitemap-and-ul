const textErea = document.querySelector("#cleanLinks");
const showLinks = document.querySelector(".showLinks");
const submitBtn = document.querySelector(".submitBtn");
const copyValue = document.querySelector("#copyValue");
const copyIcon = document.querySelector(".icon");
const cleanIcon = document.querySelector(".clean-icon");

const regex =
  /[0-9]{4}[-][0-9]{2}[-][0-9]{2} [0-9]{2}[:][0-9]{2} \+[0-9]{2}[:][0-9]{2}/g;

const regext = /\s[0-9]{1,4}/g;
let urls = [];
const handleChange = (e) => {
  let test = e.value;
  urls = [];
  let l = test.replace(regex, "");
  let s = l.replace(regext, "");
  let url = s.trim().split(/\s+/);
  url.forEach((l) => {
    urls.push(l + "\n");
  });
};

submitBtn.addEventListener("click", () => {
  const length = urls.length;

  if (length === 0) {
    showLinks.innerHTML = `<div class="error">Please fill out the texterea above</div>`;
    setTimeout(() => {
      showLinks.innerHTML = `<div class="error"></div>`;
    }, 5000);
  } else {
    const u = urls.toString();
    const result = u.replaceAll(",", "");
    const firstLine = /URL/;
    const ss = result.replace(firstLine, "");
    const aa = ss.replace("Images\n", "");
    const mm = aa.replace("Last\n", "");
    const nn = mm.replace("Mod.\n", "");
    const ff = nn.replace("\n", "");
    copyValue.value = ff;
    textErea.value = "";
  }

  cleanIcon.addEventListener("click", () => {
    copyValue.value = "";
  });
});

copyIcon.addEventListener("click", () => {
  copyValue.select();
  document.execCommand("copy");
});
