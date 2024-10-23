//objetivo obtener una lista de productos almacenados en el localStorage
export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
    return products;
    } else {
    return [];
    }
    };
    //guardarEn localStorage
    export const setInLocalStorage = (productIn) => {
        // Traer los elementos
        if (productIn){
        let productsInLocal = handleGetProductLocalStorage();
        console.log(productIn);
    
        // Buscar el índice del producto en el array
        const existingIndex = productsInLocal.findIndex(
            (productsLocal) => productsLocal.id === productIn.id
        );
    
        // Verificar si el elemento existe
        if (existingIndex !== -1) {
            // Si existe, reemplazar el producto en esa posición
            productsInLocal[existingIndex] = productIn;
        } else {
            // Si no existe, agregar el nuevo producto
            productsInLocal.push(productIn);
        }
    
        // Guardar el array actualizado en el localStorage
        localStorage.setItem("products", JSON.stringify(productsInLocal));
        }
    };
    