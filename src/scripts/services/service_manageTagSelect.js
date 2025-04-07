import { service_updateRecipes } from  "./service_updateRecipes.js";
import { component_TagConstructor } from "../components/component_TagConstructor.js";
/** JS.DOC ==>
 * -^-^-
 * @module and @function service_manageTagSelect
 * -^-^-
 * @description Manage tag selection from the original list and 
 * listen for the deselection of different tags in the list tag 
 * container or in the aside container
 * -^-^-
 */
export const service_manageTagSelect = (targetRegister, targetCategory, initialData) => {
    // Get the elements in the DOM :
    const tagContainer = document.querySelector(`#${targetCategory}List`);
    const tagSelectInListContainer = document.querySelector(`#${targetCategory}TagSelected`);
    const tagSelectInAsideContainer = document.querySelector("#containerTags");

    // Handle tag selection from original list :
    tagContainer.addEventListener("click", (e) => {
        const inputTag = e.target.closest("input[data-tag]");
        if (!inputTag) return;
        
        const tagName = inputTag.dataset.tag;
        if (!targetRegister[targetCategory].includes(tagName)) {
            targetRegister[targetCategory].push(tagName);
            const newTagAside = component_TagConstructor.createTagChecked(tagName);
            const newTagInList = component_TagConstructor.createTagSelectedInList(tagName);
            tagSelectInAsideContainer.append(newTagAside);
            tagSelectInListContainer.append(newTagInList);
            service_updateRecipes(initialData);
        };
    });

    // Handle tag deselection from list container :
    tagSelectInListContainer.addEventListener("click", (e) => {
        const tag = e.target.closest("div[data-tag] img[data-tag]");
        if (!tag) return;

        const tagName = tag.dataset.tag;
        if (!targetRegister[targetCategory].includes(tagName)) return;

        const tagSelectInList = tagSelectInListContainer.querySelector(`div[data-tag="${tagName}"]`);
        const tagSelectInAside = tagSelectInAsideContainer.querySelector(`button[data-tag="${tagName}"]`);
        if (tagSelectInList) tagSelectInList.remove();
        if (tagSelectInAside) tagSelectInAside.remove();
        targetRegister[targetCategory] = targetRegister[targetCategory].filter(tag => tag !== tagName);
        service_updateRecipes(initialData);
    });

    // Handle tag deselection from aside container :
    tagSelectInAsideContainer.addEventListener("click", (e) => {
        const tag = e.target.closest("button[data-tag] img[data-tag]");
        if (!tag) return;

        const tagName = tag.dataset.tag;
        if (!targetRegister[targetCategory].includes(tagName)) return;

        const tagSelectInList = tagSelectInListContainer.querySelector(`div[data-tag="${tagName}"]`);
        const tagSelectInAside = tagSelectInAsideContainer.querySelector(`button[data-tag="${tagName}"]`);
        if (tagSelectInList) tagSelectInList.remove();
        if (tagSelectInAside) tagSelectInAside.remove();
        targetRegister[targetCategory] = targetRegister[targetCategory].filter(tag => tag !== tagName);
        service_updateRecipes(initialData);
    });
};
