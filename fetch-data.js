async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create ul element
        const userList = document.createElement('ul');

        // Loop through users and add li for each name
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear container and show error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
