/** JS.DOC ==>
 * -^-^-
 * @module an @funtion createSearchListView
 * -^-^- 
 * @description Generate the various search lists and add lists to the DOM 
 * via a  container parameter. Checks if  the input is an array and if the 
 * target container exists in the DOM.
 * -^-^-
 */
export const createSearchListView = (containerTarget, items) => {
    if(!Array.isArray(items)) {
        console.error("The module '@createSearchListView' wait an array as param! Encapsulate the data in an array and then pass it as a function parameter.")
        return // If this is true => the execution of the script to stop!
    }
    
    const container = document.querySelector(containerTarget)
    container.innerHTML = ""
    const content = items.map(item => `<li class="p-4 text-ellipsis text-nowrap hover:bg-yellow-300"><button>${item}</button></li>`).join("")
    container.innerHTML += content
}