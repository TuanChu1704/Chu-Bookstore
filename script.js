/*  RMIT University Vietnam
  Course: COSC2430 Web Programming
  Semester: 2023A
  Assessment: Assignment 1
  Author: Chu Nhu Bao Tuan
  ID: s3977886
  Acknowledgement: https://www.youtube.com/watch?v=6XmDdIRmg84 https://www.w3schools.com/html/ */
  
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let loginform = document.querySelector('.login-form-container');


menu.onclick = () =>{
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginform.classList.remove('active');
}
