/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
const DarkModeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    // This section will run whenever the button is clicked
   console.log("Clicked change color!");
   // Toggle the dark-mode class - this automatically switches between light/dark
   document.body.classList.toggle("dark-mode");
}
// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
DarkModeButton.addEventListener("click", toggleDarkMode);

// Reduce Motion functionality
const reduceMotionButton = document.getElementById("reduce-motion");
let motionReduced = false;

const toggleReduceMotion = () => {
    motionReduced = !motionReduced;
    
    if (motionReduced) {
        document.body.classList.add("reduce-motion-On");
        reduceMotionButton.textContent = "Remove Motion On";
        console.log("Motion reduced - animations disabled");
    } else {
        document.body.classList.remove("reduce-motion-On");
        reduceMotionButton.textContent = "Remove Motion Off";
        console.log("Motion enabled - animations restored");
    }
}

reduceMotionButton.addEventListener("click", toggleReduceMotion);

// Step 1: Query for the submit button using its id
const Form_Submit_button = document.getElementById("rsvp-button");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("PhoneNumber");
const interestInput = document.getElementById("interest");
const groupSizeInput = document.getElementById("group-size");

const userName = nameInput.value;
    
// Step 2: Do the same for email input and other inputs
const userEmail = emailInput.value;
const userPhone = phoneInput.value;
const userInterest = interestInput.value;
const groupSize = groupSizeInput.value;
    
let count = 3;
/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
const addParticipant = (event) => {
    // Prevent the form from submitting normally
    event.preventDefault();
    
    // Step 1: Get the name input from the form by its id, then use .value (NO parentheses)
  
    // Step 3: Create a new <p> element
    const newParticipant = document.createElement("p");
    
    // Step 4: Set the text content with user's name and details
    newParticipant.textContent = userName + " from " + userEmail + " with " + userPhone + " has registered for " + userInterest + " with " + groupSize + " people";
    
    // Step 5: Find the rsvp-participants div and add the new element
    const participantsDiv = document.querySelector(".rsvp-participants");
    participantsDiv.appendChild(newParticipant);

    const existingCount = document.getElementById("rsvp-count");
    if (existingCount){
      existingCount.remove();
    }
    count += 1
    const newCounter = document.createElement("p");
    newCounter.id = "rsvp-count";
    newCounter.textContent = "⭐" + count + " people have RSVP'd to this event!"

    participantsDiv.appendChild(newCounter);
}
const toggleModal = (person)=>{
  // let modal =0;
  const modal = document.getElementById("success-modal");
  const modalContent = document.getElementById("modal-text"); 
  modalContent.textContent = "Thank you "+person + "! Your RSVP has been successfully submitted. We can't wait to see you at our event!";
  
  modal.style.display ="flex";
  let intervalid =  setInterval(animateImage,500);
  setTimeout(()=>{
    modal.style.display = "none";
    clearInterval(intervalid);
  },5000);
}

let rotateFactor = 0;
const animateImage =() =>{
  const modalImage = document.getElementById("modal-image");
  if (modalImage) {
    if (rotateFactor === 0){
        rotateFactor = -10;
      }
    else{
      rotateFactor = 0;
    }
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
  }
}
const modalclosebutton = document.getElementById("modal-close-button");
const display=()=>{
  const modal = document.getElementById("success-modal");
  modal.style.display = "none";
}
modalclosebutton.addEventListener("click",display);

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
const validateForm = (event) => {
  event.preventDefault();
  
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  
  // Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++){
    // Inside loop, validate the value of each input
    if (rsvpInputs[i].type === "number") {
      // For number inputs, check if value is less than 1
      if (rsvpInputs[i].value < 1) {
        console.log("This value is too short or empty");
        containsErrors = true;
        rsvpInputs[i].classList.add("error");
      } 
   }
   else if (rsvpInputs[i].value.length < 2) {
      console.log("This value is too short or empty");
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    }
   else 
      {
      console.log("This value has valid data");
      console.log(rsvpInputs[i].value);
      rsvpInputs[i].classList.remove("error");
      }
  }
  
  if (!emailInput.value.includes("@")) {
    containsErrors = true;
    console.log("This email address does not contain @");
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }
  
  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors == false) {
    const userName = nameInput.value; // Get the user's name
    addParticipant(event);
    toggleModal(userName);
    
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
Form_Submit_button.addEventListener("click", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/

/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
