class Product {
    constructor(name,price,year) {
        this.name= name;
        this.price=price;
        this.year=year;
    }
}

class UserInterface{
    AddProduct(product){
       const productList = document.getElementById('product-list');
       const element = document.createElement('div');
       element.innerHTML = `
       <div class="card text-center mb-4">
        <div class="card-body">
            <strong>Producto</strong>: ${product.name}
            <strong>Precio</strong>: ${product.price}
            <strong>Año</strong>: ${product.year}
            <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
        </div>
       </div>
       `;
       productList.appendChild(element);
      
    }
    ResetForm(){
        document.getElementById('product-form').reset();
    }
    DeleProduct(element){
        if( element.name === 'delete' ){
           console.log(element.parentElement.parentElement.parentElement.remove());
           this.ShowMessage('Producto Eliminado','Danger');
        }

    }
    ShowMessage(message, cssClass){
        
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div,app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 1000);
    }
}
// eventos DOM Document Object Model

document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('name').value,
            price = document.getElementById('price').value,
            year = document.getElementById('year').value;
            
            console.log(new Product(name,price,year));

            const product = new Product(name,price,year);
            const UI = new UserInterface();

            if (name === '' || price ==='' || year === ''){
            UI.ShowMessage('Complete Todos los campos','Danger');
            }else {
            UI.AddProduct(product);
            UI.ResetForm();
            UI.ShowMessage('Producto Agregado satisfactoriamente','success');
           
            }
            e.preventDefault();
            
    });

document.getElementById('product-list').addEventListener('click', function(e){

    const UI = new UserInterface();
    UI.DeleProduct(e.target);
    
    
});
 
