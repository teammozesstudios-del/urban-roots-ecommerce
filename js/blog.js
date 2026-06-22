// Blog Page Script

function loadBlogPage() {
    displayAllBlogs();
}

// Display all blogs
function displayAllBlogs() {
    const blogsGrid = document.getElementById('blogs-grid');
    if (!blogsGrid) return;
    
    let html = '';
    appData.blogs.forEach(blog => {
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
    
    blogsGrid.innerHTML = html;
}

// Read Blog
function readBlog(blogId) {
    const blog = appData.blogs.find(b => b.id === blogId);
    alert(`${blog.title}\n\n${blog.content}`);
}

// Load page on ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadBlogPage);
} else {
    loadBlogPage();
}
