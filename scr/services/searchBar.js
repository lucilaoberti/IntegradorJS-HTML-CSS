import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader");
    const product = handleGetProductLocalStorage();

    // Filtrar productos que incluyan el texto ingresado en el input, sin distinguir entre mayúsculas y minúsculas
    const result = product.filter((el) =>
        el.nombre.toLowerCase().includes(inputHeader.value.toLowerCase())
    ); 

    // Renderizar la lista de resultados
    handleRenderList(result);
};
