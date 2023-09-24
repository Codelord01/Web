const settingsMenu = document.querySelector(".settings-menu");
const profilePicture = document.querySelector(".nav-user-icon");
const darkMode = document.querySelector("#dark-btn");
const localStorageName = 'theme';
const localStorageOptions = ['light', 'dark']

function darkModeToggle(){
    darkMode.classList.toggle('dark-btn-on')
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem(localStorageName) == localStorageOptions[0]){
        localStorage.setItem(localStorageName, localStorageOptions[1])
    }else{
        localStorage.setItem(localStorageName, localStorageOptions[0])
    }
}

function settingsMenuToggle(){
    settingsMenu.classList.toggle('settings-menu-appear')
};



profilePicture.addEventListener('click', settingsMenuToggle);
darkMode.addEventListener('click', darkModeToggle);

if(localStorage.getItem(localStorageName) == localStorageOptions[0]){
    darkMode.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}else if(localStorage.getItem(localStorageName) == localStorageOptions[1]){
    darkMode.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}else{
    localStorage.setItem(localStorageName, localStorageOptions[0]);
}