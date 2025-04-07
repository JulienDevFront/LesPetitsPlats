import { component_TagConstructor } from "../components/component_TagConstructor";
/** JS.DOC ==>
 * -^-^-
 * @module and @function view_toggleTagChecked
 * -^-^-
 * @description Updates the visual display of selected tags 
 * by  applying a CSS  class  based on the registry  state.
 * -^-^-
 */
export const view_toggleTagChecked = (targetRegister, targetCategory, targetCategoryContainer) => {
    // Get the elements in the DOM for the toggle :
    const tagSelectContainer = document.querySelector(targetCategoryContainer);
    const tags = Array.from(tagSelectContainer.querySelectorAll("div[data-tag]"));

    // Add or remove and class for display or not the tag checked :
    tags.forEach(i => {
        if(targetRegister[targetCategory].includes(i.dataset.tag)) {
            i.classList.add("hidden");

        } else {
            i.classList.remove("hidden");
        }
    });
};
