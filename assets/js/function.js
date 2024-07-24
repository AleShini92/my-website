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