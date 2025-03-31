import { updateRecipes } from  './service_inputSearchManager.js'

import { ConstructorClassForTags } from "../class/constructorClassForTags.js"
/** JS.DOC ==>
 * -^-^-
 * @module and @function service_tagSelectManager
 * -^-^-
 * @description
 * -^-^-
 */
export const service_tagSelectManager = (researchRegisterTarget, keysTarget, data) => {
    
    // Get the elements in the DOM :
    const researchRegister = researchRegisterTarget
    const containerTags = document.querySelector(`#${keysTarget}List`)
    const containerTagSelect = document.querySelector("#containerTags")
    const tags= Array.from(containerTags.querySelectorAll("input[type='checkbox']"))
    // console.log(`See all tags ${keysTarget} in the container ${containerTags}`, tags)

    tags.forEach(tag => tag.addEventListener("change", (e) => {
        
        if (e.target.checked) {
            researchRegister[keysTarget].push(e.target.name);
            // const uniqueTags = [...new Set(researchRegister[keysTarget])];
    
            const newTag = ConstructorClassForTags.createOfCheckedTagView(e.target.name);
            containerTagSelect.append(newTag);
        
        } else {
            removeTag(e.target.name);
        }

        updateRecipes(data);
    }));
    
    
    containerTagSelect.addEventListener("click", (e) => {
        const tagButton = e.target.closest("button[data-name]");
        if (!tagButton) return;
    
        const tagName = tagButton.getAttribute("data-name");
    
        const tagCheckbox = containerTags.querySelector(`input[name="${tagName}"]`);
        if (tagCheckbox) tagCheckbox.checked = false;
    
        removeTag(tagName);
    });
    
    const removeTag = (tagName) => {
        researchRegister[keysTarget] = researchRegister[keysTarget].filter(tag => tag !== tagName);

        const tagToRemove = containerTagSelect.querySelector(`[data-name="${tagName}"]`);
        if (tagToRemove) tagToRemove.remove();
    };
}    

    