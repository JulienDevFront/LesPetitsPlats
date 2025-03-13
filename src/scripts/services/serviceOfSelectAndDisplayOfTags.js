/** JS.DOC ==>
 * -^-^-
 * @module and @function serviceOfSelectAndDisplayOfTags
 * -^-^-
 * @description
 * -^-^-
 */
export const serviceOfSelectAndDisplayOfTags = (containerTarget) => {
    const container = document.querySelector(containerTarget)
    for(const item of container.children) {
        item.addEventListener("click", (e) => {
            console.log("Is cliked ?!", e.target)
        })
        // console.log(item)
    }
}