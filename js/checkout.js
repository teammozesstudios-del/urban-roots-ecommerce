// Checkout Page Script

function loadCheckoutPage() {
    const productId = localStorage.getItem('checkoutProduct');
    if (productId) {
        displayProduct(parseInt(productId));
    }
}

// Display product details
function displayProduct(productId) {
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;
    
    const details = document.getElementById('product-details');
    if (!details) return;
    
    const total = product.price;
    const tax = Math.round(total * 0.05);
    const shipping = 500;
    const grandTotal = total + tax + shipping;
    
    const html = `
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #006838; font-size: 24px; margin-bottom: 10px;">${product.name}</h2>
        <div style="color: #666; margin-bottom: 20px;">
            <div style="display: flex; gap: 15px; margin-bottom: 10px;">
                <span class="stars">★ ${product.rating}/5</span>
                <span>(${product.reviews} reviews • ${product.sold} sold)</span>
            </div>
        </div>
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">${product.description}</p>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <div style="margin-bottom: 15px;">
                <strong>One-time Purchase:</strong><br>
                <span style="font-size: 24px; color: #006838; font-weight: bold;">LKR ${product.price.toLocaleString()}</span>
            </div>
            <div>
                <strong>3-Month Subscription:</strong><br>
                <span style="font-size: 18px; color: #55833d;">LKR ${product.subscriptionPrice.toLocaleString()}/month</span>
            </div>
        </div>
    `;
    
    details.innerHTML = html;
    
    // Update summary
    document.getElementById('subtotal').textContent = `LKR ${product.price.toLocaleString()}`;
    document.getElementById('tax').textContent = `LKR ${tax.toLocaleString()}`;
    document.getElementById('total').textContent = `LKR ${grandTotal.toLocaleString()}`;
    
    // Store for payment page
    localStorage.setItem('checkoutAmount', grandTotal);
    localStorage.setItem('checkoutProduct', productId);
}

// Load page on ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCheckoutPage);
} else {
    loadCheckoutPage();
}
