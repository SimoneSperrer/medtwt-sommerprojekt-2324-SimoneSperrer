let root;
if (root == null) {
    root = document.querySelector(':root');
}
let indexSide = document.getElementById('index_htmlSide');
let header = document.getElementById('header');
let homePng = document.getElementById('homePNG');
let modeSwitch = document.getElementById('modeSwitch');
let backgroundImageUrl;
let theme;

// Load theme from sessionStorage or set default theme
function loadThemeFromStorage() {
    const storedTheme = sessionStorage.getItem('theme');
    if (storedTheme !== null) {
        theme = JSON.parse(storedTheme);
    } else {
        theme = true; // Default theme
    }
}

// Save theme to sessionStorage
function saveThemeToStorage() {
    sessionStorage.setItem('theme', JSON.stringify(theme));
}

function loadTheme() {
    if (theme) {
        root.style.setProperty('--text','#fff');
        root.style.setProperty('--background','#fff9f5');
        root.style.setProperty('--primary','#383C53');
        root.style.setProperty('--primaryForHome','rgba(56, 60, 83, 0.75)');
        root.style.setProperty('--secondary','#402b42');
        root.style.setProperty('--accent','#796576');
        root.style.setProperty('--white','#fff');
        root.style.setProperty('--black','#fff');
        modeSwitch.src = './img/light.png';
        homePng.src = './img/home_dark.png';
        backgroundImageUrl = './img/hintergrund_dunkel.jpg';
        header.style.backgroundImage = 'url(' + backgroundImageUrl + ')';
        if (indexSide != null) {
            indexSide.style.backgroundImage = 'url(' + backgroundImageUrl + ')';
        }
    } else {
        root.style.setProperty('--text', '#080708');
        root.style.setProperty('--background', '#fff9f5');
        root.style.setProperty('--primary', '#383C53');
        root.style.setProperty('--primaryForHome', 'rgba(56, 60, 83, 0.75)');
        root.style.setProperty('--secondary', '#cbafaa');
        root.style.setProperty('--accent', '#e5d2cd');
        root.style.setProperty('--white', '#fff');
        root.style.setProperty('--black', '#000');
        modeSwitch.src = './img/dark.png';
        homePng.src = './img/home.png';
        backgroundImageUrl = './img/hintergrund.jpg';
        header.style.backgroundImage = 'url(' + backgroundImageUrl + ')';
        if (indexSide != null) {
            indexSide.style.backgroundImage = 'url(' + backgroundImageUrl + ')';
        }
    }
}

// Change theme and save to sessionStorage
function changeTheme() {
    theme = !theme;
    saveThemeToStorage();
    loadTheme();
}

// Load theme from storage and apply it on page load
loadThemeFromStorage();
loadTheme();
