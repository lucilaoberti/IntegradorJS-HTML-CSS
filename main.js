import { handleGetProductLocalStorage, setInLocalStorage } from "./scr/persistence/localStorage";
import { renderCategories } from "./scr/services/categories";
import { handleSearchProductByName } from "./scr/services/searchBar";
import { openModal } from "./scr/view/modal";
import { handleGetProductsToStore } from "./scr/view/store";

// -------APLICACION-----------
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};
 
export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
productoActivo =productoIn;
};

handleGetProductsToStore();
renderCategories();
// -----HEADER-----------
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
openModal();
});
// ----------SEARCH----------
//buttonsearch
const  buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
    handleSearchProductByName();
    });

 
    