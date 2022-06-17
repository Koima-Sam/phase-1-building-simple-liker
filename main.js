// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likerButtons = document.querySelectorAll('.like-glyph');
for (const btn of likerButtons){
  btn.addEventListener('click',initializeClick)
}

function initializeClick(event){
  mimicServerCall()
.then(function (){
    if(event.target.innerText === EMPTY_HEART){
      event.target.innerText = FULL_HEART;
      event.target.className = 'activated-heart';
    }
    else{
      event.target.innerHTMl = EMPTY_HEART;
      event.target.className = '';
    }
  })
.catch(function (error){
  document.getElementById('modal').className = "";
  document.getElementById('modal').innerText = error;
  setTimeout(()=>document.getElementById('modal').className='hidden', 3000);
})
  
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
