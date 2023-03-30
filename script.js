const rating = document.querySelector(".rating");
const thankYou = document.querySelector('.thankYou')
const rateButton = document.querySelectorAll('.rating_choice button');
const submit = document.querySelector('.rating_submit');
const youHaveSelected = document.querySelector('#selectetNummer');

rateButton.forEach(function (rating) {
    rating.addEventListener("click", function () {
        rateButton.forEach(function (check) {
            if (check.id == 'active') {
                check.id = '';
            };
            rating.id = 'active';
            const active = document.querySelector('#active').innerHTML;
        });
    });
});

submit.addEventListener("click", function () {
    if (active != null) {
        rating.style.display = "none";
        thankYou.style.display = "flex";
        youHaveSelected.innerHTML = active.innerHTML
    }
});




