console.log("Hello World!");

/*
const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", function () {
  console.log("Hamburgerikon er klikket på");

  const navList = document.querySelector("#navList");
  console.log(navList);

  navList.classList.toggle("navHamburgerList");
});

// 
// 


const showMore = document.querySelector("#showMore");
console.log(showMore);

showMore.addEventListener("click", function (){
  console.log("knappen er trykket på");

  // DOM manipulasjon
  const popUpWindow = document.createElement("div");
  // Inline styling, som vi må kunne skrive uten hjelp fra CSS.
  popUpWindow.style.border = "2px solid red";
  // ClassList gjør at vi kan lage ett klassenavn som vi kan bruke inne i CSS
  popUpWindow.classList.add("popUpBorder");

  const popUpText = document.createElement("p")
  popUpText.textContent = "Lorem ipsum dolar ect... Lorem ipsum dolar ect... Lorem ipsum dolar ect... Lorem ipsum dolar ect... Lorem ipsum dolar ect...";

  popUpWindow.appendChild(popUpText);

  const heroIntroContainer = document.querySelector("#heroIntroContainer");
  console.log(heroIntroContainer);

  heroIntroContainer.appendChild(popUpWindow);
})


// 
// 


function showMoreToggle(event) {


  console.log(aboutShowMore, projectsShowMore);

  const popUpText = document.createElement("p");
  console.log(popUpText)
  popUpText.textContent = "Trallalalalalalallaallalalalalaallaalllaalalal"

  event.target.appendChild(popUpText)
}

// showMoreToggle();

const aboutShowMore = document.querySelector("#aboutShowMore")
const ProjectsShowMore = document.querySelector("#projectsShowMore")

aboutShowMore.addEventListener("click", showMoreToggle)
ProjectsShowMore.addEventListener("click", showMoreToggle)

*/

// 
// 

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