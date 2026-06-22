// Settings Page Script

function loadSettingsPage() {
    // Load saved settings if any
    const settings = localStorage.getItem('userSettings');
    if (settings) {
        const parsed = JSON.parse(settings);
        document.getElementById('email-notifications').checked = parsed.emailNotifications !== false;
        document.getElementById('promotional-emails').checked = parsed.promotionalEmails !== false;
        document.getElementById('order-updates').checked = parsed.orderUpdates !== false;
        document.getElementById('profile-visibility').checked = parsed.profileVisibility !== false;
        document.getElementById('activity-visible').checked = parsed.activityVisible !== false;
    }
}

// Change password
function changePassword() {
    const current = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirm = document.getElementById('confirm-password').value;
    
    if (!current || !newPassword || !confirm) {
        showNotification('Please fill in all fields');
        return;
    }
    
    if (newPassword !== confirm) {
        showNotification('Passwords do not match');
        return;
    }
    
    if (newPassword.length < 6) {
        showNotification('Password must be at least 6 characters');
        return;
    }
    
    // In a real app, verify current password first
    if (appData.user) {
        appData.user.password = newPassword;
        localStorage.setItem('currentUser', JSON.stringify(appData.user));
        saveAppData();
        showNotification('Password changed successfully!');
        
        // Clear form
        document.getElementById('current-password').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
    }
}

// Save notification settings
function saveNotificationSettings() {
    const settings = {
        emailNotifications: document.getElementById('email-notifications').checked,
        promotionalEmails: document.getElementById('promotional-emails').checked,
        orderUpdates: document.getElementById('order-updates').checked,
        profileVisibility: document.getElementById('profile-visibility').checked,
        activityVisible: document.getElementById('activity-visible').checked
    };
    
    localStorage.setItem('userSettings', JSON.stringify(settings));
    showNotification('Settings saved successfully!');
}

// Delete account
function deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        if (confirm('This will permanently delete your account and all associated data.')) {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('urbanRootsData');
            window.location.href = 'login.html';
        }
    }
}

// Load page on ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSettingsPage);
} else {
    loadSettingsPage();
}
