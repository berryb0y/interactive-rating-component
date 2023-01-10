const article__ratings = document.querySelectorAll(".article__ratings");
const thankyoustate = document.querySelector(".thankyoustate");
const ratingstate = document.querySelector(".ratingstate");
const article__submit = document.querySelector(".article__submit");
const rate_point = document.querySelector("#rate");

let rate = null;

article__ratings.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        const active = document.querySelector('.checked');
        if (active) {
            active.classList.remove("checked")
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})

article__submit.addEventListener("click", () => {
    if (rate) {
        rate_point.innerText = rate;
        ratingstate.classList.add("hidden");
        thankyoustate.classList.remove("hidden");
    }
})
