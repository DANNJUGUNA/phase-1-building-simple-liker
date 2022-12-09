// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  if (heart.innerText = '♡'){
  mimicServerCall()
    .then(function(){
       heart.innerText = '♥';
    })
    }
    else{
      mimicServerCall()
      .then(function(){
        heart.innerText='♡';
      })
      
    }
}
for (const heart of hearts) {
  heart.addEventListener("click", likeCallback);
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
