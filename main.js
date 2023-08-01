// variables for user's input
const adj1 = document.getElementById("adj1");
const adj2 = document.getElementById("adj2");
const noun1 = document.getElementById("noun1");
const clothing = document.getElementById("clothing");
const bodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

// Varable to display the mad lib
const madLibDisplay = document.querySelector(".mad-lib");
// Variable for the button
const form = document.querySelector("form");

// Variable for the mAtLib story
const story = `My friends and I started a secret club! We meet every day by the <b>${adj1}</b> <b>${noun1}</b>.
 Our club has come very special rules. If you want to join, you have to wear a <b>${adj2}</b> <b>${clothing}</b> on your <b>${bodyPart}<b>.
 You are not allowed to <b>${verb1}</b> during meetings, and you can only eat <b>${food}</b> for your meals. If you are interested in joining, let me know! `;
// Validate function
function validateForm(elementList) {
  for (let i = 0; i < elementList.length; i++) {
    if (elementList[i].value == "") {
      alert(`${elementList[i].name} must be filled out!`);
      elementList[i].focus();
      return false;
    }
  }
  MadLibStoryDisplay();
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  validateForm([adj1, noun1, adj2, clothing, bodyPart, verb1, food]);
});

function MadLibStoryDisplay() {
  madLibDisplay.innerHTML = story
    .replace(`${adj1}`, adj1.value)
    .replace(`${noun1}`, noun1.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${bodyPart}`, bodyPart.value)
    .replace(`${verb1}`, verb1.value)
    .replace(`${food}`, food.value);
}
