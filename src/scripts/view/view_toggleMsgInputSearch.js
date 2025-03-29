/** JS.DOC ==>
 * -^-^-
 * @module and @function view_toggleMsgInputSearch
 * -^-^-
 * @description This function manages the display of a user message based on the length of the input value. It listens for the "input" event on 
 * the specified input element and shows a guidance message when the user input is less than 3 characters. The message is hidden when the input 
 * is either empty or has 3 or more characters
 * -^-^-
 */
export const view_toggleMsgInputSearch = (inputSearchTarget, msgContainerTarget) => {

    // Get the elements in the DOM for the toggle :
    const input = document.querySelector(inputSearchTarget);
    const msgContainer = document.querySelector(msgContainerTarget);
    input.focus()

    // Add an event to toggle state :
    input.addEventListener("input", (e) => {
        if(e.target.value.trim("").length > 0 && e.target.value.trim("").length < 3) msgContainer.classList.remove("hidden");
        else msgContainer.classList.add("hidden");
    })
}