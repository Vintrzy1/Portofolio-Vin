// Simpan data pengguna di LocalStorage
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('registerName').value;
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById('registerPassword').value;

    let user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "login.html";
});

// Proses login pengguna
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    
    let storedUser = localStorage.getItem(email);
    
    if (storedUser) {
        let user = JSON.parse(storedUser);
        if (user.password === password) {
            alert("Login berhasil! Selamat datang, " + user.name);
            window.location.href = "index.html";
        } else {
            alert("Password salah!");
        }
    } else {
        alert("Email tidak terdaftar!");
    }
});