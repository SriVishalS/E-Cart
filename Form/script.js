sendMail = () => {
  const usrObj2 = {
    customer_name: document.getElementById("bName").value,
    customer_email: document.getElementById("bMail").value,
    customer_address: document.getElementById("bAddress").value,
    customer_pincode: document.getElementById("bZip").value,
    customer_city: document.getElementById("bCity").value,
  };
  emailjs.send("service_5ap2gw8", "template_1945rd4", usrObj2).then((res) => {
    alert("Your order Is Recived We Will Deliver You Shortly");
  });
};
