import { class_TagConstructor } from "../class/class_TagConstructor.js";
/** JS.DOC
 * -^-^-
 * @module and @function service_tagResearchManager
 * -^-^-
 * @description This function manages a tag search system by filtering and displaying tags 
 * based  on  user input. It updates the  displayed tags  dynamically as  the  user types.
 * -^-^-
 */
export const service_manageTagSearch = (targetTagContainer, targetFromSearch, targetInputSearch) => {
    // Get the elements in the DOM :
    const tagContainer = document.querySelector(targetTagContainer);
    const tags = tagContainer.querySelectorAll(`div[data-tag]`);
    const formSearch = document.querySelector(targetFromSearch);
    const inputSearch = document.querySelector(targetInputSearch);

    // Add an event of type input and listen to the value :
    inputSearch.addEventListener("input", (e) => {
        const value = [...new Set(e.target.value.split(/[\s+.,;!?:"'1234567890]+/))];

        // Search triggered if first word has at least 3 characters :
        if(value[0].length >= 3) { 
            const filter = Array.from(tags).filter(elem => value.some(i => elem.dataset.tag.includes(i)));
            
            // Displays the tags found or not :
            if(filter.length > 0){
                tagContainer.innerHTML = "";
                filter.forEach(i => tagContainer.append(class_TagConstructor.createTag(i.dataset.tag)));
            } else {
                tagContainer.innerHTML = "";
                tagContainer.append(class_TagConstructor.createTagNoFound(value));
            }
            
        } else {
            tagContainer.innerHTML = "";
            tags.forEach(i => tagContainer.append(class_TagConstructor.createTag(i.dataset.tag)));
        }
    })

    // Prevent the default behavior of form submission :
    formSearch.addEventListener("submit", (e) => e.preventDefault());
}