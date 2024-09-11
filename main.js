document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.getElementById('add-to-cart');
    const cartDetails = document.getElementById('cart-details');
    const cartImage = document.getElementById('cart-image');
    const cartPrice = document.getElementById('cart-price');
    
    // Product information (can also be dynamically generated)
    const productImage = document.getElementById('product-image').src;
    const productPrice = document.getElementById('product-price').textContent;
  
    addToCartButton.addEventListener('click', function () {
      // Show cart details
      cartDetails.classList.remove('hidden');
      
      // Update cart details with product information
      cartImage.src = productImage;
      cartPrice.textContent = `Price: ${productPrice}`;
    });
  });
  