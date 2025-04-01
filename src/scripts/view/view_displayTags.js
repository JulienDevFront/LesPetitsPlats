import { ConstructorClassForTags } from "../class/constructorClassForTags.js";
/** JS.DOC ==> 
 * -^-^-
 * @module and @function view_displayTags
 * -^-^-
 * @description
 * -^-^-
 */
export const view_displayTags = (data, ...categoryTagsTarget) => {
    const registerCategories = Object.keys(data)
    console.log(registerCategories)

    registerCategories.forEach(category => {
        if(categoryTagsTarget.includes(category)){
            const containerTag = document.querySelector(`#${category}List`)
            containerTag.innerHTML = ""
            const tags = [...new Set(data[category])]
            tags.forEach(tag => containerTag.append(ConstructorClassForTags.createSearchListView(tag)))
            console.log("Container of tags :", containerTag, "\nTags :", tags)
        }
    })
};

    

