const passwordInput = document.getElementById('passwordInput');
const showHideButton = document.getElementById('showHideButton');
const showPasswordIcon = document.getElementById('showPasswordIcon');
const hidePasswordIcon = document.getElementById('hidePasswordIcon');

if(showHideButton){
  showHideButton.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showPasswordIcon.style.display = 'inline';
      hidePasswordIcon.style.display = 'none';
    } else {
      passwordInput.type = 'password';
      showPasswordIcon.style.display = 'none';
      hidePasswordIcon.style.display = 'inline';
    }
  });
}


// for the first password type input in "recoverpassword" page
const passwordInput1 = document.getElementById('passwordInput1');
const showHideButton1 = document.getElementById('showHideButton1');
const showPasswordIcon1 = document.getElementById('showPasswordIcon1');
const hidePasswordIcon1 = document.getElementById('hidePasswordIcon1');

if(showHideButton1){
  showHideButton1.addEventListener('click', function() {
    if (passwordInput1.type === 'password') {
      passwordInput1.type = 'text';
      showPasswordIcon1.style.display = 'inline';
      hidePasswordIcon1.style.display = 'none';
    } else {
      passwordInput1.type = 'password';
      showPasswordIcon1.style.display = 'none';
      hidePasswordIcon1.style.display = 'inline';
    }
  });
}


//to check if new password and repeated password are the same
// function validatePasswords() {
//   var password = document.getElementById("passwordInput1").value;
//   var confirmPassword = document.getElementById("passwordInput").value;
//   var errorMessage = document.getElementById("error-message");

//   if (password !== confirmPassword) {
//     errorMessage.style.display = "block";
//     return false;
//   } else {
//     errorMessage.style.display = "none";
//     return true;
//   }
// }


// to check that user filled email type input while recovering password
// const form = document.getElementById("myForm");
// const submitButton = document.getElementById("submitButton");
// var error = document.getElementById("error");

// if(submitButton){
//   submitButton.addEventListener('click', function(event) {
//     if (!form.checkValidity()) {
//       event.preventDefault();
//       error.style.display = "block";
//     }
//   });
// }

// day/night switcher
const toggleButton = document.getElementById("toggle-btn");
const switcher = document.getElementById("parameters-switcher")
const body = document.querySelector("body");
let theme = localStorage.getItem("light-mode");

const enableLightMode = () =>{
  body.classList.add("light");
  body.classList.add("theme-transition");
  localStorage.setItem("light-mode", "enabled");
};

const disableLightMode = () =>{
  body.classList.remove("light");
  body.classList.add("theme-transition");
  localStorage.setItem("light-mode", "disabled");
};

if(theme === "enabled"){
  enableLightMode();
}else if (theme === "disabled") {
  disableLightMode();
}

if(toggleButton){
  toggleButton.addEventListener('click', () => {
    if(theme === "disabled"){
      enableLightMode();
    }else{
      disableLightMode();
    }
    theme = localStorage.getItem("light-mode");
  })


  if (theme === null) {
    toggleButton.click();
  }

  if (body.classList.contains("theme-transition")) {
    toggleButton.style.transition = "none";
    setTimeout(() => toggleButton.style.transition = "", 1000); // Add transition after a delay
    body.classList.remove("theme-transition");
  }
}

if(switcher){
  switcher.addEventListener('click', () => {
    if(theme === "disabled"){
      enableLightMode();
    }else{
      disableLightMode();
    }
    theme = localStorage.getItem("light-mode");
  })

  if (theme === "enabled") {
    switcher.checked = true;
  }
}


// to hide/show amount of money on index page mobile resolution
const moneyShowHide = document.getElementById("money-show-hide");
const moneyAmount = document.getElementById("amount");
const moneyCircles = document.getElementById("dots");
let isAmountHidden = localStorage.getItem('isAmountHidden') === 'true';

if (isAmountHidden) {
  moneyShowHide.setAttribute("src", "./assets/images/hide-password.svg");
  moneyCircles.style.display = "inline";
  moneyShowHide.style.opacity = ".2";
  moneyAmount.style.display = "none";
}

moneyShowHide.addEventListener('click', function(){
  isAmountHidden = !isAmountHidden;
  if (isAmountHidden) {
    moneyShowHide.setAttribute("src", "./assets/images/hide-password.svg");
    moneyShowHide.style.opacity = ".2";
    moneyAmount.style.display = "none";
    moneyCircles.style.display = "inline";
  } else {
    moneyShowHide.setAttribute("src", "./assets/images/show-password.svg");
    moneyShowHide.style.opacity = ".2";
    moneyAmount.style.display = "inline";
    moneyCircles.style.display = "none";
  }
  localStorage.setItem('isAmountHidden', isAmountHidden.toString());
});


// to show/hide amount of money on desktop resolution(index page)
const moneyShowHideDesktop = document.getElementById("money-show-hide-desktop");
const moneyAmountDesktop = document.getElementById("amountDesktop");
const moneyCirclesDesktop = document.getElementById("dotsDesktop");
let isAmountHiddenDesktop = localStorage.getItem('isAmountHiddenDesktop') === 'true';

if (isAmountHiddenDesktop) {
  moneyShowHideDesktop.setAttribute("src", "./assets/images/hide-password.svg");
  moneyCirclesDesktop.style.display = "inline";
  moneyShowHideDesktop.style.cursor = "pointer";
  moneyShowHideDesktop.style.opacity = ".2";
  moneyAmountDesktop.style.display = "none";
}

if(moneyShowHideDesktop){
  moneyShowHideDesktop.addEventListener('click', function(){
    isAmountHiddenDesktop = !isAmountHiddenDesktop;
    if (isAmountHiddenDesktop) {
      moneyShowHideDesktop.setAttribute("src", "./assets/images/hide-password.svg");
      moneyShowHideDesktop.style.opacity = ".2";
      moneyAmountDesktop.style.display = "none";
      moneyCirclesDesktop.style.display = "inline";
    } else {
      moneyShowHideDesktop.setAttribute("src", "./assets/images/show-password.svg");
      moneyShowHideDesktop.style.opacity = ".2";
      moneyAmountDesktop.style.display = "inline";
      moneyCirclesDesktop.style.display = "none";
    }
    localStorage.setItem('isAmountHiddenDesktop', isAmountHiddenDesktop.toString());
  });
}


//animation for successfully sending service
function loading(){
  document.getElementById("sendButton").style.display = "none";
  document.getElementById("progress-container").style.display = "block";
  document.getElementById("progress-container").style.width = "100%";
  document.getElementById("services-modal-header").style.setProperty('display', 'none', 'important');
  document.getElementById("services-modal-inputs").style.setProperty('display', 'none', 'important');
  document.getElementById("services-modal-content").style.height = "600px";
  document.getElementById("services-modal-content").style.flexDirection = "row";
  document.getElementById("services-modal-content").style.alignItems = "center";
  document.getElementById("services-modal-body").style.setProperty('display', 'flex', 'important');
  document.getElementById("services-modal-body").style.setProperty('align-items', 'center', 'important');
  document.getElementById("services-modal-body").style.setProperty('justify-content', 'center', 'important');
}

var progressContainer = document.getElementById("progress-container");

if(progressContainer){
  progressContainer.addEventListener("animationend", function(){
    progressContainer.style.display = "none";
    document.getElementById("success").style.setProperty('display', 'block', 'important');
  });
}


//
const listItems = document.querySelectorAll('#my-list li');

listItems.forEach((li) => {
  li.addEventListener('click', () => {
    listItems.forEach((li) => {
      li.classList.remove('active');
    });
    
    li.classList.add('active');
  });
});