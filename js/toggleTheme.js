/* toggle light/dark */
const themeImage = document.getElementById('theme-image');
const body = document.body;
/* const gearImage = document.getElementById('settings'); */
const fightImage = document.getElementById('comp');
const upvoteImage = document.getElementById('upvote');
const profileImage = document.getElementById('profile-photo');
/* const submitImg = document.getElementById('submit-img');
 *//* const newPrompt = document.getElementById('new-prompt-button');
const poemOfTheDay = document.getElementById('poem-of-the-day-button');
const newPoem = document.getElementById('new-poem-button'); */
const toggleInfoButton = document.getElementById('info-image');
const toggleJournal = document.getElementById('journal');
const dropdown = document.getElementById('dropdown-items');
const resultRectangley = document.getElementById("result-rectangle");
const learnImage = document.getElementById('learn');
const liveImage = document.getElementById('live');
const logoImage = document.getElementById('logo-img');

/* const showRectButton = document.getElementById('showRectButton'); */

// Function to set the logo image based on the theme 
function setLogoImage(isDarkMode) {
  if(isDarkMode) {
    logoImage.src = 'images/dimmi.png';
  } else {
    logoImage.src = 'images/dimmi.png';
  }
}

// Function to set the gear image based on the theme
/* function setGearImage(isDarkMode) {
  if (isDarkMode) {
    gearImage.src = 'images/gear-inverted.png';
  } else {
    gearImage.src = 'images/gear.png';
  }
} */

// Function to set the comp image based on the theme
function setCompImage(isDarkMode) {
  if (isDarkMode) {
    fightImage.src = 'images/comp-night.svg';
  } else {
    fightImage.src = 'images/comp-day.svg';
  }
}

// Function to set the learn image based on the theme
function setLearnImage(isDarkMode) {
  if (isDarkMode) {
    learnImage.src = 'images/learn-night.png';
  } else {
    learnImage.src = 'images/learn-day.png';
  }
}

// Function to set the live image based on the theme
function setLiveImage(isDarkMode) {
  if (isDarkMode) {
    liveImage.src = 'images/live-night.png';
  } else {
    liveImage.src = 'images/live-day.png';
  }
}


// Function to set the upvote image based on the theme
function setUpvoteImage(isDarkMode) {
  if (isDarkMode) {
    upvoteImage.src = 'images/contact-night.svg';
  } else {
    upvoteImage.src = 'images/contact-day.svg';
  }
}

// Function to set the profile image based on the theme
function setProfileImage(isDarkMode) {
  if (isDarkMode) {
    profileImage.src = 'images/profile-night.png';
  } else {
    profileImage.src = 'images/profile-day.png';
  }
}

// Function to set the journal image based on the theme
function setJournalImage(isDarkMode) {
  if (isDarkMode) {
    toggleJournal.src = 'images/journal-night.png';
  } else {
    toggleJournal.src = 'images/journal.png';
  }
}

function setDropDownStyles(isDarkMode) {
  if (isDarkMode) {
    dropdown.classList.add('dark-theme');
  } else {
    dropdown.classList.add('light-theme');
  }
}

// Check for user preference in local storage
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Set the initial theme and images based on local storage of user
if (isDarkMode) {
  /*showRectButton.classList.add('dark');*/
  body.classList.add('dark-theme');
  themeImage.src = 'images/moon.png';
  themeImage.alt = 'Moon';
 /*  setGearImage(true); */
  setCompImage(true);
  setUpvoteImage(true);
  setProfileImage(true);
  setJournalImage(true);
  setDropDownStyles(true);
  setLearnImage(true);
  setLiveImage(true);
  setLogoImage(true);
} else {
  /*showRectButton.classList.add('light')*/
  body.classList.add('light-theme');
  themeImage.src = 'images/sun.png';
  themeImage.alt = 'toggle to night';
  /* setGearImage(false); */
  setCompImage(false);
  setUpvoteImage(false);
  setProfileImage(false);
  setJournalImage(false);
  setDropDownStyles(false);
  setLearnImage(false);
  setLiveImage(false);
  setLogoImage(false);
}

/* var resultRectangleDisplayed = true;
if (resultRectangley.style.display == "block") {
  resultRectangleDisplayed = true;
} else {
  resultRectangleDisplayed = false;
} */

function toggleThemeAndImages() {

  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    dropdown.classList.remove('light-theme');
    dropdown.classList.add('dark-theme');
    /*showRectButton.classList.remove('light');
    showRectButton.classList.add('dark');*/
    localStorage.setItem('isDarkMode', 'true');
    themeImage.src = 'images/moon.png';
    themeImage.alt = 'Moon';
    /* setGearImage(true); */
    setCompImage(true);
    setUpvoteImage(true);
    setProfileImage(true);
    setJournalImage(true);
    setLearnImage(true);
    setLiveImage(true);
    setLogoImage(true);
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    dropdown.classList.remove('dark-theme');
    dropdown.classList.add('light-theme');
    /*showRectButton.classList.remove('dark');
    showRectButton.classList.add('light'); */
    localStorage.setItem('isDarkMode', 'false');
    themeImage.src = 'images/sun.png';
    themeImage.alt = 'Sun';
    /* setGearImage(false); */
    setCompImage(false);
    setUpvoteImage(false);
    setProfileImage(false);
    setJournalImage(false);
    setLearnImage(false);
    setLiveImage(false);
    setLogoImage(false);
  }

 /*  if (resultRectangleDisplayed) {
    resultRectangley.style.display == "block";
  } */
/* 
  if (isRectangleVisible) {
    rectangleContainer.style.right = '0'; // Show the rectangle
  } else {
    rectangleContainer.style.right = '-420px'; // Hide the rectangle
  }
  
  if (isPoemRectangleVisible) {
    resultRectangle.style.display = 'block'; // Show the result rectangle
  } else {
    resultRectangle.style.display = 'none'; // Hide the result rectangle
  } */

  /* need to figure out the file structure */

}

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
    toggleThemeAndImages();
  }
});

// Toggle the theme and images when the sun or moon is clicked
themeImage.addEventListener('click', function (event) {
  event.preventDefault(); // Prevents the default behavior of the click event
  toggleThemeAndImages();
});


/*****************************************************************/
/********************** index.html *******************************/
/*****************************************************************/

// Get the current page's filename
var currentPage = window.location.pathname.split('/').pop();

if (currentPage === 'index.html') {

/*   function setSubmitButton(isDarkMode) {
    {
     if (isDarkMode) {
       submitImg.src = 'images/submit-night.png';
     } else {
       submitImg.src = 'images/submit-day.png';
     }
    }
  } */

/*   function setNewPrompt(isDarkMode) {
    if (isDarkMode) {
      newPrompt.src = 'images/newPrompt-night.png';
    } else {
      newPrompt.src = 'images/newPrompt-day.png';
    }
  } */

/*   function setPoemOfTheDay(isDarkMode) {
    if (isDarkMode) {
      poemOfTheDay.src = 'images/poemOfTheDay-night.png';
    } else {
      poemOfTheDay.src = 'images/poemOfTheDay-day.png';
    }
  } */
/* 
  function setNewPoemButton(isDarkMode) {
    if (isDarkMode) {
      newPoem.src = 'images/newPrompt-night.png';
    } else {
      newPoem.src = 'images/newPrompt-day.png';
    }
  } */

  function setInfoButton(isDarkMode) {
    if (isDarkMode) {
      toggleInfoButton.src = 'images/info-night.png';
    } else {
      toggleInfoButton.src = 'images/info.png';
    }
  }

  if (isDarkMode) {
    themeImage.src = 'images/moon.png';
    themeImage.alt = 'Moon';
/*     setSubmitButton(true);
 */    /* setNewPrompt(true); */
 /*    setPoemOfTheDay(true);
    setNewPoemButton(true); */
    setInfoButton(true);
  } else {
    themeImage.src = 'images/sun.png';
    themeImage.alt = 'Sun';
/*     setSubmitButton(false);
 */  /*   setNewPrompt(false);
    setPoemOfTheDay(false);
    setNewPoemButton(false); */
    setInfoButton(false);
  }

  function toggleThemeIfIndex () {
    if (body.classList.contains('light-theme')) {
      /* showRectButton.classList.remove('dark');
      showRectButton.classList.add('light'); */
      localStorage.setItem('isDarkMode', 'false');
      themeImage.src = 'images/sun.png';
      themeImage.alt = 'Sun';
/*       setSubmitButton(false);
 */      /* setNewPrompt(false);
      setPoemOfTheDay(false);
      setNewPoemButton(false); */
      setInfoButton(false);
    } else {
      /* showRectButton.classList.remove('light');
      showRectButton.classList.add('dark'); */
      localStorage.setItem('isDarkMode', 'true');
      themeImage.src = 'images/moon.png';
      themeImage.alt = 'Moon';
/*       setSubmitButton(true);
 */     /*  setNewPrompt(true); */
     /*  setPoemOfTheDay(true);
      setNewPoemButton(true); */
      setInfoButton(true);
    }

    /* trying to fix the bug with the rectangles disappearing when the toggletheme image is pushed
                ⤵                                                                                 */

    /* if (isRectangleVisible) {
      rectangleContainer.style.right = '0'; // Show the rectangle
    } else {
      rectangleContainer.style.right = '-420px'; // Hide the rectangle
    }
    
    if (isPoemRectangleVisible) {
      resultRectangle.style.display = 'block'; // Show the result rectangle
    } else {
      resultRectangle.style.display = 'none'; // Hide the result rectangle
    } */
    
  }

  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      toggleThemeIfIndex();
    }
  });

  // Toggle the theme and images when the sun or moon is clicked
  themeImage.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents the default behavior of the click event
    toggleThemeIfIndex();
  });
} 

/*****************************************************************/
/********************** upvote.html ******************************/
/*****************************************************************/

/* toggle theme for upvote.html here */ 

/*****************************************************************/
/********************** comp.html ********************************/
/*****************************************************************/

/* toggle theme for comp.html here */ 

/*****************************************************************/
/********************** live.html *****************************/
/*****************************************************************/

/* toggle theme for live.html here */ 

/*****************************************************************/
/********************** learn.html *****************************/
/*****************************************************************/

/* toggle theme for learn.html here */ 

/*****************************************************************/
/********************** journal.html *****************************/
/*****************************************************************/

/* toggle theme for journal.html here */ 

/*****************************************************************/
/********************** settings.html ****************************/
/*****************************************************************/

/* toggle theme for settings.html here */ 