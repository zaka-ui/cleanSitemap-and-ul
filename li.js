const textErea = document.querySelector("#cleanLinks");
const showLinks = document.querySelector(".showLinks");
const submitBtn = document.querySelector(".submitBtn");
const copyValue = document.querySelector("#copyValue");
const copyIcon = document.querySelector(".icon");

copyIcon.addEventListener("click", () => {
  copyValue.select();
  document.execCommand("copy");
});
