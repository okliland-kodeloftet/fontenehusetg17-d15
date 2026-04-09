const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", function () {
  console.log("Hamburgerikon er klikket på");

  const navList = document.querySelector("#navList");
  console.log(navList);

  navList.classList.toggle("navHamburgerList");
});



const sendButton = document.querySelector("#sendButton");
console.log(sendButton)

sendButton.addEventListener("click", function (){
  const userInput = document.querySelector("#userInput").value
  const inputDisplay = document.querySelector("#inputDisplay")
  console.log(userInput, inputDisplay)

  const newItem = document.createElement("li")
  newItem.textContent = userInput

  inputDisplay.appendChild(newItem);
})