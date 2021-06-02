const projectsFront = document.querySelectorAll(".project_front");
const projectsFull = document.querySelectorAll(".project_full");
const projectsMobile = document.querySelectorAll(".project_mobile");
const projectsCms = document.querySelectorAll(".project_cms");
const projectsAll = document.querySelectorAll(".project_box");

const btnFront = document.querySelector("#btn-front");
const btnFull = document.querySelector("#btn-full");
const btnMobile = document.querySelector("#btn-mobile");
const btnCms = document.querySelector("#btn-cms");
const btnAll = document.querySelector("#btn-all");
const filterBtns = document.querySelectorAll(".filter-btns");

btnFront.addEventListener("click", function () {
  filterBtns.forEach(function (node) {
    node.classList.remove("active");
  });
  btnFront.classList.add("active");
  projectsAll.forEach(function (node) {
    node.classList.remove("active-project");
  });
  projectsFront.forEach(function (node) {
    node.classList.add("active-project");
  });
});

btnFull.addEventListener("click", function () {
  filterBtns.forEach(function (node) {
    node.classList.remove("active");
  });
  btnFull.classList.add("active");

  projectsAll.forEach(function (node) {
    node.classList.remove("active-project");
  });
  projectsFull.forEach(function (node) {
    node.classList.add("active-project");
  });
});

btnMobile.addEventListener("click", function () {
  filterBtns.forEach(function (node) {
    node.classList.remove("active");
  });
  btnMobile.classList.add("active");
  projectsAll.forEach(function (node) {
    node.classList.remove("active-project");
  });
  projectsMobile.forEach(function (node) {
    node.classList.add("active-project");
  });
});

btnCms.addEventListener("click", function () {
  filterBtns.forEach(function (node) {
    node.classList.remove("active");
  });

  btnCms.classList.add("active");
  projectsAll.forEach(function (node) {
    node.classList.remove("active-project");
  });
  projectsCms.forEach(function (node) {
    node.classList.add("active-project");
  });
});

btnAll.addEventListener("click", function () {
  filterBtns.forEach(function (node) {
    node.classList.remove("active");
  });
  btnAll.classList.add("active");
  projectsAll.forEach(function (node) {
    node.classList.add("active-project");
  });
});
// btnFront.addEventListener("click", function () {
//   projectsAll.forEach((node) => node.classList.remove("active"));
//   projectsFront.forEach((node) => node.classList.add("active"));
// });

// btnFull.addEventListener("click", function () {
//   projectsAll.forEach((node) => node.classList.remove("active"));
//   projectsFull.forEach((node) => node.classList.add("active"));
// });
// btnMobile.addEventListener("click", function () {
//   projectsAll.forEach((node) => node.classList.remove("active"));
//   projectsMobile.forEach((node) => node.classList.add("active"));
// });
// btnCms.addEventListener("click", function () {
//   projectsAll.forEach((node) => node.classList.remove("active"));
//   projectsCms.forEach((node) => node.classList.add("active"));
// });
// btnAll.addEventListener("click", function () {
//   projectsAll.forEach((node) => node.classList.add("active"));
// });
