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
    tagContainer.className = "flex w-48";
    tagContainer.dataset.tag = targetItem;
    
    tagContainer.innerHTML = `
      <input id="${targetItem}" name="${targetItem}" data-tag="${targetItem}" type="checkbox" class="hidden"/>
      <label for="${targetItem}" class="w-full p-4 truncate text-ellipsis text-nowrap hover:bg-yellow-300 cursor-pointer ">
        ${targetItem.toLowerCase()}
      </label>
    `;
    return tagContainer;
  };

  static createTagSelectedInList(targetItem) {
    const tagContainer = document.createElement("div");
    tagContainer.className = "flex w-48 truncate text-ellipsis items-center justify-between gap-2 pr-4 bg-yellow-300";
    tagContainer.dataset.tag = targetItem;
    
    tagContainer.innerHTML = `
      <input id="${targetItem}" name="${targetItem}" type="checkbox" class="hidden"/>
      <label for="${targetItem}" class="flex-auto p-4 truncate text-ellipsis text-nowrap font-bold">
        ${targetItem.toLowerCase()} 
      </label>
      <img data-tag="${targetItem}" class="cursor-pointer" src="./assets/icons/cross-button-tag-list-icon.svg" alt="Désélectionnez le tag"/>
    `;
    return tagContainer;
  }

  static createTagChecked(targetItem) {
    const tagCheckedContainer = document.createElement("button");
    tagCheckedContainer.className = "p-4 flex gap-x-4 bg-yellow-300 rounded-xl font-manrope";
    tagCheckedContainer.setAttribute("data-tag", targetItem);

    tagCheckedContainer.innerHTML = `
      <span>${targetItem.toLowerCase()}</span>
      <span class="content-center">
          <img data-tag="${targetItem}" class="cursor-pointer" src="./assets/icons/cross-button-close-icon.svg" alt="Désélectionnez le tag"/>
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