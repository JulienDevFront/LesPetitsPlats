/** JS.DOC ==>
 * -^-^-
 * @module and @function component_TagConstructor
 * -^-^-
 * @description This class  is responsible  for dynamically 
 * generating tags in the DOM regardless of the categories.
 * -^-^-
 */
export class component_TagConstructor {
  constructor() {}

  static createTag(targetItem) {
    const tagContainer = document.createElement("div");
    tagContainer.className = "flex w-full";
    tagContainer.dataset.tag = targetItem;
    
    tagContainer.innerHTML = `
      <input id="${targetItem}" name="${targetItem}" type="checkbox" class="peer hidden"/>
      <label for="${targetItem}" class="w-full p-4 text-ellipsis text-nowrap hover:bg-yellow-300 peer-checked:bg-yellow-300 cursor-pointer flex items-center gap-2 overflow-x-hidden">
        ${targetItem.toLowerCase()}
      </label>
    `;
    return tagContainer;
  };

  static createTagChecked(targetItem) {
    const tagCheckedContainer = document.createElement("button");
    tagCheckedContainer.className = "p-4 flex gap-x-4 bg-yellow-300 rounded-xl font-manrope cursor-pointer";
    tagCheckedContainer.setAttribute("data-name", targetItem);

    tagCheckedContainer.innerHTML = `
      <span>${targetItem.toLowerCase()}</span>
      <span class="content-center">
          <img src="./assets/icons/cross-button-close-icon.svg" alt="Désélectionnez le tag"/>
      </span>
    `;
    return tagCheckedContainer;
  };

  static createTagNoFound(targetItem) {
    const tagNoFoundContainer = document.createElement("p");
    tagNoFoundContainer.className = "text-xs pt-2 p-4 text-justify text-gray-400";
    tagNoFoundContainer.textContent = `La recherche "${targetItem}" ne correspond à aucun tag, veuillez recommencer.`;
  
    return tagNoFoundContainer;
  };
}