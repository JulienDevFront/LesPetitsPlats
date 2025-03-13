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
        if (!Array.isArray(items)) {
            console.error("The module '@createSearchListView' expects an array as a parameter.");
            return;
        }
    
        const container = document.querySelector(containerTarget);
        container.innerHTML = "";
        const content = items.map(item => `
            <div class="flex w-full">
                <input id="${item}" name="${item}" type="checkbox" class="peer hidden" />
                <label for="${item}" class="w-full p-4 text-ellipsis text-nowrap hover:bg-yellow-300 peer-checked:bg-yellow-300 cursor-pointer flex items-center gap-2 overflow-x-hidden">${item.toLowerCase()}</label>
            </div>
        `).join("");
        
        container.innerHTML += content;
    };
    