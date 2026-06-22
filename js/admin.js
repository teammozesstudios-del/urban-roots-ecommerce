// Admin Dashboard Script

// Admin data structure
let adminData = {
    products: [],
    blogs: [],
    ads: [],
    videos: []
};

let editingId = null;
let editingType = null;

// Initialize admin
function initializeAdmin() {
    // Check if user is admin
    const user = localStorage.getItem('currentUser');
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    const userData = JSON.parse(user);
    document.getElementById('admin-name').textContent = userData.fullName || userData.username;
    
    // Load data from localStorage
    const appData = localStorage.getItem('urbanRootsData');
    if (appData) {
        const data = JSON.parse(appData);
        adminData.products = data.products || [];
        adminData.blogs = data.blogs || [];
        adminData.ads = data.ads || [];
        adminData.videos = data.videos || [];
    }
    
    updateDashboard();
    loadProductsTable();
    loadBlogsTable();
    loadAdsTable();
    loadVideosTable();
}

// Update dashboard stats
function updateDashboard() {
    document.getElementById('total-products').textContent = adminData.products.length;
    document.getElementById('total-blogs').textContent = adminData.blogs.length;
    document.getElementById('total-videos').textContent = adminData.videos.length;
    document.getElementById('total-ads').textContent = adminData.ads.length;
}

// Show section
function showSection(sectionName) {
    // Hide all sections
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('products-section').style.display = 'none';
    document.getElementById('blogs-section').style.display = 'none';
    document.getElementById('ads-section').style.display = 'none';
    document.getElementById('videos-section').style.display = 'none';
    
    // Show selected section
    document.getElementById(sectionName + '-section').style.display = 'block';
    
    // Update active menu item
    document.querySelectorAll('.admin-menu-item a').forEach(a => a.classList.remove('active'));
    event.target.classList.add('active');
}

// ============= PRODUCTS =============

function loadProductsTable() {
    const tbody = document.getElementById('products-tbody');
    tbody.innerHTML = '';
    
    adminData.products.forEach((product, index) => {
        const row = `
            <tr>
                <td><img src="${product.image}" alt="${product.name}"></td>
                <td>${product.name}</td>
                <td>LKR ${product.price.toLocaleString()}</td>
                <td>${product.label}</td>
                <td>★ ${product.rating}</td>
                <td class="admin-actions">
                    <button class="btn-edit" onclick="editProduct(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function showProductForm(productIndex = null) {
    editingId = productIndex;
    editingType = 'product';
    
    const modal = document.getElementById('product-modal');
    if (productIndex !== null) {
        const product = adminData.products[productIndex];
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-price').value = product.price;
        document.getElementById('product-sub-price').value = product.subscriptionPrice;
        document.getElementById('product-label').value = product.label;
        document.getElementById('product-rating').value = product.rating;
        document.getElementById('product-reviews').value = product.reviews;
        document.getElementById('product-sold').value = product.sold;
        document.getElementById('product-image').value = product.image;
        document.getElementById('product-description').value = product.description;
        modal.querySelector('h3').textContent = 'Edit Product';
    } else {
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-sub-price').value = '';
        document.getElementById('product-label').value = '';
        document.getElementById('product-rating').value = '';
        document.getElementById('product-reviews').value = '';
        document.getElementById('product-sold').value = '';
        document.getElementById('product-image').value = '';
        document.getElementById('product-description').value = '';
        modal.querySelector('h3').textContent = 'Add Product';
    }
    
    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
    editingId = null;
}

function saveProduct(event) {
    event.preventDefault();
    
    const product = {
        id: editingId !== null ? adminData.products[editingId].id : Math.max(...adminData.products.map(p => p.id), 0) + 1,
        name: document.getElementById('product-name').value,
        price: parseInt(document.getElementById('product-price').value),
        subscriptionPrice: parseInt(document.getElementById('product-sub-price').value),
        label: document.getElementById('product-label').value,
        rating: parseFloat(document.getElementById('product-rating').value),
        reviews: parseInt(document.getElementById('product-reviews').value),
        sold: parseInt(document.getElementById('product-sold').value),
        image: document.getElementById('product-image').value,
        description: document.getElementById('product-description').value
    };
    
    if (editingId !== null) {
        adminData.products[editingId] = product;
        alert('Product updated successfully!');
    } else {
        adminData.products.push(product);
        alert('Product added successfully!');
    }
    
    saveAdminData();
    loadProductsTable();
    updateDashboard();
    closeProductModal();
}

function editProduct(index) {
    showProductForm(index);
}

function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        adminData.products.splice(index, 1);
        saveAdminData();
        loadProductsTable();
        updateDashboard();
        alert('Product deleted successfully!');
    }
}

// ============= BLOGS =============

function loadBlogsTable() {
    const tbody = document.getElementById('blogs-tbody');
    tbody.innerHTML = '';
    
    adminData.blogs.forEach((blog, index) => {
        const date = new Date(blog.date).toLocaleDateString();
        const row = `
            <tr>
                <td>${blog.title}</td>
                <td>${blog.label}</td>
                <td>${date}</td>
                <td class="admin-actions">
                    <button class="btn-edit" onclick="editBlog(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteBlog(${index})">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function showBlogForm(blogIndex = null) {
    editingId = blogIndex;
    editingType = 'blog';
    
    const modal = document.getElementById('blog-modal');
    if (blogIndex !== null) {
        const blog = adminData.blogs[blogIndex];
        document.getElementById('blog-title').value = blog.title;
        document.getElementById('blog-label').value = blog.label;
        document.getElementById('blog-date').value = blog.date;
        document.getElementById('blog-image').value = blog.image;
        document.getElementById('blog-excerpt').value = blog.excerpt;
        document.getElementById('blog-content').value = blog.content;
        modal.querySelector('h3').textContent = 'Edit Blog Post';
    } else {
        document.getElementById('blog-title').value = '';
        document.getElementById('blog-label').value = '';
        document.getElementById('blog-date').value = new Date().toISOString().split('T')[0];
        document.getElementById('blog-image').value = '';
        document.getElementById('blog-excerpt').value = '';
        document.getElementById('blog-content').value = '';
        modal.querySelector('h3').textContent = 'Add Blog Post';
    }
    
    modal.classList.add('active');
}

function closeBlogModal() {
    document.getElementById('blog-modal').classList.remove('active');
    editingId = null;
}

function saveBlog(event) {
    event.preventDefault();
    
    const blog = {
        id: editingId !== null ? adminData.blogs[editingId].id : Math.max(...adminData.blogs.map(b => b.id), 0) + 1,
        title: document.getElementById('blog-title').value,
        label: document.getElementById('blog-label').value,
        date: document.getElementById('blog-date').value,
        image: document.getElementById('blog-image').value,
        excerpt: document.getElementById('blog-excerpt').value,
        content: document.getElementById('blog-content').value
    };
    
    if (editingId !== null) {
        adminData.blogs[editingId] = blog;
        alert('Blog updated successfully!');
    } else {
        adminData.blogs.push(blog);
        alert('Blog added successfully!');
    }
    
    saveAdminData();
    loadBlogsTable();
    updateDashboard();
    closeBlogModal();
}

function editBlog(index) {
    showBlogForm(index);
}

function deleteBlog(index) {
    if (confirm('Are you sure you want to delete this blog?')) {
        adminData.blogs.splice(index, 1);
        saveAdminData();
        loadBlogsTable();
        updateDashboard();
        alert('Blog deleted successfully!');
    }
}

// ============= ADS =============

function loadAdsTable() {
    const tbody = document.getElementById('ads-tbody');
    tbody.innerHTML = '';
    
    adminData.ads.forEach((ad, index) => {
        const row = `
            <tr>
                <td><img src="${ad.image}" alt="${ad.title}"></td>
                <td>${ad.title}</td>
                <td>${ad.description.substring(0, 50)}...</td>
                <td class="admin-actions">
                    <button class="btn-edit" onclick="editAd(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteAd(${index})">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function showAdForm(adIndex = null) {
    editingId = adIndex;
    editingType = 'ad';
    
    const modal = document.getElementById('ad-modal');
    if (adIndex !== null) {
        const ad = adminData.ads[adIndex];
        document.getElementById('ad-title').value = ad.title;
        document.getElementById('ad-image').value = ad.image;
        document.getElementById('ad-description').value = ad.description;
        document.getElementById('ad-button-text').value = ad.buttonText;
        document.getElementById('ad-button-link').value = ad.buttonLink;
        modal.querySelector('h3').textContent = 'Edit Advertisement';
    } else {
        document.getElementById('ad-title').value = '';
        document.getElementById('ad-image').value = '';
        document.getElementById('ad-description').value = '';
        document.getElementById('ad-button-text').value = '';
        document.getElementById('ad-button-link').value = '';
        modal.querySelector('h3').textContent = 'Add Advertisement';
    }
    
    modal.classList.add('active');
}

function closeAdModal() {
    document.getElementById('ad-modal').classList.remove('active');
    editingId = null;
}

function saveAd(event) {
    event.preventDefault();
    
    const ad = {
        id: editingId !== null ? adminData.ads[editingId].id : Math.max(...adminData.ads.map(a => a.id), 0) + 1,
        title: document.getElementById('ad-title').value,
        image: document.getElementById('ad-image').value,
        description: document.getElementById('ad-description').value,
        buttonText: document.getElementById('ad-button-text').value,
        buttonLink: document.getElementById('ad-button-link').value
    };
    
    if (editingId !== null) {
        adminData.ads[editingId] = ad;
        alert('Advertisement updated successfully!');
    } else {
        adminData.ads.push(ad);
        alert('Advertisement added successfully!');
    }
    
    saveAdminData();
    loadAdsTable();
    updateDashboard();
    closeAdModal();
}

function editAd(index) {
    showAdForm(index);
}

function deleteAd(index) {
    if (confirm('Are you sure you want to delete this ad?')) {
        adminData.ads.splice(index, 1);
        saveAdminData();
        loadAdsTable();
        updateDashboard();
        alert('Advertisement deleted successfully!');
    }
}

// ============= VIDEOS =============

function loadVideosTable() {
    const tbody = document.getElementById('videos-tbody');
    tbody.innerHTML = '';
    
    adminData.videos.forEach((video, index) => {
        const row = `
            <tr>
                <td>${video.title}</td>
                <td><small>${video.url.substring(0, 50)}...</small></td>
                <td class="admin-actions">
                    <button class="btn-edit" onclick="editVideo(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteVideo(${index})">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function showVideoForm(videoIndex = null) {
    editingId = videoIndex;
    editingType = 'video';
    
    const modal = document.getElementById('video-modal');
    if (videoIndex !== null) {
        const video = adminData.videos[videoIndex];
        document.getElementById('video-title').value = video.title;
        document.getElementById('video-url').value = video.url;
        modal.querySelector('h3').textContent = 'Edit Video';
    } else {
        document.getElementById('video-title').value = '';
        document.getElementById('video-url').value = '';
        modal.querySelector('h3').textContent = 'Add Video';
    }
    
    modal.classList.add('active');
}

function closeVideoModal() {
    document.getElementById('video-modal').classList.remove('active');
    editingId = null;
}

function saveVideo(event) {
    event.preventDefault();
    
    const video = {
        id: editingId !== null ? adminData.videos[editingId].id : Math.max(...adminData.videos.map(v => v.id), 0) + 1,
        title: document.getElementById('video-title').value,
        url: document.getElementById('video-url').value
    };
    
    if (editingId !== null) {
        adminData.videos[editingId] = video;
        alert('Video updated successfully!');
    } else {
        adminData.videos.push(video);
        alert('Video added successfully!');
    }
    
    saveAdminData();
    loadVideosTable();
    updateDashboard();
    closeVideoModal();
}

function editVideo(index) {
    showVideoForm(index);
}

function deleteVideo(index) {
    if (confirm('Are you sure you want to delete this video?')) {
        adminData.videos.splice(index, 1);
        saveAdminData();
        loadVideosTable();
        updateDashboard();
        alert('Video deleted successfully!');
    }
}

// Save data to localStorage
function saveAdminData() {
    const appData = JSON.parse(localStorage.getItem('urbanRootsData')) || {};
    appData.products = adminData.products;
    appData.blogs = adminData.blogs;
    appData.ads = adminData.ads;
    appData.videos = adminData.videos;
    localStorage.setItem('urbanRootsData', JSON.stringify(appData));
}

// Logout
function logoutAdmin() {
    if (confirm('Are you sure you want to log out?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
}

// Close modals on outside click
window.addEventListener('click', function(event) {
    const productModal = document.getElementById('product-modal');
    const blogModal = document.getElementById('blog-modal');
    const adModal = document.getElementById('ad-modal');
    const videoModal = document.getElementById('video-modal');
    
    if (event.target === productModal) closeProductModal();
    if (event.target === blogModal) closeBlogModal();
    if (event.target === adModal) closeAdModal();
    if (event.target === videoModal) closeVideoModal();
});

// Initialize on page load
window.addEventListener('load', initializeAdmin);
