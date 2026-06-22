# Urban Roots E-Commerce Website

## 🌿 Project Overview

Urban Roots is a comprehensive e-commerce website for selling and managing indoor and outdoor plants. The project includes both a user-facing frontend and a complete admin management system with HTML, CSS, and vanilla JavaScript.

## 📋 Features

### User Features
- **Authentication System**: Login and signup with demo credentials
- **Product Catalog**: Browse and filter products by category
- **Product Details**: Detailed information including price, subscription options, ratings, and reviews
- **Shopping Features**:
  - Add to favorites/wishlist
  - View product checkouts
  - Complete payment process
- **Blog Section**: Read plant care tips and gardening guides
- **Video Content**: Embedded YouTube videos
- **Notifications**: Latest product updates
- **User Profile**: Manage personal information and purchase history
- **Settings**: Change password, notification preferences, privacy settings
- **Newsletter**: Subscribe to updates

### Admin Features
- **Dashboard**: Overview of all content
- **Product Management**: Add, edit, delete products
- **Blog Management**: Create and manage blog posts
- **Ad Management**: Add and manage advertisements
- **Video Management**: Embed and manage YouTube videos
- **Statistics**: View total products, blogs, videos, and ads

## 🎨 Branding

- **Website Name**: Urban Roots
- **Primary Color**: #006838 (Green)
- **Secondary Colors**: #55833d, #8cc342
- **Background**: #ffffff (Light)

## 📁 Project Structure

```
urban-roots-ecommerce/
├── index.html              # Home page
├── shop.html              # Shop/Products page
├── blog.html              # Blog posts page
├── profile.html           # User profile
├── settings.html          # User settings
├── login.html             # Login/Signup page
├── checkout.html          # Product checkout
├── payment.html           # Payment page
├── admin.html             # Admin dashboard
├── css/
│   ├── styles.css         # Main styles
│   └── admin-styles.css   # Admin styles
├── js/
│   ├── main.js            # Global functions
│   ├── home.js            # Home page logic
│   ├── shop.js            # Shop page logic
│   ├── blog.js            # Blog page logic
│   ├── checkout.js        # Checkout logic
│   ├── payment.js         # Payment logic
│   ├── profile.js         # Profile logic
│   ├── settings.js        # Settings logic
│   ├── login.js           # Login logic
│   └── admin.js           # Admin logic
├── data/
│   └── sample-data.json   # Sample data
└── images/                # Images folder
    ├── logo.png           # Logo
    ├── pp.png             # Profile picture
    ├── products/          # Product images
    ├── blogs/             # Blog images
    └── ads/               # Ad images
```

## 🚀 Getting Started

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required (uses localStorage)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/teammozesstudios-del/urban-roots-ecommerce.git
```

2. Open `login.html` in your web browser

3. Use demo credentials:
   - **Username**: demo
   - **Password**: demo123

### Demo Admin Credentials

- **Username**: admin
- **Password**: admin123

## 📍 Navigation

### User Navigation
- **Home** (`index.html`): Featured products, blogs, videos, and ads
- **Shop** (`shop.html`): Browse all products with filtering
- **Blog** (`blog.html`): Read all blog posts
- **Profile** (`profile.html`): Manage user information
- **Settings** (`settings.html`): Account and privacy settings
- **Checkout** (`checkout.html`): Review and purchase products
- **Payment** (`payment.html`): Process payments

### Admin Navigation
- **Dashboard** (`admin.html`): Overview and statistics
- **Manage Products**: Add, edit, delete products
- **Manage Blogs**: Create and manage blog posts
- **Manage Ads**: Create and manage advertisements
- **Manage Videos**: Add YouTube videos

## 🎯 Key Sections

### Hero Section
- Displays 5 latest blog posts in a carousel
- Click to read full blog post

### Recently Listed Products
- Shows 10 most recent products
- Each product displays:
  - Image with label
  - Heart icon to add to favorites
  - Price and subscription price
  - Rating and review count
  - Sold count
  - Description
  - Click to checkout

### Featured Blogs
- Top 10 blog posts
- Click to read full content

### Advertisement Section
- Customizable ad placement
- Admin can set image, title, description, and button

### Video Stories
- Embedded YouTube videos
- Manageable from admin panel

### Newsletter
- Email subscription form
- Connected to notification system

## 💾 Data Storage

- **Local Storage**: All data is stored in browser's localStorage
- **Demo Data**: Sample products, blogs, videos, and ads pre-loaded
- **No Database**: This is a frontend-only demo (ready for backend integration)

## 🔐 Authentication

- **Login System**: Demo users for testing
- **Session Management**: User data stored in localStorage
- **Logout**: Clear session and redirect to login

## 🛍️ Shopping Flow

1. **Browse Products**: Visit Shop page or Home page
2. **Add to Favorites**: Click heart icon (optional)
3. **View Details**: Click product card
4. **Proceed to Checkout**: Review product information
5. **Enter Shipping Info**: On payment page
6. **Choose Payment Method**: Card or Bank Transfer
7. **Complete Purchase**: Simulate payment processing

## ⚙️ Admin Panel

### Dashboard
- View total products, blogs, videos, and ads
- Quick statistics overview

### Product Management
- Add new products with:
  - Name, price, subscription price
  - Label/category
  - Rating and review count
  - Sold count
  - Product image URL
  - Description
- Edit existing products
- Delete products

### Blog Management
- Create blog posts with:
  - Title and content
  - Label/category
  - Publish date
  - Featured image
  - Excerpt and full content
- Edit and delete posts

### Ad Management
- Create advertisements with:
  - Image URL
  - Title and description
  - Button text and link
- Edit and delete ads

### Video Management
- Add YouTube videos with:
  - Title
  - YouTube embed URL
- Edit and delete videos

## 🎨 Customization

### Change Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --primary-color: #006838;
  --secondary-color-1: #55833d;
  --secondary-color-2: #8cc342;
}
```

### Add Your Logo
Replace `images/logo.png` with your own logo

### Update Profile Picture
Replace `images/pp.png` with user profile picture

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints at 768px and 480px
- Fully responsive layout
- Touch-friendly interface

## 🌐 Features by Page

### Home Page (`index.html`)
- Blog carousel (5 latest posts)
- Recently listed products (10 items)
- Featured blogs section (10 items)
- Advertisement placement
- Video stories
- Newsletter signup
- Footer with links

### Shop Page (`shop.html`)
- Product filter buttons by category
- Product grid (all items)
- Click product to go to checkout
- Dynamic filtering

### Blog Page (`blog.html`)
- All blog posts in grid layout
- Click to read full content
- Date and category display

### Profile Page (`profile.html`)
- View/edit user information
- Upload profile picture (placeholder)
- Purchase history section
- Account details

### Settings Page (`settings.html`)
- Change password
- Email notification preferences
- Privacy settings
- Account deletion option

### Login Page (`login.html`)
- Login form
- Signup modal
- Demo credentials display
- Remember me option (ready for backend)

### Checkout Page (`checkout.html`)
- Product details and image
- Price breakdown
- Order summary
- "Proceed to Payment" button

### Payment Page (`payment.html`)
- Billing information form
- Payment method selection
- Card details input (simulated)
- Order review
- Complete payment button

## 🔧 JavaScript Functions

### Global Functions (`main.js`)
- `initializeApp()`: Initialize app data
- `toggleProfileMenu()`: Toggle profile dropdown
- `toggleNotifications()`: Toggle notifications
- `toggleFavorites()`: Toggle favorites
- `addToFavorites()`: Add product to favorites
- `goToCheckout()`: Navigate to checkout
- `goToPayment()`: Navigate to payment
- `logout()`: Logout user

### Page-Specific Functions
- `loadHomePage()`: Initialize home page
- `loadShopPage()`: Initialize shop page
- `filterProducts()`: Filter products by category
- `processPayment()`: Process payment

## 📝 Notes

- **Demo Only**: This is a frontend demo without backend integration
- **localStorage**: All data persists in browser storage
- **No Real Payments**: Payment processing is simulated
- **Mock Data**: Sample products and blogs included
- **Ready for Backend**: Easy to integrate with backend API

## 🚀 Future Enhancements

- Backend API integration
- Real payment gateway (Stripe, PayPal)
- Database integration (MongoDB, PostgreSQL)
- User authentication with JWT
- Email notifications
- Shopping cart system
- Order management
- Product reviews and ratings
- Search functionality
- Social media integration
- Email marketing

## 📧 Contact

For questions or support, contact the Urban Roots team.

## 📄 License

This project is open source and available under the MIT License.

---

**Created by**: Mozes Studios
**Last Updated**: June 2024
**Version**: 1.0.0
