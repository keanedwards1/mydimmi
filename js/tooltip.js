/* menu-bar tooltips */
const settings = document.getElementById('settings');
const settingsTooltip = document.querySelector('#settings-tooltip');

settings.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  settingsTooltip.style.top = y + 34 + "px";
  settingsTooltip.style.left = x - 23 + "px";
});


const learn = document.getElementById('learn');
const learnTooltip = document.querySelector('#learn-tooltip');

learn.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  learnTooltip.style.top = y + 34 + "px";
  learnTooltip.style.left = x - 23 + "px";
});


const journal = document.getElementById('journal');
const journalTooltip = document.querySelector('#journal-tooltip');

journal.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  journalTooltip.style.top = y + 34 + "px";
  journalTooltip.style.left = x - 23 + "px";
});


const upvote = document.getElementById('upvote');
const upvoteTooltip = document.querySelector('#upvote-tooltip');

upvote.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  upvoteTooltip.style.top = y + 34 + "px";
  upvoteTooltip.style.left = x - 23 + "px";
});


const comp = document.getElementById('comp');
const compTooltip = document.querySelector('#comp-tooltip');

comp.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  compTooltip.style.top = y + 34 + "px";
  compTooltip.style.left = x - 23 + "px";
});

/* need to figure out where toggleInfoButton was declared and then see 
what relationship that div has to the infoTooltip and then copy that for
all the divs above */

/* bottom-bar tooltips */
const infoTooltip = document.querySelector(".tooltip5");

toggleInfoButton.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  infoTooltip.style.top = y - 30 + "px";
  infoTooltip.style.left = x - 43 + "px";
});


/* index.html tooltips */
const submitTooltip = document.querySelector(".tooltip");
const newPromptTooltip = document.querySelector(".tooltip2");
const promptOfTheDayTooltip = document.querySelector(".tooltip3");
const newPoemTooltip = document.querySelector(".tooltip4");

if (currentPage === 'index.html') {
  submitImg.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    submitTooltip.style.top = y - 45 + "px";
    submitTooltip.style.left = x - 50 + "px";
  });

  newPrompt.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    newPromptTooltip.style.top = y - 40 + "px";
    newPromptTooltip.style.left = x - 40 + "px";
  });

  poemOfTheDay.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    promptOfTheDayTooltip.style.top = y - 40 + "px";
    promptOfTheDayTooltip.style.left = x - 55 + "px";
  });

  newPoem.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    newPoemTooltip.style.top = y - 40 + "px";
    newPoemTooltip.style.left = x - 30 + "px";
  });
}



/*const tooltip = document.getElementById('tooltip4');
const promptText = document.getElementById('prompt-text');

// Update tooltip text
promptText.addEventListener('mouseenter', () => {
  tooltip.textContent = 'your writing prompt'; // Change the tooltip text dynamically here
});

promptText.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none'; // Hide the tooltip when the user leaves the text
});*/

