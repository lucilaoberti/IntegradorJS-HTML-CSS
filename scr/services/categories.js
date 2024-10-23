import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

// ============ CATEGORIAS ===========
const handleFilterProductsByCategory = (categoryIn)=>{ 
  const products = handleGetProductLocalStorage();
  switch (categoryIn) {
    case categoriaActiva:
    handleRenderList(products);
    break;
    case "Hamburguesas":
    case "Papas":
    case "Gaseosas":
    const result = products.filter((el) => el.categories === categoryIn )
    handleRenderList(result);
    break;
    default:
    break;
    case "mayorPrecio":
      const resultPrecioMayor = products.sort((a, b) => b.precio - a.precio);
      handleRenderList(resultPrecioMayor);
    break;
    case "menorPrecio":
      const resultPrecioMenor = products.sort((a, b) => a.precio - b.precio);
      handleRenderList(resultPrecioMenor);
      break;
    }

};




//Rederizar Categorias
export const renderCategories = () => {
  //tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");
  //creamos esos elemetos dentro de la lista
    ulList.innerHTML = `
      <li id="Todo">Todos los productos</li>
      <li id="Hamburguesas">Hamburguesas</li>
      <li id="Papas">Papas</li>
      <li id="Gaseosas">Gaseosas</li>
      <li id="mayorPrecio">Mayor precio</li>
      <li id="menorPrecio">Menor precio</li>
    `;
    //añadimos dinamicamente el evento click 
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
      liElement.addEventListener("click", () => {
        handleClick(liElement);
      });
    });
  // verififcamo y mananejamos el estilo del elemento activo 
    const handleClick = (elemento) => {
      handleFilterProductsByCategory(elemento.id);
      // 'elemento' es la categoría clicada
      liElements.forEach((el) => {         // Recorre todas las categorías <li>
        
        if (el.classList.contains("liActive")) {  // Si la categoría tiene "liActive"
          el.classList.remove("liActive");        // Le quita la clase, porque ya no es la activa
        }
        
        if (elemento === el) {   // Si 'el' (la categoría actual en el bucle) es la que fue clicada
          el.classList.add("liActive");    // Añade "liActive" a la categoría clicada para resaltarla
        }
      });
    };
    
    
  };
  