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
        const tagValue = i.dataset.tag;
        targetRegister[targetCategory].includes(tagValue) ? i.classList.add("bg-yellow-300"): i.classList.remove("bg-yellow-300")
    });
};
