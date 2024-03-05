// Get all of the elements from the DOM that we need
const ratings = document.querySelectorAll(".rating-selector");
const button = document.querySelector(".primary-btn");
const userRating = document.querySelector("#userRating")

// Set user rating value as 0
let value = 0;

// Add EventListener to all rating-selector elements
ratings.forEach(rating => {
    rating.addEventListener("click", event => {
        // Define what a selected rating element is
        const selectedRating = document.querySelector(".rating-selector.selected");
        
        // If a selected rating exists, remove its selected status
        if (selectedRating) {
            selectedRating.classList.remove("selected");
        }

        // Add selected status to the current target
        event.currentTarget.classList.add("selected");

        // set the value to be equal to the current selectors text content
        value = event.currentTarget.textContent;

        // Set the userRating we'll to be equal to value
        userRating.textContent = value;
    });
});

button.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector("#ratingState").classList.add("disabled");
    document.querySelector("#thankYouState").classList.remove("disabled");
});

