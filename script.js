document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.getAttribute('data-price'));

            total += productPrice;

            const cartItem = document.createElement('li');
            cartItem.textContent = ${productName} - $${productPrice.toFixed(2)};
            cartItems.appendChild(cartItem);

            totalElement.textContent = Total: $${total.toFixed(2)};
        });
    });

    checkoutButton.addEventListener('click', () => {
        if (total > 0) {
            alert(Gracias por tu compra de $${total.toFixed(2)}. ¡Nos pondremos en contacto contigo pronto!);
            cartItems.innerHTML = '';
            total = 0;
            totalElement.textContent = Total: $0.00;
        } else {
            alert('Tu carrito está vacío.');
        }
    });
});