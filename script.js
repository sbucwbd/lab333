// Get the images from the HTML

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");


// Get the captions

let caption1 = document.getElementById("caption1");
let caption2 = document.getElementById("caption2");
let caption3 = document.getElementById("caption3");


// Get the story title and description

let storyTitle = document.getElementById("story-title");
let storyDescription = document.getElementById("story-description");


// Get the buttons

let mechanicButton = document.getElementById("mechanic-button");
let problemButton = document.getElementById("problem-button");



// Sequence 1
// Damaged car -> Tigo repairs it -> Fixed car

function showMechanicStory() {

    image1.src = "./z1.png";
    image2.src = "./z2.png";
    image3.src = "./z3.png";


    caption1.textContent = "The 370Z is damaged.";

    caption2.textContent = "Tigo tries to repair it.";

    caption3.textContent = "The 370Z is fixed!";


    storyTitle.textContent =
        "Sequence 1: Tigo the Mechanic";


    storyDescription.textContent =
        "Tigo repairs the damaged 370Z and brings it back to life.";
}



// Sequence 2
// Fixed car -> Tigo works on it -> Damaged car

function showProblemStory() {

    image1.src = "./z3.png";
    image2.src = "./z2.png";
    image3.src = "./z1.png";


    caption1.textContent =
        "The 370Z is perfectly fine.";

    caption2.textContent =
        "Tigo starts working on it.";

    caption3.textContent =
        "Now the 370Z is damaged.";


    storyTitle.textContent =
        "Sequence 2: Tigo the Problem";


    storyDescription.textContent =
        "Tigo tries to work on a perfectly good 370Z, but somehow makes everything worse.";
}



// Event listeners

mechanicButton.addEventListener(
    "click",
    showMechanicStory
);


problemButton.addEventListener(
    "click",
    showProblemStory
);