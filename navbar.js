 // Use JavaScript to load the navbar from navbar.html into the container.
        const navbarContainer = document.getElementById('navbar-container');

        // Fetch and insert the navbar
        fetch('common/navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
            });