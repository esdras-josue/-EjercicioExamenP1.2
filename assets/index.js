document.addEventListener("DOMContentLoaded",function(){
    // fucnion para consumir la API
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => mostrarProductos(data))
        .catch(error => console.error('Error al cargar productos:',error));

    function mostrarProductos(productos){
        const container = document.getElementById('Productos')
        productos.forEach(producto => {
            const card = document.createElement('div');
            card.classList.add('col-md-3', 'mb-4','mt-5');
            card.innerHTML = `
                <div class="card h-100">
                    <img src="${producto.image}" class="card-img-top" alt="${producto.title}>
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text"><strong>Categoria</strong> ${producto.category}</p>
                        <p class="card-text">${producto.description}</p>
                    </div>
                    <div class="card-footer mt-3">
                         <p class="card-end"><strong>Precio:</strong> $${producto.price}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

});