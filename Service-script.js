
const purchaseButtons = document.querySelectorAll('.purchase-btn');
purchaseButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.getAttribute('data-product');
    const productPrice = this.getAttribute('data-price');
    

    document.getElementById('productName').value = productName;
    
  
    document.getElementById('purchaseForm').classList.remove('hidden');
  });
});


document.getElementById('purchaseDetailsForm').addEventListener('submit', function(event) {
  event.preventDefault();


  const productName = document.getElementById('productName').value;
  const quantity = document.getElementById('quantity').value;
  const customerName = document.getElementById('customerName').value;
  const email = document.getElementById('email').value;

 
  document.getElementById('purchaseForm').classList.add('hidden');

  
  const confirmationMessage = document.getElementById('confirmationMessage');
  confirmationMessage.classList.remove('hidden');
  
 
  document.getElementById('purchasedProduct').textContent = productName;
  document.getElementById('purchasedQuantity').textContent = quantity;
  document.getElementById('purchasedEmail').textContent = email;
});
