# Urban Roots E-Commerce Website - Quick Start Guide

## 🎯 Quick Access

### User Pages
- **Home**: [index.html](index.html)
- **Shop**: [shop.html](shop.html)
- **Blog**: [blog.html](blog.html)
- **Profile**: [profile.html](profile.html)
- **Settings**: [settings.html](settings.html)
- **Login**: [login.html](login.html)
- **Checkout**: [checkout.html](checkout.html)
- **Payment**: [payment.html](payment.html)

### Admin Pages
- **Admin Dashboard**: [admin.html](admin.html)

## 🔐 Demo Credentials

### User Login
```
Username: demo
Password: demo123
Email: demo@urbanroots.com
```

### Admin Login
```
Username: admin
Password: admin123
Email: admin@urbanroots.com
```

## 🚀 How to Use

### For Users

1. **Start at Login Page**
   - Open `login.html`
   - Use credentials above or create new account
   - Click "Sign Up" for new account registration

2. **Browse Products**
   - Go to Shop page
   - Use filter buttons to narrow down by category
   - Click product card to view details and checkout

3. **Read Blog Posts**
   - Visit Blog page
   - Browse all plant care tips and guides
   - Click any blog to read full content

4. **Manage Account**
   - Click profile icon in navigation bar
   - Select "Profile" to edit information
   - Select "Settings" for password and preferences

5. **Make Purchase**
   - Add product to favorites (heart icon)
   - Click product to go to checkout
   - Review details and proceed to payment
   - Enter payment information (demo only)

### For Admins

1. **Access Admin Panel**
   - Open `admin.html`
   - Login with admin credentials

2. **Manage Products**
   - Click "Manage Products" in sidebar
   - Click "+Add Product" button
   - Fill in product details
   - Click "Save Product"
   - Edit or delete existing products

3. **Manage Blog Posts**
   - Click "Manage Blogs" in sidebar
   - Add new blog posts with title, content, image
   - Edit or delete posts as needed

4. **Manage Ads**
   - Click "Manage Ads" in sidebar
   - Create advertisements with custom images and links
   - Ads appear on home page

5. **Manage Videos**
   - Click "Manage Videos" in sidebar
   - Add YouTube video embed URLs
   - Videos display on home page

## 📋 Navigation Bar Features

### Left Side
- **Logo**: Click to go home

### Center
- **Home**: Navigate to home page
- **Shop**: Browse all products
- **Blog**: Read blog posts

### Right Side
- **❤️ Heart Icon**: View and manage favorites/wishlist
- **🔔 Bell Icon**: View latest product notifications
- **Profile Icon**: Access user menu
  - Profile
  - Settings
  - Log Out

## 🎨 Design Features

### Color Scheme
- **Primary Green**: #006838
- **Secondary Green**: #55833d
- **Accent Green**: #8cc342
- **White Background**: #ffffff

### Interactive Elements
- Hover effects on buttons and cards
- Smooth transitions
- Product favorites (add/remove heart)
- Notification badges
- Dropdown menus

## 💾 Data Management

### What Gets Saved
- User account information
- Favorite products
- Shopping cart items
- User preferences
- All products, blogs, ads, videos

### Storage Location
- Browser's Local Storage
- Clears when you clear browser cache
- Persists across page refreshes

## 🔍 Product Information

Each product includes:
- **Name**: Product title
- **Price**: One-time purchase price (LKR)
- **Subscription Price**: Monthly cost for 3-month plan
- **Rating**: Customer rating (0-5 stars)
- **Reviews**: Number of customer reviews
- **Sold**: Total units sold
- **Label**: Product category
- **Description**: Detailed product information
- **Image**: Product photo

## 🛒 Shopping Cart Flow

1. **Add to Favorites**: Click heart icon on product
2. **View Favorites**: Click heart icon in navbar
3. **Go to Checkout**: Click product or "Buy Now"
4. **Review Order**: Check product details and pricing
5. **Proceed to Payment**: Enter shipping and payment info
6. **Confirm Purchase**: Simulate payment completion

## 📞 Important Notes

- **Demo Data**: Sample products and blogs are included
- **No Real Payments**: Payment page is for demo purposes
- **LocalStorage Only**: Data stored in browser, not server
- **Modern Browser Required**: Use Chrome, Firefox, Safari, or Edge
- **Mobile Responsive**: Works on all screen sizes

## 🆘 Troubleshooting

### Not Logged In?
- Clear browser cache and try again
- Use demo credentials: `demo` / `demo123`
- Check if cookies are enabled

### Data Not Saving?
- Check browser's LocalStorage is enabled
- Don't use private/incognito mode
- Refresh page after making changes

### Images Not Loading?
- Update image URLs in admin panel
- Use absolute URLs starting with https://
- Check image file names in paths

## 📚 File Structure

```
├── HTML Files (pages)
│   ├── index.html (Home)
│   ├── shop.html (Shop)
│   ├── blog.html (Blog)
│   ├── profile.html (Profile)
│   ├── settings.html (Settings)
│   ├── login.html (Login)
│   ├── checkout.html (Checkout)
│   ├── payment.html (Payment)
│   └── admin.html (Admin)
│
├── CSS Files
│   ├── styles.css (Main styles)
│   └── admin-styles.css (Admin styles)
│
├── JavaScript Files
│   ├── main.js (Global functions)
│   ├── home.js (Home page)
│   ├── shop.js (Shop page)
│   ├── blog.js (Blog page)
│   ├── checkout.js (Checkout)
│   ├── payment.js (Payment)
│   ├── profile.js (Profile)
│   ├── settings.js (Settings)
│   ├── login.js (Login)
│   └── admin.js (Admin)
│
└── Data & Documentation
    ├── sample-data.json (Demo data)
    ├── README.md (This file)
    └── DOCUMENTATION.md (Full documentation)
```

## ✨ Features Checklist

- ✅ User Authentication
- ✅ Product Catalog
- ✅ Product Filtering
- ✅ Shopping Cart
- ✅ Favorites/Wishlist
- ✅ Checkout Process
- ✅ Payment Page
- ✅ Blog Posts
- ✅ Video Embedding
- ✅ Advertisements
- ✅ User Profile
- ✅ Settings
- ✅ Admin Dashboard
- ✅ Product Management
- ✅ Blog Management
- ✅ Ad Management
- ✅ Video Management
- ✅ Newsletter Signup
- ✅ Responsive Design
- ✅ Mobile Friendly

## 🎓 Learning Resources

This project demonstrates:
- HTML5 semantic markup
- CSS3 styling and responsive design
- Vanilla JavaScript (no frameworks)
- LocalStorage API
- DOM manipulation
- Event handling
- Form validation
- Modal dialogs
- Dropdown menus
- Data management

---

**Happy Shopping with Urban Roots! 🌿**
