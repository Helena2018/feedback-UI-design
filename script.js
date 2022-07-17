const ratings = document.querySelectorAll('.rating')
const panel = document.getElementById('panel')
const sentBtn = document.getElementById('send')

let selectedRating = 'Satisfied'
panel.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
    console.log(selectedRating)
  }
})

function removeActive() {
  for(let i = 0; i < ratings.length; i ++) {
    ratings[i].classList.remove('active')
  }
}