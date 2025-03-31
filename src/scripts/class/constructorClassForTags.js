/** JS.DOC ==>
 * -^-^-
 * @module and @function ConstructorClassForTags
 * -^-^-
 * @description
 * -^-^-
 */
export class ConstructorClassForTags {
  constructor() {}

  static createSearchListView(item) {
    const container = document.createElement("div")
    container.className = "flex w-full"
    container.dataset.tag = item

    const input = document.createElement("input")
    input.id = item
    input.name = item
    input.type = "checkbox"
    input.className = "peer hidden"

    const label = document.createElement("label")
    label.htmlFor = item
    label.className = "w-full p-4 text-ellipsis text-nowrap hover:bg-yellow-300 peer-checked:bg-yellow-300 cursor-pointer flex items-center gap-2 overflow-x-hidden"
    label.textContent = item.toLowerCase()

    container.append(input, label)  
    return container
  }

  static createOfCheckedTagView(itemTarget) {
    const button = document.createElement("button");
    button.className = "p-4 flex gap-x-4 bg-yellow-300 rounded-xl font-manrope";
    button.setAttribute("data-name", itemTarget);

    button.innerHTML = `
      <span>${itemTarget.toLowerCase()}</span>
      <span class="content-center">
          <img src="./assets/icons/cross-button-close-icon.svg" alt="Désélectionnez le tag"/>
      </span>
    `

    return button;
  };

  static createTagNoFound(value) {
    const createElement = document.createElement("p");
    createElement.className = "text-xs pt-2 p-4 text-justify text-gray-400";
    createElement.textContent = `La recherche "${value}" ne correspond à aucun tag, veuillez recommencer.`;
  
    return createElement;
  }
}