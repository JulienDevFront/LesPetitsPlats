/** JS.DOC ==>
 * -^-^-
 * @module and @function createMessageManagerView
 * -^-^-
 * @description This function manages the display of a user message based on the length of the input value. It listens for the "input" event on 
 * the specified input element and shows a guidance message when the user input is less than 3 characters. The message is hidden when the input 
 * is either empty or has 3 or more characters.
 * -^-^-
 */
export const createMessageManagerView = (inputTarget, msgContainerTarget) => {
    const input = document.querySelector(inputTarget)
    const msgContainer = document.querySelector(msgContainerTarget)
    
    input.addEventListener("input", (e) => {
        if(e.target.value.trim("").length <= 2) msgContainer.classList.add("opacity-100")
        if(e.target.value.trim("").length >= 3 || e.target.value.trim("").length === 0 ) msgContainer.classList.remove("opacity-100")
    })
}