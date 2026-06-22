// Payment Page Script

function loadPaymentPage() {
    const productId = localStorage.getItem('checkoutProduct');
    const amount = localStorage.getItem('checkoutAmount');
    
    if (productId) {
        displayPaymentSummary(parseInt(productId), parseInt(amount));
    }
}

// Display payment summary
function displayPaymentSummary(productId, totalAmount) {
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;
    
    const summary = document.getElementById('payment-summary');
    if (!summary) return;
    
    const tax = Math.round(product.price * 0.05);
    const shipping = 500;
    
    const html = `
        <div style="display: flex; gap: 15px; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
            <img src="${product.image}" alt="${product.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
            <div style="flex: 1;">
                <strong>${product.name}</strong><br>
                <span style="color: #666;">LKR ${product.price.toLocaleString()}</span>
            </div>
        </div>
    `;
    
    summary.innerHTML = html;
    
    // Update totals
    document.getElementById('payment-subtotal').textContent = `LKR ${product.price.toLocaleString()}`;
    document.getElementById('payment-tax').textContent = `LKR ${tax.toLocaleString()}`;
    document.getElementById('payment-total').textContent = `LKR ${totalAmount.toLocaleString()}`;
}

// Process Payment
function processPayment(event) {
    event.preventDefault();
    
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    // Simulate payment processing
    const button = event.target.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'Processing...';
    
    setTimeout(() => {
        // Show success message
        alert('Payment successful! Your order has been placed.\n\nOrder ID: #' + Math.floor(Math.random() * 100000));
        
        // Clear checkout data
        localStorage.removeItem('checkoutProduct');
        localStorage.removeItem('checkoutAmount');
        
        // Redirect to home
        window.location.href = 'index.html';
    }, 2000);
}

// Load page on ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPaymentPage);
} else {
    loadPaymentPage();
}
