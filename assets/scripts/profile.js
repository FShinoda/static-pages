var submitBtn = document.getElementById("contact-btn");

console.log(submitBtn);

submitBtn.addEventListener("click", () => {
  window.alert("Form submitted!");
  submitBtn.setAttribute("disabled", true);
  var contactDiv = document.getElementById("contact-container");
  var feedbackText = document.createElement("p");
  feedbackText.innerText = "form successfully submitted!";
  feedbackText.style.color = "green";
  contactDiv.appendChild(feedbackText);
});
