const inputs = document.querySelectorAll(".input");

function addClass() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function removeClass() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
const firebaseConfig = {
  apiKey: "AIzaSyC7Ah7y1PjKxw9IcGAEqXbuzBXrHAgPx58",
  authDomain: "web-cart-1a9b3.firebaseapp.com",
  projectId: "web-cart-1a9b3",
  storageBucket: "web-cart-1a9b3.appspot.com",
  messagingSenderId: "719935465606",
  appId: "1:719935465606:web:4a1d0b77074957e96ac907",
};
firebase.initializeApp(firebaseConfig);
function login() {
  var email = document.getElementById("mailInp").value;
  var password = document.getElementById("passInp").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (user) {
      // login successful, redirect to home page
      window.location.href = `Web Cart.html`;
    })
    .catch(function (error) {
      // login failed, display error message
      var errorCode = error.code;

      var errorMessage = error.message;
      alert(errorMessage);
    });
}
