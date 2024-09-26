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

addGlobalEventListener('click', '#open-dialog-button', (e) => {
    const modalDialog = document.getElementById('modal-dialog');
    modalDialog.showModal();
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleCheckbox = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggleCheckbox.checked = currentTheme === 'dark';

    addGlobalEventListener('change', '#theme-switch', () => {
        const newTheme = themeToggleCheckbox.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});