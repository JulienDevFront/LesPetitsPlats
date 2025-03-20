/** JS.DOC ==> 
 * -^-^-
 * @module and @function serviceOfFilterOfRecipes
 * -^-^-
 * @description
 * -^-^-
 */
    export const serviceOfFilterOfRecipes = (items, ...values) => {
        console.log("See the value of the function algo ", values)
        return items.filter(item =>
            values.some(value =>
                item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(value.toLowerCase()))
            ) 
        );
    };
    