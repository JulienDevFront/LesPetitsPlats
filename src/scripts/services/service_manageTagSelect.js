import { service_updateRecipes } from  "./service_updateRecipes.js";
import { class_TagConstructor } from "../class/class_TagConstructor.js";
/** JS.DOC ==>
 * -^-^-
 * @module and @function service_manageTagSelect
 * -^-^-
 * @description
 * -^-^-
 */
export const service_manageTagSelect = (targetRegister, targetCategory, initialData) => {
    // Get the elements in the DOM :
    const tagSelectContainer = document.querySelector("#containerTags");
    const tagSelect = tagSelectContainer.querySelectorAll("button[data-name]");
    
    const tagContainer = document.querySelector(`#${targetCategory}List`);
    const tags= Array.from(tagContainer.querySelectorAll("input[type='checkbox']"));

    //
    tags.forEach(tag => tag.addEventListener("change", (e) => {
        console.log("@service_manageTagSelect - Tag selected :", e.target.name);
        //
        if (e.target.checked) {
            targetRegister[targetCategory].push(e.target.name);
            const newTag = class_TagConstructor.createTagChecked(e.target.name);
            tagSelectContainer.append(newTag);
            service_updateRecipes(initialData);
            
        } else {
            removeTag(e.target.name);
        };
    }));
    
    //
    tagSelect.forEach(button => {
        button.addEventListener("click", (e) => {
            const tagName = button.getAttribute("data-name");
            const tagInList = tagContainer.querySelector(`input[name="${tagName}"]`);
            if (tagInList) tagInList.checked = false;
    
            removeTag(tagName);
            service_updateRecipes(initialData);
        });
    });
    
    
    const removeTag = (tagName) => {
        targetRegister[targetCategory] = targetRegister[targetCategory].filter(tag => tag !== tagName);
        const tagToRemove = tagSelectContainer.querySelector(`[data-name="${tagName}"]`);
        if (tagToRemove) tagToRemove.remove();
    };
}    

    