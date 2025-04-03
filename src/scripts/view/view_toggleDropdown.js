/** JS.DOC ==>
 * -^-^-
 * @module and @function view_toggleDropdown
 * -^-^-
 * @description manages the  display of the 
 * drop-down menu with the help of a toggle
 * -^-^-
 */
export const view_toggleDropdown = (containerDropdownTarget, contentDropdownTarget) => {
    // Get the elements in the DOM for the dropdown :
    const containerDropdown = document.querySelector(containerDropdownTarget);
    const contentDropdown = document.querySelector(contentDropdownTarget);
    
    // Add an event to toggle state :
    containerDropdown.addEventListener("click", (e) => contentDropdown.classList.toggle("hidden"));
}