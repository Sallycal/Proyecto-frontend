 document.addEventListener('DOMContentLoaded', function() {
     const gallery = document.getElementById('gallery');
     const addImageButton = document.getElementById('addImageButton');
  
     // Función para agregar una nueva imagen a la galería
     function addImage() {
       const imageUrl = prompt('Por favor ingresa la URL de la imagen:');
       if (imageUrl) {
         const imageElement = document.createElement('img');
         imageElement.src = imageUrl
         imageElement.classList.add('w-full', 'h-auto');
         gallery.appendChild(imageElement);
       }
     }
  
     // Event listener para el botón "Agregar Imagen"
     addImageButton.addEventListener('click', addImage);
   });

