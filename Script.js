// traer todos los produsctos 
// hacer un siclo de cada producto en un elemento html
// colocarlo e DIV productos
// Utilizar fetch para traer los rpoductos 

async function cargarProductos(){
    //Llmar a localhost:3000/products
    var resultado = await fetch ("http://localhost:3000/products")
    if (!resultado.ok){
        throw new Error("No hay respuesta de productos");
    }
    var datos = await resultado.json()
    return datos  
    //promise, resolver (cumplirias)
    //then() await ayuda resolver 
}

async function pintarProducto(){
    let productos =await cargarProductos()
    let divProductos =document.getElementById("products")
    
    productos.forEach(Producto => {
        divProductos.innerHTML += `<li>${Producto.nombre}</li>`
        
    });
    
}
pintarProducto()