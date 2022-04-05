const ratingsOptions = document.querySelectorAll('[name="radio-option"]');
const submitBtn = document.querySelector("#rating-submit-btn");
const ratingResultSpan = document.querySelector(".ratings__option-selected");

let notSelectedArray = [];

function checkRating() {
  for (let i = 0; i < ratingsOptions.length; i++) {
    if (!ratingsOptions[i].checked) {
      notSelectedArray.push(ratingsOptions[i]);
      if (notSelectedArray.length === ratingsOptions.length) {
        submitBtn.innerHTML = "No Rating Selected";
        function initialHTML() {
          submitBtn.innerHTML = "Submit";
        }
        setTimeout(initialHTML, 2500);
      }
    }
    if (ratingsOptions[i].checked) {
      ratingResultSpan.innerHTML = ratingsOptions[i].value;
      submitBtn.setAttribute("disabled", "");
    }
  }
}

submitBtn.addEventListener("click", checkRating);
