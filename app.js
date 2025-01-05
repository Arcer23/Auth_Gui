document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
  
    // Handle login form submission
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // Check if username and password match stored values
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
          // Redirect to dashboard
          localStorage.setItem("isAuthenticated", true);
          window.location.href = "dashboard.html";
        } else {
          alert("Invalid credentials");
        }
      });
    }
  
    // Handle signup form submission
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // Save user in localStorage (simulating a database)
        const newUser = { username, password };
        localStorage.setItem("user", JSON.stringify(newUser));
  
        alert("Signup successful! You can now login.");
        window.location.href = "index.html";
      });
    }
  
    // Handle logout from dashboard
    if (document.getElementById("logoutButton")) {
      document.getElementById("logoutButton").addEventListener("click", () => {
        localStorage.removeItem("isAuthenticated");
        window.location.href = "index.html";
      });
    }
  
    // Redirect to login if not authenticated
    if (!localStorage.getItem("isAuthenticated") && window.location.pathname === "/dashboard.html") {
      window.location.href = "index.html";
    }
  });
  