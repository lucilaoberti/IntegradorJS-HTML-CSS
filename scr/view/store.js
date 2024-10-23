// ------STORE-----
// Importa la función para obtener productos desde el localStorage


import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";

export const handleGetProductsToStore = () => {
    // Obtiene productos desde el localStorage
    const products = handleGetProductLocalStorage(); 
    // Renderiza los productos obtenidos
    handleRenderList(products); 
};

// Renderiza la lista de productos
export const handleRenderList = (productosIn) => {
    // Filtramos los productos por su categoría
    const burgers = productosIn.filter((el) => el.categories === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categories === "Papas");
    const gaseosas = productosIn.filter((el) => el.categories === "Gaseosas");

    // Función para renderizar un grupo de productos
    const renderProductGroup = (productos, title) => { 
        // Verifica si el array productos tiene elementos
        if (productos.length > 0) {
            // Para cada producto se genera un string de HTML
            const productosHTML = productos.map((producto, index) => {
                // El HTML que se genera para cada producto es
                        return `<div class='containerTargetItem' 
                          id='product-${producto.categories}-${index}'>
                          <div>
                            <img src='${producto.imagen}' />
                            <h2>${producto.nombre}</h2>
                          </div>
                          <div class='targetProps'>
                            <p><b>Precio:</b> $ ${producto.precio}</p>
                          </div>
                        </div>`;
            });
            return `
            <section class='sectionStore'>
                <div class='containerTitleSection'>
                <h3>${title}</h3> </div>
                <div class='containerProductStore'>

                    ${productosHTML.join("")}
                </div>
            </section>`;
        } else { 
            return ""; 
        }
    };

    // Renderizar cada uno de los productos dentro de su categoría
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    // Agregar eventos de clic a cada producto
    const addEvents = (productsIn) => {
        productsIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categories}-${index}`);
            productContainer.addEventListener("click", () => {
                setproductoActivo(element);
                openModal();
            });
        });
    };

    // Llama a addEvents para cada grupo de productos
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};
