// Shop Page Script

function loadShopPage() {
    loadFilters();
    displayProducts();
}

// Load filter buttons
function loadFilters() {
    const filterContainer = document.getElementById('filter-container');
    if (!filterContainer) return;
    
    const labels = [...new Set(appData.products.map(p => p.label))];
    let html = '<button class="filter-btn active" onclick="filterProducts(null)">All</button>';
    
    labels.forEach(label => {
        html += `<button class="filter-btn" onclick="filterProducts('${label}')">${label}</button>`;
    });
    
    filterContainer.innerHTML = html;
}

// Filter Products
function filterProducts(label) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter and display
    const filtered = label ? appData.products.filter(p => p.label === label) : appData.products;
    displayFilteredProducts(filtered);
}

// Display filtered products
function displayFilteredProducts(products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    let html = '';
    products.forEach(product => {
        const isFavorite = appData.favorites.includes(product.id);
        html += `
            <div class="product-card" onclick="goToCheckout(${product.id})">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-image-label">${product.label}</div>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(event, ${product.id})" title="Add to favorites">
                        ❤️
                    </button>
                </div>
                <div class="product-content">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">LKR ${product.price.toLocaleString()}</div>
                    <div class="product-subscription">LKR ${product.subscriptionPrice.toLocaleString()}/month (3 months)</div>
                    <div class="product-rating">
                        <span class="stars">★ ${product.rating}/5</span>
                        <span class="review-count">(${product.reviews} reviews)</span>
                    </div>
                    <div class="product-stats">
                        <div>Sold: ${product.sold}</div>
                        <div>Reviews: ${product.reviews}</div>
                    </div>
                    <div class="product-description">${product.description}</div>
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

// Display all products
function displayProducts() {
    displayFilteredProducts(appData.products);
}

// Toggle Favorite
function toggleFavorite(event, productId) {
    event.stopPropagation();
    const button = event.currentTarget;
    
    if (appData.favorites.includes(productId)) {
        removeFromFavorites(productId);
        button.classList.remove('active');
        showNotification('Removed from favorites');
    } else {
        addToFavorites(productId);
        button.classList.add('active');
        showNotification('Added to favorites!');
    }
}

// Load page on ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadShopPage);
} else {
    loadShopPage();
}
