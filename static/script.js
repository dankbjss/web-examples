/**
 * Adds a global event listener to the specified parent element.
 * This is lifted from the Web Dev Simplified YouTube channel.
 *  
 * @link https://www.youtube.com/watch?v=cOoP8-NPLSo
 *
 * @param {string} type - The type of event to listen for.
 * @param {string} selector - The CSS selector for the target element(s).
 * @param {function} callback - The callback function to be executed when the event is triggered.
 * @param {HTMLElement} [parent=document] - The parent element to which the event listener is attached.
 */
function addGlobalEventListener(type, selector, callback, parent = document) {
    parent.addEventListener(type, (event) => {
        if (event.target.matches(selector)) {
            callback(event);
        }
    });
}

/**
 * Loads the preferred colour scheme from local storage or the user's system settings and sets the theme accordingly.
 * @param themeToggleCheckbox {HTMLInputElement} - An <input.switch/> of type checkbox that toggles the theme.
 */
function loadPreferredColourScheme(themeToggleCheckbox) {
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggleCheckbox.checked = currentTheme === 'dark';
}

const switchTheme = {
    type: 'change',
    selector: '#theme-switch',
    callback: (event) => {
        const newTheme = event.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    },
    add: function(){
        addGlobalEventListener(this.type, this.selector, this.callback)
    }
};

const toggleNavPopover = {
    type: 'change',
    selector: 'select',
    callback: (event) => {
        const selectedClass = event.target.className;
        if (selectedClass.match('page-select')) {
            const navMenuPopover = document.getElementById('nav-menu-popover');
            navMenuPopover.togglePopover();
        }
    },
    add: function(){
        addGlobalEventListener(this.type, this.selector, this.callback)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    loadPreferredColourScheme(themeSwitch);
    switchTheme.add();
    toggleNavPopover.add();
});