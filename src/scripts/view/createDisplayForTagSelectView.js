import { createOfCheckedTagView } from "./createOfCheckedTagView.js";
import { getTagsChecked } from "../services/serviceOfTagsManager.js";
import { serviceOfManagerOfTheDOM } from "../services/serviceOfManagerOfTheDOM.js";
import { searchTerms } from '../services/serviceOfFilterOfRecipes.js'





/** JS.DOC ==>
 * -^-^-
 * @module and @function serviceOfSelectAndDisplayOfTags
 * -^-^-
 * @description Manages  the display  of tags 
 * checked and unchecked selected by the user
 * -^-^-
 */
export const createDisplayForTagSelectView = (type, containerTagCheckedTarget) => {
    // targets the tag container and stores all tags in a Array ↴
    const containerTag = document.querySelector(`#${type}List`)
    const tags = Array.from(containerTag.querySelectorAll("input[type='checkbox']"))
    // targets the tag container checked and stores all tags checked in a Array ↴
    const containerTagChecked = document.querySelector(containerTagCheckedTarget)
    // Manage the display ↴
    tags.forEach(tag => {
        tag.addEventListener("change", (e) => {
            // If the tag is checked, create a view of the tag checked ↴
            if(e.target.checked) {
                const tagsCheckedView = createOfCheckedTagView(e.target.name)
                containerTagChecked.appendChild(tagsCheckedView)
                getTagsChecked("#containerTags")
                console.log(getTagsChecked("#containerTags"))
                // Event for can unchecked click the tags checked ↴
                tagsCheckedView.addEventListener("click", (e) => {
                    tagsCheckedView.remove()
                    tag.checked = false
                    console.log(getTagsChecked("#containerTags"))
                })
                
                searchTerms[type].add(e.target.name)
            }
            // If the tag is unchecked, create a view of the tag unchecked ↴
           if(!e.target.checked) {
                containerTagChecked.querySelector(`button[data-name="${e.target.name}"]`).remove()
                getTagsChecked("#containerTags")
                console.log(getTagsChecked("#containerTags"))
                searchTerms[type].delete(e.target.name)
           }

           search(searchTerms)
        })
    })
};