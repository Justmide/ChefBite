


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



// The open and close functions for the side navigation menu

// Function to show the full-screen alert for 3 seconds


   function showAlert() {
    const alertBox = document.getElementById('fullScreenAlert');
    
    // Show the alert (fade-in effect)
    alertBox.style.visibility = 'visible';
    alertBox.style.opacity = '1';

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
        alertBox.style.opacity = '0';
        setTimeout(() => {
            alertBox.style.visibility = 'hidden';
        }, 500); // Matches the fade-out transition duration
    }, 3000); // Alert visible for 3 seconds
}



document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll('.addToCart'); // All buttons
    const fullScreenAlert = document.getElementById('fullScreenAlert');
    const alertText = document.getElementById('alertText');
  
    // Loop through each "Add to Cart" button
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        // Find the food name in the same gridItem container
        const foodName = event.target.parentElement.querySelector('.foodMenu').textContent;

        // Display the alert and food name
        alertText.textContent = `${foodName} has been added to the cart💖`;
        fullScreenAlert.style.display = 'flex'; // Show full-screen alert
  

      })
    })
})
// Select all Add To Cart buttons
// const addToCartButtons = document.querySelectorAll('.addToCart');

// addToCartButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         // Show the full-screen alert
//         const cartNumEL = document.getElementById('cartNum');
//         const cartNumEL2 = document.getElementById('cartNum2');

//         cartNumEL.textContent = parseInt(cartNumEL.textContent) + 1;
//         cartNumEL2.textContent = parseInt(cartNumEL2.textContent) + 1;
        
//         // Check if the user has granted permission for notifications
//         if (Notification.permission === 'default') {
//             Notification.requestPermission();
//         }
//         if(parseInt(cartNumEL.textContent) == 5){
//         if (Notification.permission === 'granted') {
//             const notification = new Notification('Title', {
//                 body: 'You have added 5 items to your cart. Proceed to checkout',
//                 icon: 'icon-url.png'
//             });
//               notification.onclick = () => {
//                 window.location.href = "./sign up page/signup.html";
//         }
//     }
//             if(parseInt(cartNumEL2.textContent) == 5){
//                 if (Notification.permission === 'granted') {
//                     const notification = new Notification('Title', {
//                         body: 'You have added 5 items to your cart. Proceed to checkout',
//                         icon: 'icon-url.png'
//                     });
//                       notification.onclick = () => {
//                         window.location.href = "./sign up page/signup.html";
//                       }   
//                     }   
        
//         } else {
//             alertText.innerHTML = `You have added ${event.target.parentElement.querySelector('.foodMenu').textContent} to your cart💖`
//         }
//     }
//         showAlert();
            
//     })
// })




// // Loop through all buttons and attach event listeners
// addToCartButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         // Replace Add To Cart button with - and + controls
//         const parentDiv = event.target.parentElement;
//         createQuantityControls(parentDiv);
//     });
// });

// // Function to replace button with quantity controls
// function createQuantityControls(parentDiv) {
//     // Create a container for the controls
//     const quantityDiv = document.createElement('div');
//     quantityDiv.classList.add('quantity-control');

//     // Create "-" button
//     const minusButton = document.createElement('button');
//     minusButton.textContent = '-';

//     // Create a span to display the quantity
//     const quantityDisplay = document.createElement('span');
//     quantityDisplay.textContent = '1'; // Initial quantity

   

//     // Create "+" button
//     const plusButton = document.createElement('button');
//     plusButton.textContent = '+';

//     // Append the buttons and display to the container
//     quantityDiv.appendChild(minusButton);
//     quantityDiv.appendChild(quantityDisplay);
//     quantityDiv.appendChild(plusButton);
  
 
//  // create Button Element
//  const createButton = document.createElement('div');
//  quantityDiv.classList.add('create-button');
//  const checkOut = document.createElement('button');
//  checkOut.textContent = 'Check Out';
//  checkOut.classList.add('checkOutBtn');

//  quantityDiv.appendChild(createButton);
//  createButton.appendChild(checkOut);

//     // Replace the Add To Cart button with the quantity controls
//     parentDiv.querySelector('.addToCart').style.display = 'none';
//     parentDiv.appendChild(quantityDiv);

//     // Add functionality to the "-" button
//     minusButton.addEventListener('click', () => {
//         let currentQuantity = parseInt(quantityDisplay.textContent);
//         if (currentQuantity > 1) {
//             currentQuantity--;
//             quantityDisplay.textContent = currentQuantity;
//         }
        
//      else {
//             // Remove controls and show Add To Cart again if quantity is 0
          
//             quantityDiv.remove();
//             parentDiv.querySelector('.addToCart').style.display = 'inline-block';
//         }
//     });

//     // Add functionality to the "+" button
//     plusButton.addEventListener('click', () => {
//         let currentQuantity = parseInt(quantityDisplay.textContent);
//         currentQuantity++;
//         quantityDisplay.textContent = currentQuantity;

//         // Check if the quantity is 10 or more and show the full-screen alert
       
//         if (currentQuantity == 10) {
//             const foodName = parentDiv.querySelector('.foodMenu').textContent;
//            alertText.innerHTML = `You have reached the maximum food item for ${foodName} please proceed to order 👏`
//             fullScreenAlert.style.display = 'flex'
//            showAlert();
           
//             // Optionally, you can reset the quantity to 1 or perform 

//         } else if (currentQuantity > 10) {
//             quantityDisplay.textContent = 1;
           

//         }
//     });
// }


// const cartLogo = document.getElementById('cartLogo')
// const cartLogo1 = document.getElementById('cartLogo1')

// cartLogo.addEventListener('click', (e)=>{
//     e.preventDefault(); 
//    window.location.href = "./sign up page/signup.html";
// })

// cartLogo1.addEventListener('click', (e)=>{
//     e.preventDefault(); 
//    window.location.href = "./sign up page/signup.html";
// })


document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll('.addToCart');
    const cartNumEL = document.getElementById('cartNum');
    const cartNumEL2 = document.getElementById('cartNum2');

    
    // Initialize cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    updateCartLogo();

    // Add event listeners to Add To Cart buttons
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const foodName = event.target.parentElement.querySelector('.foodMenu').textContent;

            // Add item to cart in localStorage
            if (cart[foodName]) {
                cart[foodName]++;
            } else {
                cart[foodName] = 1;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartLogo();

            // Display alert
            const alertText = document.getElementById('alertText');
            alertText.textContent = `${foodName} has been added to the cart 💖`;
            showAlert();

            // Replace Add To Cart button with quantity controls
            const parentDiv = event.target.parentElement;
            createQuantityControls(parentDiv, foodName);
         
            
        });
    });

    // Update cart logo dynamically
    function updateCartLogo() {
        const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
        cartNumEL.textContent = totalItems;
        cartNumEL2.textContent = totalItems;
    }

    // Function to create quantity controls
    function createQuantityControls(parentDiv, foodName) {
        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add('quantity-control');

        const minusButton = document.createElement('button');
        minusButton.textContent = '-';

        const quantityDisplay = document.createElement('span');
        quantityDisplay.textContent = cart[foodName]; // Get the quantity from localStorage

        const plusButton = document.createElement('button');
        plusButton.textContent = '+';

        quantityDiv.appendChild(minusButton);
        quantityDiv.appendChild(quantityDisplay);
        quantityDiv.appendChild(plusButton);

        //  // create Button Element
 const createButton = document.createElement('div');
 quantityDiv.classList.add('create-button');
 const checkOut = document.createElement('button');
 checkOut.textContent = 'Check Out';
 checkOut.classList.add('checkOutBtn');

 quantityDiv.appendChild(createButton);
 createButton.appendChild(checkOut);

        parentDiv.querySelector('.addToCart').style.display = 'none';
        parentDiv.appendChild(quantityDiv);

        // Add functionality to "-" button
        minusButton.addEventListener('click', () => {
            if (cart[foodName] > 1) {
                cart[foodName]--;
            } else {
                delete cart[foodName];
                quantityDiv.remove();
                   // Remove controls and show Add To Cart again if quantity is 0
                parentDiv.querySelector('.addToCart').style.display = 'inline-block';
                
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            quantityDisplay.textContent = cart[foodName];
            updateCartLogo();
        });

        // Add functionality to "+" button
        plusButton.addEventListener('click', () => {
            if (cart[foodName]) {
                cart[foodName]++;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            quantityDisplay.textContent = cart[foodName];
          
            if (cart[foodName] == 10) {
                            const foodName = parentDiv.querySelector('.foodMenu').textContent;
                           alertText.innerHTML = `You have reached the maximum food item for ${foodName} please proceed to order 👏`
                            fullScreenAlert.style.display = 'flex'
                           showAlert();
                           
                            // Optionally, you can reset the quantity to 1 or perform 
                
                        } else if (cart[foodName]    > 10) {
                            quantityDisplay.textContent = 1;

                        }
                           
                
        });
    }

    // Cart Logo Click Event
    const cartLogo = document.getElementById('cartLogo');
    const cartLogo1 = document.getElementById('cartLogo1');

    cartLogo.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "./sign up page/signup.html";
    });

    cartLogo1.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "./sign up page/signup.html";
    });
});
