const API_URL = 'http://localhost:8080/api/protein';

// Load all users on page load
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    setupFormHandlers();
});

// Load users from API
async function loadUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error loading users:', error);
        alert('Failed to load users');
    }
}

// Display users in the grid
function displayUsers(users) {
    const usersList = document.getElementById('usersList');
    
    if (users.length === 0) {
        usersList.innerHTML = '<p style="text-align: center; color: #999;">No users found. Add a user to get started!</p>';
        return;
    }
    
    usersList.innerHTML = users.map(user => `
        <div class="user-card">
            <div class="user-info">
                <h3>${user.name}</h3>
                <div class="user-details">
                    <div class="detail-item">
                        <span class="detail-label">Weight:</span>
                        <span class="detail-value">${user.weight} kg</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Height:</span>
                        <span class="detail-value">${user.height} cm</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Goal:</span>
                        <span class="detail-value">${user.goal}</span>
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
                <div class="protein-badge">
                    <div class="amount">${user.proteinRequired.toFixed(1)}g</div>
                    <div class="label">Daily Protein</div>
                </div>
                <button onclick="openEditModal(${user.id})" class="btn btn-edit">Edit</button>
            </div>
        </div>
    `).join('');
}

// Setup form handlers
function setupFormHandlers() {
    // Add user form
    document.getElementById('userForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const user = {
            name: document.getElementById('name').value,
            weight: parseFloat(document.getElementById('weight').value),
            height: parseFloat(document.getElementById('height').value),
            goal: document.getElementById('goal').value
        };
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            
            if (response.ok) {
                e.target.reset();
                loadUsers();
                alert('User added successfully!');
            }
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Failed to add user');
        }
    });
    
    // Edit user form
    document.getElementById('editForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const id = document.getElementById('editId').value;
        const user = {
            weight: parseFloat(document.getElementById('editWeight').value),
            height: parseFloat(document.getElementById('editHeight').value),
            goal: document.getElementById('editGoal').value
        };
        
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            
            if (response.ok) {
                closeModal();
                loadUsers();
                alert('User updated successfully!');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user');
        }
    });
}

// Open edit modal
async function openEditModal(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const user = await response.json();
        
        document.getElementById('editId').value = user.id;
        document.getElementById('editWeight').value = user.weight;
        document.getElementById('editHeight').value = user.height;
        document.getElementById('editGoal').value = user.goal;
        
        document.getElementById('editModal').style.display = 'block';
    } catch (error) {
        console.error('Error loading user:', error);
        alert('Failed to load user details');
    }
}

// Close modal
function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('editModal');
    if (event.target === modal) {
        closeModal();
    }
}
