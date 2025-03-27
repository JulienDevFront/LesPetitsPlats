/** JS.DOC ==>
 * -^-^-
 * @module and @function service_tagSelectManager
 * -^-^-
 * @description
 * -^-^-
 */
export const service_tagSelectManager = (researchRegisterTarget, keysTarget) => {
    //
    const researchRegister = researchRegisterTarget
    const containerTags = document.querySelector(`#${keysTarget}List`)
    const tags= Array.from(containerTags.querySelectorAll("input[type='checkbox']"))
    // console.log(`See all tags ${keysTarget} in the container ${containerTags}`, tags)
    tags.forEach(tag => tag.addEventListener(("change"), (e) => {
        //
        if(e.target.checked) researchRegister[keysTarget].push(e.target.name)
        else researchRegister[keysTarget] = researchRegister[keysTarget].filter(tag => tag !== e.target.name)
        // console.log(`See the tags ${keysTarget} in state checked :`, researchRegister)
    }))
    //
    return researchRegister
}