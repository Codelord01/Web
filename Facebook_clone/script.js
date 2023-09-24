const settingsMenu = document.querySelector(".settings-menu");
const profilePicture = document.querySelector(".nav-user-icon");
const darkMode = document.querySelector("#dark-btn");


function darkModeToggle(){
    darkMode.classList.toggle('dark-btn-on')
    document.body.classList.toggle('dark-theme');
}

function settingsMenuToggle(){
    settingsMenu.classList.toggle('settings-menu-appear')
};



profilePicture.addEventListener('click', settingsMenuToggle);
darkMode.addEventListener('click', darkModeToggle);