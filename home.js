"use strict";

/*login clickable*/
let openlogbtn = document.querySelector(".userbtn");
let loginhead = document.querySelector(".login");
let closelogbtn = document.querySelector(".close-modallogin");
openlogbtn.addEventListener("click", function () {
  loginhead.classList.remove("hidden");
});
closelogbtn.addEventListener("click", function () {
  loginhead.classList.add("hidden");
});
/*registration clickable*/
let openregbtn = document.querySelector(".signup");
let reghead = document.querySelector(".registration");
let closeregbtn = document.querySelector(".close-modalreg");
openregbtn.addEventListener("click", function () {
  loginhead.classList.add("hidden");
  reghead.classList.remove("hidden");
});
closeregbtn.addEventListener("click", function () {
  reghead.classList.add("hidden");
});
/*
let serviceone = document.querySelector(".serviceone");
let servicetwo = document.querySelector(".servicetwo");
let servicethree = document.querySelector(".servicethree");
*/ /*
let reg = document.querySelector(".regbtn");
reg.addEventListener("click", function () {
  let x=new RegExp("^[A-Z][a-z]{3,}");
  let y=document.querySelector(".nameer").value;
  if(x.test(y)) {
    document.querySelector(".nameermsg").innerHTML="In"
  }
  let pass = document.querySelector(".pass1").value;
  let cnfpass = document.querySelector(".cnfpass").value;
  if (pass !== cnfpass) {
    document.querySelector(".cnfpasser").innerHTML =
      "!Both passwords not matched"
  if (pass === cnfpass) {
    document.querySelector(".cnfpasser").innerHTML = "";
  }
}); */
function changepass() {
  let pass = document.querySelector(".pass1").value;
  let cnfpass = document.querySelector(".cnfpass").value;
  if (pass !== cnfpass) {
    document.querySelector(".cnfpasser").innerHTML =
      "!Both passwords not matched";
    return false;
  }
  if (pass === cnfpass) {
    document.querySelector(".cnfpasser").innerHTML = "";
    alert("Registration successful");
  }
}
