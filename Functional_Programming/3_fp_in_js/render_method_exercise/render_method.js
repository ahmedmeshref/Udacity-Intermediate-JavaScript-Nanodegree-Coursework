// Here is the code from the example text

const root = document.getElementById('root');
const menu = document.getElementById('menu');

const Welcome = () => {
    return `Welcome to my Javascript Program!`
}

const App = () => {
    return `
        <h1>${Welcome()}<h1>
        <div> I EXIST! </div>
    `
}

const render = root => {
    root.innerHTML = App()
};


// Add a new Menu component that takes in a show argument which is either true or false
const Menu = (menu, show) => {
    const populateMenu = () => {
        if (show) {
            return `<nav>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                </ul>
            </nav>`
        } else {
            return `<nav>Menu</nav>`;
        }
    }
    menu.innerHTML = populateMenu();
    return true;
};

// Populate the root element on Load
window.addEventListener('load', () => {
    render(root);
    Menu(menu, true);
})