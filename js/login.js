// Login Page Script

// Sample users for demo
const demoUsers = [
    { username: 'demo', password: 'demo123', email: 'demo@urbanroots.com', fullName: 'Demo User' },
    { username: 'admin', password: 'admin123', email: 'admin@urbanroots.com', fullName: 'Admin User' }
];

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check against demo users
    const user = demoUsers.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Store user data
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Show success message
        alert('Login successful! Welcome ' + user.fullName);
        
        // Redirect to home
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.\n\nDemo credentials:\nUsername: demo\nPassword: demo123');
    }
}

// Show Signup Modal
function showSignup() {
    document.getElementById('signup-modal').classList.add('active');
}

// Close Signup Modal
function closeSignup() {
    document.getElementById('signup-modal').classList.remove('active');
}

// Handle Signup
function handleSignup(event) {
    event.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    // Validation
    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Check if user exists
    if (demoUsers.find(u => u.username === username)) {
        alert('Username already exists');
        return;
    }
    
    // Create new user
    const newUser = {
        username: username,
        email: email,
        password: password,
        fullName: username
    };
    
    // Add to demo users (in a real app, this would be sent to server)
    demoUsers.push(newUser);
    
    // Store user data
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    alert('Account created successfully!');
    closeSignup();
    
    // Redirect to home
    window.location.href = 'index.html';
}

// Close modal on outside click
window.addEventListener('click', function(event) {
    const modal = document.getElementById('signup-modal');
    if (event.target === modal) {
        closeSignup();
    }
});

// Check if already logged in
window.addEventListener('load', function() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        window.location.href = 'index.html';
    }
});
