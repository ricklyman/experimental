async function save( blob ) {

    // create handle to a local file chosen by the user
    const handle = await window.showSaveFilePicker();
  
    // create writable stream
    const stream = await handle.createWritable();
  
    // write the data
    await stream.write(blob);
  
    // save and close the file
    await stream.close();
  }

  //for admin page: post to server (localStorage for now)
class ProductsController {
    constructor(name, type, seats, description, imageURL) {
      this.name = name;
      this.type = type;
      this.seats = seats; 
      this.description = description;
      this.imageURL = imageURL;
      this.currentId = 0; //temporary //database id, from post
      this.items = [] //local id, task 04, replaces currentID on fetch as noted below
    }
    addItem() {
    //using form for now, fetch later
    this.currentId = this.items.length //localStorage temporary global array? page, site, each fetch, ...
    }
  }

//fetch product based on filtered search
//each product = new ProductsController ...

let form = document.getElementsByTagName("form")[0];

form.onsubmit = function (e) {
  e.preventDefault();
  let formProduct = new ProductsController(form[0].value, form[1].value, form[2].value, form[3].value, form[4].value)
  console.log('formProduct: ' + formProduct);

  document.getElementById('result').innerHTML = `New product added:&nbsp Name: <strong><em>${formProduct.name}</strong></em>&nbsp Type: <strong><em>${formProduct.type}</em></strong>&nbsp Seat(s): <em><strong>${formProduct.seats}</em></strong>&nbsp Description: <strong><em>${formProduct.description}</em></strong>&nbsp Image URL: <em><strong>${formProduct.imageURL}</em></strong>`
}