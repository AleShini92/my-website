function mySkills() {
    //document.getElementById("my-skills").style.display = "block";

    var skill = document.getElementById("my-skills");
    var about = document.getElementById("myPortfolio");

    // if (skill.style.display === "none" || about.style.display === "block") {
    //     skill.style.display = "block"; // Show content
    //     about.style.display = "none";
    // } else {
    //     skill.style.display = "none"; // Hide content
    //     about.style.display = "block";
    // }

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