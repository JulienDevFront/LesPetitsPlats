/** JS.DOC ==>
 * -^-^-
 * @module and @function createOfCheckedTagView
 * -^-^-
 * @description
 * -^-^-
 */
    export const createOfCheckedTagView = (itemTarget) => {
        const button = document.createElement("button");
        button.className = "p-4 flex gap-x-4 bg-yellow-300 rounded-xl font-manrope";
        button.setAttribute("data-name", itemTarget);
    
        button.innerHTML = `
            <span>${itemTarget.toLowerCase()}</span>
            <span class="content-center">
                <img src="./assets/icons/cross-button-close-icon.svg" alt="Désélectionnez le tag"/>
            </span>
        `;
    
        return button;
    };
    