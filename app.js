const iceCream = [
    { id: 1, name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 },

    { id: 2, name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 },

    { id: 3, name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }
]


const vessels = [
    { id: 4, name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 },

    { id: 5, name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }
]

const toppings = [
    { id: 6, name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 },

    { id: 7, name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }
]

const cart = []




function drawMenu() {
    template = ''
    iceCream.forEach(item => {
        template += `
            <div class="col-md-4 w-25 m-2 p-2" >
                <div class="bg-dark text-light shadow rounded ice-cream-card "onclick="addToCart(${item.id})">
                    <img class=" w-100 image-fluid small 200px" src="${item.image}" alt="ice cream picture">
                        <div class="d-flex justify-content-around p-3 m-2 ">
                            <h4>${item.name}</h4>
                            <h4>$${item.price.toFixed(2)}</h4>
                        </div>
                </div>
        </div >
        `
    })
    document.getElementById(`ice-cream-items`).innerHTML = template
    template = ""



    vessels.forEach(item => {
        template += `
            <div class="col-md-4 w-25 m-2 p-2" >
                <div class="bg-dark text-light shadow rounded ice-cream-card "onclick="addToCart(${item.id})">
                    <img class=" w-100 image-fluid small 200px" src="${item.image}" alt="ice cream picture">
                        <div class="d-flex justify-content-around p-3 m-2 ">
                            <h4>${item.name}</h4>
                            <h4>$${item.price.toFixed(2)}</h4>
                        </div>
                </div>
        </div >
        `
    })
    document.getElementById(`vessels-items`).innerHTML = template
    template = ""



    toppings.forEach(item => {
        template += `
            <div class="col-md-3 w-25 m-2 p-2" >
            
                <div class="bg-dark text-light shadow rounded ice-cream-card " onclick="addToCart(${item.id})">
                    <img class=" w-100 image-fluid small 200px" src="${item.image}" alt="ice cream picture">
                        <div class="d-flex justify-content-around p-3 m-2 ">
                            <h4>${item.name}</h4>
                            <h4>$${item.price.toFixed(2)}</h4>
                        </div>
                </div>
        </div >
        `
    })
    document.getElementById(`toppings-items`).innerHTML = template
}



function addToCart(id) {


    // This line code is responsible for taking the 3 different arrays and taking the items 
    // and putting them in the same item pull that way found does not have to go through 3 different arrays it only
    // has to go through 1 array call allitems which have the 3 constant arrays included

    let allitems = [...iceCream, ...vessels, ...toppings]



    let found = allitems.find(item => item.id == id)



    if (found) {


        console.log(found)
        cart.push(found)
        drawCart()
    }


}






function drawCart() {
    let template = ``
    let total = 0
    cart.forEach(item => {
        total += item.price
        template += `
        
          <ul class="list-group ">
                    <li class="list-group-item  m-2 text-light bg-dark">
                        <p>${item.name}</p>
                        <p>$${item.price.toFixed(2)}</p>

                    </li>

                </ul>
        
        
        
        
        `




    }

    )
    document.getElementById(`cart-items`).innerHTML = template
}









drawMenu()

console.log("is this working");