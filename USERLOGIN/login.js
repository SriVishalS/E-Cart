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

inputs.forEach((input) => {
  input.addEventListener("focus", addClass);
  input.addEventListener("blur", removeClass);
});
const btn = document
  .getElementById("loginBtn")
  .addEventListener("click", () => {
    let usrName = document.getElementById("userInp").value;
    let passName = document.getElementById("passInp").value;
    const nameRegex = /^[a-zA-Z\-]+$/;
    const passRegularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (
      nameRegex.test(usrName) === true && passName
 
    ) {
      window.location.href = "Web Cart.html";
    } else {
      alert("Please Check Your Login Credentials");
    }
  });
