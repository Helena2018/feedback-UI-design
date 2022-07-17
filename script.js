const ratings = document.querySelectorAll('.rating')
const ratingContainer = document.querySelector('.ratings-container')
const panel = document.getElementById('panel')
const sentBtn = document.getElementById('send')

let selectedRating = 'Satisfied'
ratingContainer.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  }
})

sentBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support!</p>
  `
})

function removeActive() {
  for(let i = 0; i < ratings.length; i ++) {
    ratings[i].classList.remove('active')
  }
}