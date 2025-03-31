import { ConstructorClassForTags } from "../class/constructorClassForTags.js";
/** JS.DOC
 * -^-^-
 * @module and @function service_tagResearchManager
 * -^-^-
 * @description
 * -^-^-
 */
export const service_tagResearchManager = (containerTagsTarget, formSearchTarget, inputSearchTarget) => {
    
    // Get the elements in the DOM :
    const containerTags = document.querySelector(containerTagsTarget);
    const tags = containerTags.querySelectorAll(`div[data-tag]`);
    const formSearch = document.querySelector(formSearchTarget);
    const inputSearch = document.querySelector(inputSearchTarget);
    console.log("Container parent for the research of the tags :", containerTags, "\nTags :", tags, "\nInput element of the type search :", inputSearch);

    // Add event of the type "input" for research the tags : 
    inputSearch.addEventListener("input", (e) => {
        
        //
        const value = [...new Set(e.target.value.split(/[\s+.,;!?:"'1234567890]+/))];
        console.log("Array of values :", value);

        //
        if(value[0].length >= 3) {

            const filter = Array.from(tags).filter(elem => value.some(i => elem.dataset.tag.includes(i)));
            console.log("Filter of the values :", filter);

            if(filter.length > 0){
                containerTags.innerHTML = "";
                filter.forEach(i => containerTags.append(ConstructorClassForTags.createSearchListView(i.dataset.tag)));
            } else {
                containerTags.innerHTML = "";
                containerTags.append(ConstructorClassForTags.createTagNoFound(value));
                if(value[0].length >= 8) inputSearch.value = ""
            }

        } else {
            containerTags.innerHTML = "";
            tags.forEach(i => containerTags.append(ConstructorClassForTags.createSearchListView(i.dataset.tag)));
        }
    })

    formSearch.addEventListener("submit", (e) => e.preventDefault())
}