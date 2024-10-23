import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

// ----POP UP----
const cancelButton=document.getElementById("cancelButton");
cancelButton.addEventListener('click',()=>{
    closeModal();
})
// FUNCION QUE ABRE EL MODAL 
export const openModal = () => {
const modal= document.getElementById("modalPopUP"); 
modal.style.display = "flex";
const buttonDelete = document.getElementById("deleteButton");
if (productoActivo) {
buttonDelete.style.display = "block";
} else {
buttonDelete.style.display = "none";
}
    
if (productoActivo) {
    const nombre= document.getElementById("nombre"), 
    imagen =document.getElementById("img"),
    precio = document.getElementById("precio"),
    categories = document.getElementById("categoria");
    imagen.value = productoActivo.imagen;
    categories.value = productoActivo.categories;
    precio.value = productoActivo.precio;
    nombre.value = productoActivo.nombre;
    }
};
// FUNCION QUE CIERRRA EL MODAL

export const closeModal = () => {
    const modal= document.getElementById("modalPopUP"); 
    modal.style.display = "none";
    // para que cuando abras un elemento de la lista lo cerres y vayas al buttonadd se resetee el popup 
    setproductoActivo(null);
    resetModal();
    };

    const resetModal = ()=>{
        const nombre =document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");
        imagen.value = "";
        precio.value = 0;
        categoria.value="";
        nombre.value = ""
    };
// manerjar la eliminacion 
     // MANEJAR BOTON DE ELIMINAR
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
    handlebuttonDelete();
});

const handlebuttonDelete = () => {
    handleDeleteProduct();
};

