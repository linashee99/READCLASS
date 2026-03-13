function showSection(sectionId) {
    // These IDs MUST match the 'id' attributes in your HTML exactly
    const screens = [
        'welcome-screen', 
        'login-screen', 
        'register-screen', 
        'home-screen', 
        'products-screen', 
        'account-screen', 
        'story-detail-screen' // <--- Make sure this matches your HTML 100%
    ];
    
    screens.forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            el.style.display = 'none'; // This hides the screens
        }
    });

    const target = document.getElementById(sectionId);
    if (!target) {
        console.error("Screen not found: " + sectionId);
        return;
    }

    // This shows the NEW screen
    if (['welcome-screen', 'login-screen', 'register-screen'].includes(sectionId)) {
        target.style.display = 'flex';
    } else {
        target.style.display = 'block';
    }

    // Scroll back to the top so the user doesn't start halfway down the page
    window.scrollTo(0, 0);
}

    // 2. Login Logic
    function checkLogin() {
        const email = document.getElementById('userEmail').value.trim();
        const password = document.getElementById('userPassword').value;
        const errorMsg = document.getElementById('login-error');

        // Basic validation
        if (email === "" || password === "") {
            errorMsg.innerText = "Please enter email and password.";
            return;
        }

        // Check LocalStorage for registered users
        const savedEmail = localStorage.getItem('savedEmail');
        const savedPass = localStorage.getItem('savedPass');
        const savedName = localStorage.getItem('savedName');

        if (email === "linashee29@gmail.com" && password === "Lina@9999") {
            successLogin("Lina Shee");
        } else if (email === savedEmail && password === savedPass) {
            successLogin(savedName);
        } else {
            errorMsg.innerText = "Email or Password is not correct.";
        }
    }

    function successLogin(name) {
        alert("Hi " + name + "! Welcome back.");
        showSection('home-screen');
    }

    // Interactive Navbar Logic

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all
            navLinks.forEach(item => item.classList.remove('active'));
            // Add to clicked item
            this.classList.add('active');
        });
    });
        


    // 3. Register Logic
    function handleRegister() {
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const pass = document.getElementById('regPassword').value;
        const errorMsg = document.getElementById('reg-error');

        // 1. Basic validation for empty fields
        if (name === "" || email === "" || pass === "") {
            errorMsg.innerText = "Please fill all fields!";
            return;
        }

        // 2. CHECK RULE: Does this email already exist?
        const existingEmail = localStorage.getItem('savedEmail');
        const hardcodedEmail = "linashee29@gmail.com"; // From your login logic

        if (email === existingEmail || email === hardcodedEmail) {
            alert("This email is already registered! Please use a different email.");
            errorMsg.innerText = "Account already exists with this email.";
            return; // This stops the function so the new data isn't saved
        }

        // 3. Save to LocalStorage if the email is new
        localStorage.setItem('savedName', name);
        localStorage.setItem('savedEmail', email);
        localStorage.setItem('savedPass', pass);

        alert("Registration Successful!");
        showSection('home-screen')
    }
    // 4. Logout Logic
    function logout() {
        showSection('welcome-screen');
    }



    // ================================================home pagw================================================
document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm("Are you sure you want to log out?")) {
        alert("Logged out successfully!");
    }
});

// Example: Changing skin type
document.getElementById('skin-type').addEventListener('change', function(e) {
    console.log("Skin type updated to: " + e.target.value);
});

window.onload = function() {
    // 1. Grab the data we saved during login
    const savedName = localStorage.getItem('loggedInName');
    const savedEmail = localStorage.getItem('loggedInEmail');

    // 2. Update the HTML elements if the data exists
    if (savedName) {
        // Use the ID you gave to your Name span/p
        document.getElementById('display-name').innerText = savedName; 
    }
    if (savedEmail) {
        // Use the ID you gave to your Email p
        document.getElementById('display-email').innerText = savedEmail;
    }
};

// Logic to open and view a story
function openStory(storyId) {
    const titleEl = document.getElementById('story-title');
    const contentEl = document.getElementById('story-content');

    if(storyId === 'flower-queen') {
        titleEl.innerText = "The Daughter of The Flower Queen";
        contentEl.innerText = "Once upon a time, in a land filled with eternal spring, there lived a princess... [Add your full story text here]";
    }

    // Delay the page switch by 300ms so the user can see the "Zoom Out" animation finish
    setTimeout(() => {
        showSection('view-story-screen');
    }, 300);
}

function openStory(storyTitle) {
    // ១. ប្តូរអក្សរចំណងជើងក្នុងទំព័រថ្មី តាមឈ្មោះរឿងដែលយើងចុច
    document.getElementById('story-title-display').innerText = storyTitle;
    
    // ២. ប្រើ function showSection ដែលអ្នកមានស្រាប់ ដើម្បីបង្ហាញទំព័រ Detail
    showSection('story-detail-screen');
}

