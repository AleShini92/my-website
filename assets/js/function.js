function mySkills() {

    var skill = document.getElementById("my-skills");
    var about = document.getElementById("myPortfolio");

    if (skill.style.display === "none") {
        skill.style.display = "block"; // Show content
        about.style.display = "none";
    } else {
        skill.style.display = "block"; // Hide content
    }

}

function portfolio() {
    var portfolio = document.getElementById("myPortfolio");
    var skill = document.getElementById("my-skills");

    if(portfolio.style.display === "block") {
        portfolio.style.display = "block";
    } else {
        portfolio.style.display = "block";
        skill.style.display = "none"
    }
}



let mybutton = document.getElementById("myBtn");

// When the user scrolls down px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}