/** JS.DOC
 * - - -
 * @module and @class ConstructorRecipeCard
 * - - -
 * @description This class  is responsible for dynamically generating recipe cards in the DOM.
 * Each recipe card displays an image, a title, the preparation time, a brief description, and 
 * a list of ingredients. The generated card is inserted into the "#recipesSection" container.
 * - - -
 */
export class ConstructorRecipeCard {
    constructor({id, image, name, servings, ingredients, time, description}) {
        this._id = id;
        this._image = image;
        this._name = name;
        this._servings = servings;
        this._ingredients = ingredients;
        this._time = time;
        this._description = description;
    }     

    createRecipeCard() {
        const container = document.querySelector('#recipesSection');
        const content = `
            <article class="w-full rounded-3xl bg-white shadow-lg" name="${this._id}">
                <header class="relative">
                    <img class="h-64 object-cover w-full rounded-tl-3xl rounded-tr-3xl" src="./assets/images/${this._image}" alt="${this._name}"/>
                    <h3 class="pt-8 pl-6 pr-6 font-anton text-lg text-black">${this._name}</h3>
                    <p class="font-manrope text-xs text-black font-normal bg-yellow-300 w-16 flex justify-center content-center rounded-xl absolute top-5 right-5">${this._time}mn</p>
                </header>
                <section class="pt-7 pl-6 pr-6">
                    <h4 class="font-manrope font-bold text-gray-400 text-xs">Recette</h4>
                    <p class="pt-4 text-black font-manrope font-normal text-sm">${this._description}</p>
                    <h4 class="pt-8 font-manrope font-bold text-gray-400 text-xs">Ingrédients</h4>
                    <ul class="text-sm font-manrope grid grid-cols-2 pb-16 pt-4 gap-5">
                        ${this._ingredients.map(ingredient => `
                            <li>
                                <span class="text-black text-sm flex flex-col">${ingredient.ingredient}</span>
                                <span class="text-gray-400 text-sm">${ingredient.quantity ? ingredient.quantity : "" }${ingredient.unit ? ingredient.unit : "" }</span>
                            </li>`
                        ).join("")}
                    </ul>
                </section>
            </article>
      `;
    container.innerHTML += content;
    }
}