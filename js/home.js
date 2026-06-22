// Home Page Script

function loadHomePage() {
    loadBlogCarousel();
    loadRecentProducts();
    loadBlogs();
    loadAd();
    loadVideos();
}

// Load Blog Carousel
function loadBlogCarousel() {
    const carousel = document.getElementById('blog-carousel');
    if (!carousel) return;
    
    const recentBlogs = appData.blogs.slice(0, 5);
    let html = '';
    
    recentBlogs.forEach(blog => {
        const excerpt = blog.content.substring(0, 35) + '...';
        html += `
            <div class="carousel-item" onclick="readBlog(${blog.id})" style="position: relative;">
                <img src="${blog.image}" alt="${blog.title}" class="carousel-img" style="width: 100%; height: 200px; object-fit: cover;">
                <div class="carousel-label">Blog</div>
                <div class="carousel-content">
                    <div class="carousel-topic">${blog.title}</div>
                    <div class="carousel-text">${excerpt}</div>
                </div>
            </div>
        `;
    });
    
    carousel.innerHTML = html;
}

// Load Recent Products
function loadRecentProducts() {
    const productsGrid = document.getElementById('recent-products');
    if (!productsGrid) return;
    
    const recentProducts = appData.products.slice(0, 10);
    let html = '';
    
    recentProducts.forEach(product => {
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
    
    productsGrid.innerHTML = html;
}

// Load Blogs
function loadBlogs() {
    const blogsSection = document.getElementById('blogs-section');
    if (!blogsSection) return;
    
    const topBlogs = appData.blogs.slice(0, 10);
    let html = '';
    
    topBlogs.forEach(blog => {
        const date = new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        html += `
            <div class="blog-card" onclick="readBlog(${blog.id})">
                <img src="${blog.image}" alt="${blog.title}" class="blog-image">
                <div class="blog-content">
                    <span class="blog-label">${blog.label}</span>
                    <h3 class="blog-title">${blog.title}</h3>
                    <p class="blog-excerpt">${blog.excerpt}</p>
                    <div class="blog-date">${date}</div>
                </div>
            </div>
        `;
    });
    
    blogsSection.innerHTML = html;
}

// Load Ad
function loadAd() {
    const adContainer = document.getElementById('ad-container');
    if (!adContainer || appData.ads.length === 0) return;
    
    const ad = appData.ads[0];
    const html = `
        <div class="ad-container">
            <img src="${ad.image}" alt="${ad.title}" class="ad-image">
            <div class="ad-content">
                <h2 class="ad-title">${ad.title}</h2>
                <p class="ad-description">${ad.description}</p>
                <button class="btn btn-primary" onclick="window.location.href='${ad.buttonLink}'">${ad.buttonText}</button>
            </div>
        </div>
    `;
    
    adContainer.innerHTML = html;
}

// Load Videos
function loadVideos() {
    const videosSection = document.getElementById('videos-section');
    if (!videosSection) return;
    
    let html = '';
    appData.videos.forEach(video => {
        html += `
            <div class="video-container">
                <iframe src="${video.url}" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy"></iframe>
            </div>
        `;
    });
    
    videosSection.innerHTML = html;
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

// Read Blog
function readBlog(blogId) {
    localStorage.setItem('selectedBlog', blogId);
    // For now, we'll show an alert. In a full app, this would navigate to a blog detail page
    const blog = appData.blogs.find(b => b.id === blogId);
    alert(`Blog: ${blog.title}\n\n${blog.content}`);
}

// Subscribe to Newsletter
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    showNotification('Thank you for subscribing!');
    event.target.reset();
}

// Load page on ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHomePage);
} else {
    loadHomePage();
}
