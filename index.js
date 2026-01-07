window.addEventListener("DOMContentLoaded", function() {

    const card_information = document.getElementsByClassName("card-component-main-information")
    const card_thankyou = document.getElementsByClassName("card-thankyou")
    const form = document.getElementById("form_id")


    const ratings = document.getElementById("rating")
    const buttons = document.querySelectorAll(".number-button")



    form.addEventListener("submit", function(event) {
        console.log(event)
        event.preventDefault()
        console.log(card_information)

        card_information[0].classList.add("active")
        card_thankyou[0].classList.add("active")
    })


    buttons.forEach((rating) => {
        rating.addEventListener("click", () => {
            ratings.innerHTML = rating.innerHTML
        })
    })

}, false);

