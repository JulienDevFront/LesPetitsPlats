/** JS.DOC ==>
 * -^-^-
 * @module and @function view_toggleDropdown
 * -^-^-
 * @description manages the  display of the 
 * drop-down menu with the help of a toggle
 * -^-^-
 */
export const view_toggleDropdown = (targetDropdownContainer, targetDropdownContent) => {
    // Get the elements in the DOM for the dropdown :
    const dropdownContainer = document.querySelector(targetDropdownContainer);
    const dropdownContent = document.querySelector(targetDropdownContent);
    const dropdownIcon = dropdownContainer.querySelector("img");

    // Add an event to toggle state :
    dropdownContainer.addEventListener("click", (e) => {
        dropdownContent.classList.toggle("hidden")
        dropdownIcon.classList.toggle("rotate-180");
    });
}