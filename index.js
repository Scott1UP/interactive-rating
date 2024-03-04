const form = document.querySelector("#ratingForm");
const rating1 = document.querySelector("#userRating1");
const rating2 = document.querySelector("#userRating2");
const rating3 = document.querySelector("#userRating3");
const rating4 = document.querySelector("#userRating4");
const rating5 = document.querySelector("#userRating5");
const button = document.querySelector(".primary-btn");

rating1.addEventListener("click", event => {
    console.log(event);
    rating1.classList.toggle("selected");
});

rating2.addEventListener("click", event => {
    console.log(event);
    rating2.classList.toggle("selected");
});

rating3.addEventListener("click", event => {
    console.log(event);
    rating3.classList.toggle("selected");
});

rating4.addEventListener("click", event => {
    console.log(event);
    rating4.classList.toggle("selected");
});

rating5.addEventListener("click", event => {
    console.log(event);
    if (rating5.classList.contains("selected")) {
        rating5.classList.remove("selected");
    }
    else if (!rating5.classList.contains("selected")) {
        rating5.classList.add("selected");
    } 
});

