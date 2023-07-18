const rectangleContainer = document.getElementById('rectangleContainer');
const closeButton = document.getElementById('closeButton');
const infoButton = document.getElementById('info-image');
const toggleThemeButton = document.getElementById('theme-image');
const profilePhotoy = document.getElementById('profile-photo');
const logoImagey = document.getElementById('logo'); /* This didn't work, for some reason when the 
website goes to a new tab, the popup dissapears anyways */

/*var infoButton; 
if (infoButton.classList.conatains('light')) {
  infoButton= document.getElementsById('infoButton.light');
} else {
  infoButton= document.getElementsById('infoButton.dark');
} */

let isRectangleVisible = false;

const toggleRectangleVisibility = () => {
  if (isRectangleVisible) {
    rectangleContainer.style.right = '-420px'; // Hide the rectangle
  } else {
    rectangleContainer.style.right = '0'; // Show the rectangle
  }
  isRectangleVisible = !isRectangleVisible; // Toggle the visibility
};

infoButton.addEventListener('click', toggleRectangleVisibility);

closeButton.addEventListener('click', (event) => {
  rectangleContainer.style.right = '-320px'; // Hide the rectangle
  isRectangleVisible = false; // Update the visibility state
  event.stopPropagation(); // Prevent event bubbling
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'i') {
    toggleRectangleVisibility();
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (isRectangleVisible && target !== rectangleContainer && !rectangleContainer.contains(target) && target !== infoButton && target !== toggleThemeButton && target !== profilePhotoy && target !== logoImagey) {
    toggleRectangleVisibility(); }
});


/*****************************************************/
/*************** #result-rectangle ********************/
/*****************************************************/

// JavaScript code to show and hide the result rectangle
if (currentPage === 'index.html') {
    const resultRectangle = document.getElementById("result-rectangle");
    const submitButton = document.getElementById("submit-img");
    const poemInputy = document.getElementById("poem-input"); // weird variable name cause poemInput was already declared
    const resultRectanglePoem = document.getElementById("result-rectangle-poem");
    let isPoemRectangleVisible = false;

    function showResultRectangle() {
      const content = poemInputy.value;
      resultRectanglePoem.textContent = content;
      /* resultRectangle.textContent = content; */
      resultRectangle.style.display = "block";
      isPoemRectangleVisible = true;
    }

    function hideResultRectangle() {
      resultRectangle.style.display = "none";
      isPoemRectangleVisible = false;
    }

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (isPoemRectangleVisible) {
        hideResultRectangle();
      } else {
        showResultRectangle();
      }
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (isPoemRectangleVisible && target !== resultRectangle && !resultRectangle.contains(target) && target !== submitButton && target !== toggleThemeButton && target !== profilePhotoy && target !== logoImagey) {
        hideResultRectangle();
      }
    });

    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        if (isPoemRectangleVisible) {
          hideResultRectangle();
        } else {
          showResultRectangle();
        }
      }
    });
  }

