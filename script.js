document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('registerName').value;
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById('registerPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        let user = userCredential.user;
        
        // Kirim email verifikasi
        user.sendEmailVerification().then(() => {
            alert("Email verifikasi telah dikirim. Silakan cek email Anda.");
            window.location.href = "verify.html";
        });

    })
    .catch((error) => {
        alert(error.message);
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        let user = userCredential.user;

        if (user.emailVerified) {
            alert("Login berhasil! Selamat datang.");
            window.location.href = "index.html";
        } else {
            alert("Silakan verifikasi email Anda terlebih dahulu.");
        }
    })
    .catch((error) => {
        alert(error.message);
    });
});
