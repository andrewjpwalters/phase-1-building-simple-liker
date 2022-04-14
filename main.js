// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButton = document.querySelectorAll('.like');
const errorModal = document.querySelector('#modal')
const modalMessage = document.querySelector('#modal-message')
const heartIcon = document.querySelector('.like-glyph')

likeButton.forEach(button => {
  button.addEventListener('click', () => {
    mimicServerCall()
      .then(function () {
        if (heartIcon.classList !== 'activated-heart') {
          heartIcon.textContent = FULL_HEART
          heartIcon.classList = 'activated-heart'
        } else {
          heartIcon.textContent = EMPTY_HEART
          heartIcon.class.remove('activated-heart')
        }
      })
      .catch(function (error) {
        errorModal.classList.remove('hidden');
        setTimeout(() => {
          errorModal.classList = 'hidden'
          errorMessage.remove()
        }, 3000);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error;
        return modalMessage.append(errorMessage)
      })

  })
})






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
