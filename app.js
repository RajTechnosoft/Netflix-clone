let inputArea = document.querySelector("#input");
let placeholder = document.querySelector("#plh-email");
let faq = document.querySelectorAll(".ques");
// inputArea.forEach((e) => {
//   e.addEventListener("focus", () => {
//     e.nextElementSibling.style.fontSize = "13px";
//     e.nextElementSibling.style.top = "10px";
//   });
// });

inputArea.addEventListener("focus", function () {
  // alert("input area clicked");
  placeholder.style.fontSize = "13px";
  placeholder.style.top = "10px";
});

let btns = document.querySelectorAll(".btn");
let ans = document.querySelectorAll(".ans");
let inputUsername = document.querySelector("#username");
let inputPassword = document.querySelector("#passwrd");
let loginBtn = document.querySelector(".login-btn");
let container = document.querySelector(".containerr");

let ques = document.querySelectorAll(".ques");

// ques.forEach((e) => {
//   e.addEventListener("click", (e) => {
//     alert(e.nextElementSibling);

//     if (
//       e.nextElementSibling.style.display === "none" ||
//       e.nextElementSibling.style.display === ""
//     ) {
//       e.nextElementSibling.style.display === "flex";
//     } else if (e.nextElementSibling.style.display === "flex") {
//       e.nextElementSibling.style.display === "none";
//     }
//   });
// });

btns.forEach((e) => {
  e.addEventListener("click", () => {
    // e.parentElement.parentElement.nextElementSibling.style.transition = "3s";
    if (
      e.parentElement.parentElement.nextElementSibling.style.display ===
        "none" ||
      e.parentElement.parentElement.nextElementSibling.style.display === ""
    ) {
      ans.forEach((e) => {
        e.style.display = "none";
      });
      e.parentElement.parentElement.nextElementSibling.style.display = "flex";
      e.innerHTML = "close";

      // alert(e.parentElement.nextElementSibling.style.display);
    } else if (
      e.parentElement.parentElement.nextElementSibling.style.display === "flex"
    ) {
      e.parentElement.parentElement.nextElementSibling.style.display = "none";
      e.innerHTML = "Ans";
    }
  });
});
