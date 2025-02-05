
const paymentForm = document.getElementById('paymentForm');

 paymentForm.addEventListener("submit", payWithPaystack, false);
  function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'api key', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    // label: ``  
   ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
     alert('Window closed.');
   },
   callback: function(response){
     let message = 'Your food Payment is complete! Reference: ' + response.reference;
     alert(message);
   }
  });
 handler.openIframe();
}



