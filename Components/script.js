const btnArr = document.querySelectorAll(".icon");

for (let i = 0; i < btnArr.length; i++) {
  btnArr[i].addEventListener("click", function () {
    const parent = btnArr[i].parentNode;
    parent.classList.toggle("open");
  });
}
