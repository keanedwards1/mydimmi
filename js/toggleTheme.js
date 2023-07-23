/* toggle light/dark */
const themeImage = document.getElementById('theme-image');
const body = document.body;
const fightImage = document.getElementById('comp');
const upvoteImage = document.getElementById('upvote');
const profileImage = document.getElementById('profile-photo');
const toggleInfoButton = document.getElementById('info-image');
const toggleJournal = document.getElementById('journal');
const resultRectangley = document.getElementById("result-rectangle");
const learnImage = document.getElementById('learn');
const liveImage = document.getElementById('live');
const logoImage = document.getElementById('logo-img');
const aboutImage = document.getElementById('about-image');
const bottomBar = document.getElementById('bottom-bar');
const itemName = document.getElementsByClassName('item-name');
const topBar = document.getElementById('home');

// Function to set the logo image based on the theme 
function setLogoImage(isDarkMode) {
  if(isDarkMode) {
    logoImage.src = '/images/dimmi.png';
  } else {
    logoImage.src = '/images/dimmi.png';
  }
}

// Function to set the comp image based on the theme
function setCompImage(isDarkMode) {
  if (isDarkMode) {
    fightImage.src = '/images/comp-night.svg';
  } else {
    fightImage.src = '/images/comp-day.svg';
  }
}

// Function to set the learn image based on the theme
function setLearnImage(isDarkMode) {
  if (isDarkMode) {
    learnImage.src = '/images/learn-night.png';
  } else {
    learnImage.src = '/images/learn-day.png';
  }
}

// Function to set the live image based on the theme
function setLiveImage(isDarkMode) {
  if (isDarkMode) {
    liveImage.src = '/images/live-night.png';
  } else {
    liveImage.src = '/images/live-day.png';
  }
}


// Function to set the upvote image based on the theme
function setUpvoteImage(isDarkMode) {
  if (isDarkMode) {
    upvoteImage.src = '/images/contact-night.svg';
  } else {
    upvoteImage.src = '/images/contact-day.svg';
  }
}

// Function to set the journal image based on the theme
function setJournalImage(isDarkMode) {
  if (isDarkMode) {
    toggleJournal.src = '/images/journal-night.png';
  } else {
    toggleJournal.src = '/images/journal.png';
  }
}

// Function to set the Info Button style
function setInfoButton(isDarkMode) {
  if (isDarkMode) {
    toggleInfoButton.src = '/images/info-night.png';
  } else {
    toggleInfoButton.src = '/images/info.png';
  }
}

// function to set the bottom bar color
function setBottomBarColor(isDarkMode) {
  if (isDarkMode) {
    bottomBar.style.backgroundColor = '#1f2531';
/*     bottomBar.style.backgroundImage = 'url(images/tangerine.jpeg)'; */
  } else {
    bottomBar.style.backgroundColor = '#d9edf9';
  }
}

// Function to set the Header Bar Color
function setTopBarColor(isDarkMode) {
  if (isDarkMode) {
    topBar.style.backgroundColor = '#1f2531';
/*     bottomBar.style.backgroundImage = 'url(images/tangerine.jpeg)'; */
  } else {
    topBar.style.backgroundColor = '#d9edf9';
  }
}

// Function to set the Gallery Nav Bar Text Color

function setNavBarTextColor(isDarkMode) {
  const navigationLinks = document.querySelectorAll('.navigation a');

  if (isDarkMode) {
    navigationLinks.forEach(link => {
      link.style.color = '#d9d9d9';
    });
  } else {
    navigationLinks.forEach(link => {
      link.style.color = '#505050';
    });
  }
  const hoverColor = isDarkMode ? 'white' : 'black';

  navigationLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = hoverColor;
    });

    link.addEventListener('mouseleave', () => {
      if (isDarkMode) {
        link.style.color = '#b3b3b3';
      } else {
        link.style.color = '#505050';
      }
    });
  });
}


// Check for user preference in local storage
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Set the initial theme and images based on local storage of user
if (isDarkMode) {
  body.classList.add('dark-theme');
  themeImage.src = '/images/moon.svg';
  themeImage.alt = 'Moon';
  setCompImage(true);
  setUpvoteImage(true);
  setJournalImage(true);
  setLearnImage(true);
  setLiveImage(true);
  setLogoImage(true);
  setInfoButton(true);
  setBottomBarColor(true);
  setTopBarColor(true);
  setNavBarTextColor(true);

  for (let i = 0; i < itemName.length; i++) {
    const item = itemName[i];
    if (body.classList.contains('light-theme')) {
      // Set text color for light theme
      item.style.color = 'black';
    } else {
      // Set text color for dark theme
      item.style.color = 'white';
    }
  }
} else {
  body.classList.add('light-theme');
  themeImage.src = '/images/sun.svg';
  themeImage.alt = 'toggle to night';
  setCompImage(false);
  setUpvoteImage(false);
  setJournalImage(false);
  setLearnImage(false);
  setLiveImage(false);
  setLogoImage(false);
  setInfoButton(false);
  setBottomBarColor(false);
  setTopBarColor(false);
  setNavBarTextColor(false);
}

function toggleThemeAndImages() {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('isDarkMode', 'true');
    themeImage.src = '/images/moon.svg';
    themeImage.alt = 'Moon';
    setCompImage(true);
    setUpvoteImage(true);
    setJournalImage(true);
    setLearnImage(true);
    setLiveImage(true);
    setLogoImage(true);
    setInfoButton(true);
    setBottomBarColor(true);
    setTopBarColor(true);
    setNavBarTextColor(true);
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('isDarkMode', 'false');
    themeImage.src = '/images/sun.svg';
    themeImage.alt = 'Sun';
    setCompImage(false);
    setUpvoteImage(false);
    setJournalImage(false);
    setLearnImage(false);
    setLiveImage(false);
    setLogoImage(false);
    setInfoButton(false);
    setBottomBarColor(false);
    setTopBarColor(false);
    setNavBarTextColor(false);
  }
  // Loop through the titles and change the text color based on the theme
  for (let i = 0; i < itemName.length; i++) {
    const item = itemName[i];
    if (body.classList.contains('light-theme')) {
      // Set text color for light theme
      item.style.color = 'black';
    } else {
      // Set text color for dark theme
      item.style.color = 'white';
    }
  }
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

if (currentPage === 'about.html') {
  function setAboutImage(isDarkMode) {
    if (isDarkMode) {
      aboutImage.src = 'images/about-night.jpg';
    } else {
      aboutImage.src = 'images/about.jpg';
    }
  }
  if (isDarkMode) {
    setAboutImage(true);
  } else {
    setAboutImage(false);
  }

  function toggleThemeIfIndex () {
    if (body.classList.contains('light-theme')) {
      setAboutImage(false);
    } else {
      setAboutImage(true);
    }}


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

/*if (currentPage === 'index.html') {

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

  /* function setInfoButton(isDarkMode) {
    if (isDarkMode) {
      toggleInfoButton.src = 'images/info-night.png';
    } else {
      toggleInfoButton.src = 'images/info.png';
    }
  }

  if (isDarkMode) {
    themeImage.src = 'images/moon.svg';
    themeImage.alt = 'Moon';
/*     setSubmitButton(true);
 */    /* setNewPrompt(true); */
 /*    setPoemOfTheDay(true);
    setNewPoemButton(true);
    setInfoButton(true);
  } else {
    themeImage.src = 'images/sun.svg';
    themeImage.alt = 'Sun';
/*     setSubmitButton(false);
 */  /*   setNewPrompt(false);
    setPoemOfTheDay(false);
    setNewPoemButton(false); 
    setInfoButton(false);
  }

  function toggleThemeIfIndex () {
    if (body.classList.contains('light-theme')) {
      /* showRectButton.classList.remove('dark');
      showRectButton.classList.add('light'); 
      localStorage.setItem('isDarkMode', 'false');
      themeImage.src = 'images/sun.svg';
      themeImage.alt = 'Sun';
      /* setSubmitButton(false);
      setNewPrompt(false);
      setPoemOfTheDay(false);
      setNewPoemButton(false); 
      setInfoButton(false);
    } else {
      /* showRectButton.classList.remove('light');
      showRectButton.classList.add('dark'); 
      localStorage.setItem('isDarkMode', 'true');
      themeImage.src = 'images/moon.svg';
      themeImage.alt = 'Moon';
      /* setSubmitButton(true);
      setNewPrompt(true);
      setPoemOfTheDay(true);
      setNewPoemButton(true);
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
    } 
    
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