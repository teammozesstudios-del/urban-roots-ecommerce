// Global Data Structure
let appData = {
    user: null,
    favorites: [],
    notifications: [],
    cart: [],
    products: [],
    blogs: [],
    ads: [],
    videos: []
};

// Initialize app data from localStorage
function initializeApp() {
    const savedData = localStorage.getItem('urbanRootsData');
    if (savedData) {
        appData = JSON.parse(savedData);
    } else {
        loadSampleData();
    }
    
    const user = localStorage.getItem('currentUser');
    if (!user && window.location.pathname !== '/login.html') {
        window.location.href = 'login.html';
    } else if (user) {
        appData.user = JSON.parse(user);
    }
}

// Load sample data
function loadSampleData() {
    // Sample Products
    appData.products = [
        {
            id: 1,
            name: 'Monstera Deliciosa',
            price: 4500,
            subscriptionPrice: 1500,
            rating: 4.8,
            reviews: 124,
            sold: 850,
            image: 'images/products/monstera.jpg',
            label: 'Indoor',
            description: 'Known as the Swiss Cheese Plant, this iconic tropical beauty features stunning fenestrated leaves. It thrives in indirect light and adds a lush, modern aesthetic to any interior living space effortlessly.'
        },
        {
            id: 2,
            name: 'Snake Plant',
            price: 3500,
            subscriptionPrice: 1200,
            rating: 4.7,
            reviews: 98,
            sold: 720,
            image: 'images/products/snake-plant.jpg',
            label: 'Low Maintenance',
            description: 'A resilient and stylish houseplant that thrives in various light conditions. Perfect for beginners and busy plant lovers who want air-purifying benefits.'
        },
        {
            id: 3,
            name: 'Pothos',
            price: 2500,
            subscriptionPrice: 800,
            rating: 4.9,
            reviews: 156,
            sold: 920,
            image: 'images/products/pothos.jpg',
            label: 'Indoor',
            description: 'The ultimate beginner-friendly plant with heart-shaped leaves. Can be grown as a climbing vine or trailing plant, adaptable to most lighting conditions.'
        },
        {
            id: 4,
            name: 'Fiddle Leaf Fig',
            price: 6500,
            subscriptionPrice: 2000,
            rating: 4.6,
            reviews: 87,
            sold: 450,
            image: 'images/products/fiddle-leaf.jpg',
            label: 'Large Plants',
            description: 'A dramatic statement plant with large, violin-shaped leaves. Adds a touch of elegance to any modern interior space.'
        },
        {
            id: 5,
            name: 'Philodendron',
            price: 3800,
            subscriptionPrice: 1300,
            rating: 4.7,
            reviews: 112,
            sold: 680,
            image: 'images/products/philodendron.jpg',
            label: 'Climbing',
            description: 'A versatile climbing or trailing plant with beautiful heart-shaped foliage. Great for creating a tropical atmosphere in your home.'
        },
        {
            id: 6,
            name: 'Rubber Plant',
            price: 5200,
            subscriptionPrice: 1800,
            rating: 4.8,
            reviews: 134,
            sold: 790,
            image: 'images/products/rubber-plant.jpg',
            label: 'Large Plants',
            description: 'With its stunning glossy leaves, this plant makes a bold statement. Requires bright, indirect light and moderate watering.'
        },
        {
            id: 7,
            name: 'Spider Plant',
            price: 2000,
            subscriptionPrice: 700,
            rating: 4.9,
            reviews: 201,
            sold: 1200,
            image: 'images/products/spider-plant.jpg',
            label: 'Low Maintenance',
            description: 'One of the most forgiving plants, perfect for beginners. Known for producing adorable baby plantlets.'
        },
        {
            id: 8,
            name: 'Peace Lily',
            price: 3200,
            subscriptionPrice: 1100,
            rating: 4.6,
            reviews: 95,
            sold: 560,
            image: 'images/products/peace-lily.jpg',
            label: 'Indoor',
            description: 'Elegant white flowers and lush green foliage. An excellent air-purifying plant that tells you when it needs water by drooping slightly.'
        },
        {
            id: 9,
            name: 'Calathea',
            price: 4800,
            subscriptionPrice: 1600,
            rating: 4.7,
            reviews: 78,
            sold: 420,
            image: 'images/products/calathea.jpg',
            label: 'Indoor',
            description: 'Known for their stunning patterned leaves. These tropical beauties are perfect for adding visual interest to any room.'
        },
        {
            id: 10,
            name: 'ZZ Plant',
            price: 3600,
            subscriptionPrice: 1250,
            rating: 4.8,
            reviews: 108,
            sold: 640,
            image: 'images/products/zz-plant.jpg',
            label: 'Low Maintenance',
            description: 'An ultra-low maintenance plant with glossy, waxy leaflets. Tolerates low light and irregular watering.'
        }
    ];

    // Sample Blogs
    appData.blogs = [
        {
            id: 1,
            title: 'How to Care for Indoor Plants',
            excerpt: 'Indoor plants add life and freshness to your home. Here are essential tips for keeping them thriving...',
            content: 'Indoor plants add life and freshness to your home. Here are essential tips for keeping them thriving throughout the year. Learn about watering schedules, lighting requirements, and humidity levels that different plants need.',
            image: 'images/blogs/indoor-care.jpg',
            date: '2024-06-20',
            label: 'Care Tips'
        },
        {
            id: 2,
            title: 'Best Plants for Low Light Environments',
            excerpt: 'Don\'t have bright windows? These plants thrive in low light conditions and will beautify your space...',
            content: 'Don\'t have bright windows? These plants thrive in low light conditions and will beautify your space. Discover the perfect shade-loving plants for your home and office.',
            image: 'images/blogs/low-light.jpg',
            date: '2024-06-18',
            label: 'Plant Guide'
        },
        {
            id: 3,
            title: 'Creating a Mini Terrarium',
            excerpt: 'Terrariums are a beautiful way to display small plants. Learn how to create your own miniature garden...',
            content: 'Terrariums are a beautiful way to display small plants. Learn how to create your own miniature garden in a glass container.',
            image: 'images/blogs/terrarium.jpg',
            date: '2024-06-15',
            label: 'DIY'
        },
        {
            id: 4,
            title: 'Understanding Plant Pests',
            excerpt: 'Discover common houseplant pests and how to identify and treat them naturally...',
            content: 'Discover common houseplant pests and how to identify and treat them naturally. Protect your green friends from damage.',
            image: 'images/blogs/pests.jpg',
            date: '2024-06-12',
            label: 'Health'
        },
        {
            id: 5,
            title: 'Propagating Plants from Cuttings',
            excerpt: 'Expand your plant collection by learning how to propagate your favorite plants from cuttings...',
            content: 'Expand your plant collection by learning how to propagate your favorite plants from cuttings. It\'s easier than you think!',
            image: 'images/blogs/propagation.jpg',
            date: '2024-06-10',
            label: 'Gardening'
        },
        {
            id: 6,
            title: 'Seasonal Plant Care Guide',
            excerpt: 'Different seasons require different care for your plants. Here\'s what to do throughout the year...',
            content: 'Different seasons require different care for your plants. Here\'s what to do throughout the year to keep them healthy.',
            image: 'images/blogs/seasonal.jpg',
            date: '2024-06-08',
            label: 'Care Tips'
        },
        {
            id: 7,
            title: 'The Benefits of Having Indoor Plants',
            excerpt: 'Beyond aesthetics, indoor plants offer numerous health and wellness benefits. Discover them all...',
            content: 'Beyond aesthetics, indoor plants offer numerous health and wellness benefits. Learn how they improve air quality and mental health.',
            image: 'images/blogs/benefits.jpg',
            date: '2024-06-05',
            label: 'Health'
        },
        {
            id: 8,
            title: 'Plant Container Guide',
            excerpt: 'Choosing the right container is crucial for plant health. Learn about different pot types and sizes...',
            content: 'Choosing the right container is crucial for plant health. Learn about different pot types and sizes suitable for various plants.',
            image: 'images/blogs/containers.jpg',
            date: '2024-06-03',
            label: 'Guide'
        },
        {
            id: 9,
            title: 'Feng Shui and Plants',
            excerpt: 'Arrange your plants according to Feng Shui principles to create harmony and balance in your space...',
            content: 'Arrange your plants according to Feng Shui principles to create harmony and balance in your space.',
            image: 'images/blogs/feng-shui.jpg',
            date: '2024-06-01',
            label: 'Design'
        },
        {
            id: 10,
            title: 'Starting Your First Vegetable Garden',
            excerpt: 'Grow your own vegetables at home. A beginner\'s guide to starting your first veggie garden...',
            content: 'Grow your own vegetables at home. A beginner\'s guide to starting your first veggie garden, indoors or outdoors.',
            image: 'images/blogs/vegetables.jpg',
            date: '2024-05-30',
            label: 'Gardening'
        }
    ];

    // Sample Ad
    appData.ads = [
        {
            id: 1,
            title: 'Summer Plant Collection',
            description: 'Discover our exclusive summer collection of tropical plants. Get 20% off on all monstera varieties this week!',
            image: 'images/ads/summer-sale.jpg',
            buttonText: 'Shop Now',
            buttonLink: 'shop.html'
        }
    ];

    // Sample Videos
    appData.videos = [
        { id: 1, title: 'Plant Care Basics', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 2, title: 'Indoor Gardening Tips', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 3, title: 'Plant Propagation', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 4, title: 'Decorating with Plants', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ];

    saveAppData();
}

// Save app data to localStorage
function saveAppData() {
    localStorage.setItem('urbanRootsData', JSON.stringify(appData));
}

// Dropdown Toggle Functions
function toggleProfileMenu() {
    const menu = document.getElementById('profile-menu');
    menu.classList.toggle('active');
    document.getElementById('notifications-menu').classList.remove('active');
    document.getElementById('favorites-menu').classList.remove('active');
}

function toggleNotifications() {
    const menu = document.getElementById('notifications-menu');
    menu.classList.toggle('active');
    document.getElementById('profile-menu').classList.remove('active');
    document.getElementById('favorites-menu').classList.remove('active');
    loadNotifications();
}

function toggleFavorites() {
    const menu = document.getElementById('favorites-menu');
    menu.classList.toggle('active');
    document.getElementById('profile-menu').classList.remove('active');
    document.getElementById('notifications-menu').classList.remove('active');
    loadFavorites();
}

// Load Favorites
function loadFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    if (!favoritesList) return;
    
    if (appData.favorites.length === 0) {
        favoritesList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No favorites added yet</p>';
        return;
    }
    
    let html = '';
    appData.favorites.forEach(fav => {
        const product = appData.products.find(p => p.id === fav);
        if (product) {
            html += `
                <div style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; cursor: pointer;" onclick="goToCheckout(${product.id})">
                    <strong>${product.name}</strong><br>
                    <span style="color: #006838; font-weight: bold;">LKR ${product.price.toLocaleString()}</span>
                </div>
            `;
        }
    });
    
    favoritesList.innerHTML = html;
}

// Load Notifications
function loadNotifications() {
    const notificationsList = document.getElementById('notifications-list');
    if (!notificationsList) return;
    
    const recentProducts = appData.products.slice(0, 5);
    let html = '<div style="padding: 10px;">';
    
    recentProducts.forEach(product => {
        html += `
            <div style="padding: 10px; border-bottom: 1px solid #e0e0e0; cursor: pointer;" onclick="goToCheckout(${product.id})">
                <strong>${product.name}</strong><br>
                <span style="font-size: 12px; color: #999;">LKR ${product.price.toLocaleString()}</span>
            </div>
        `;
    });
    
    html += '</div>';
    notificationsList.innerHTML = html;
    
    const badge = document.getElementById('notification-count');
    if (badge) badge.textContent = recentProducts.length;
}

// Add to Favorites
function addToFavorites(productId) {
    if (!appData.favorites.includes(productId)) {
        appData.favorites.push(productId);
        saveAppData();
        showNotification('Added to favorites!');
    }
}

// Remove from Favorites
function removeFromFavorites(productId) {
    appData.favorites = appData.favorites.filter(id => id !== productId);
    saveAppData();
}

// Go to Checkout
function goToCheckout(productId) {
    localStorage.setItem('checkoutProduct', productId);
    window.location.href = 'checkout.html';
}

// Go to Payment
function goToPayment() {
    window.location.href = 'payment.html';
}

// Go Home
function goHome() {
    window.location.href = 'index.html';
}

// Logout
function logout() {
    if (confirm('Are you sure you want to log out?')) {
        const logoutMsg = document.createElement('div');
        logoutMsg.textContent = 'Logging out...';
        logoutMsg.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #006838; color: white; padding: 20px 40px; border-radius: 8px; z-index: 9999; font-weight: bold;';
        document.body.appendChild(logoutMsg);
        
        setTimeout(() => {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('urbanRootsData');
            window.location.href = 'login.html';
        }, 2000);
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #006838;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Close dropdowns on outside click
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.contains(event.target)) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('active');
        });
    }
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize app
window.addEventListener('load', initializeApp);
