// $(document).ready(function() {
//     $('#profile__ripple').ripples({
//         resolution: 512,
//         dropRadius: 10
//     });
// });

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

function fetch_info(i) {
    let profile = ["./images/1.jpg", "./images/2.png", "./images/3.jpg"];
    let name = ["Ashish Pal", "Devaansh Singh", "Raj Shukla"];
    let status = ["191B073", "191B093", "191B197"];
    let abouti = ["191B073", "191B093", "191B197"];
    document.getElementById("profile").src = profile[i];
    document.getElementById("name").innerHTML = name[i];
    document.getElementById("status").innerHTML = status[i];
    document.getElementById("about").innerHTML = abouti[i];
}

// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("menu");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

$(document).ready(function() {
    //change the integers below to match the height of your upper div, which I called
    //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
    //to figure out what the scroll position is when exactly you want to fix the nav
    //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
    //you know the position.
    $(window).scroll(function () { 
  
      console.log($(window).scrollTop());
  
      if ($(window).scrollTop() > 550) {
        $('#menu').addClass('menu-fixed-top');
      }
  
      if ($(window).scrollTop() < 551) {
        $('#menu').removeClass('menu-fixed-top');
      }
    });
  });