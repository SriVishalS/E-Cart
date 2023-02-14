
console.log("hi");
var firebaseConfig = {
  apiKey: "AIzaSyC7Ah7y1PjKxw9IcGAEqXbuzBXrHAgPx58",
  authDomain: "web-cart-1a9b3.firebaseapp.com",
  projectId: "web-cart-1a9b3",
  storageBucket: "web-cart-1a9b3.appspot.com",
  messagingSenderId: "719935465606",
  appId: "1:719935465606:web:4a1d0b77074957e96ac907",
};
firebase.initializeApp(firebaseConfig);
function signin() {
  var email = document.getElementById("mailInp").value;
  var pass = document.getElementById("passInp").value;
  console.log(email,pass);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(function (user) {
      console.log(user);
      window.location.href = `../index.html`;
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
}
