// Profile Page Script

function loadProfilePage() {
    loadUserProfile();
    loadPurchaseHistory();
}

// Load user profile
function loadUserProfile() {
    if (appData.user) {
        document.getElementById('username').value = appData.user.username || '';
        document.getElementById('user-email').value = appData.user.email || '';
        document.getElementById('full-name').value = appData.user.fullName || '';
        document.getElementById('phone').value = appData.user.phone || '';
        document.getElementById('address').value = appData.user.address || '';
        document.getElementById('city').value = appData.user.city || '';
    }
}

// Update profile
function updateProfile() {
    if (appData.user) {
        appData.user.fullName = document.getElementById('full-name').value;
        appData.user.phone = document.getElementById('phone').value;
        appData.user.address = document.getElementById('address').value;
        appData.user.city = document.getElementById('city').value;
        
        localStorage.setItem('currentUser', JSON.stringify(appData.user));
        saveAppData();
        showNotification('Profile updated successfully!');
    }
}

// Load purchase history
function loadPurchaseHistory() {
    const history = document.getElementById('purchase-history');
    if (!history) return;
    
    // In a real app, this would load from a database
    // For now, show a placeholder
    history.innerHTML = '<p style="color: #999;">No purchases yet. Start shopping!</p>';
}

// Load page on ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProfilePage);
} else {
    loadProfilePage();
}
