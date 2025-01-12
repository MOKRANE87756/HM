document.getElementById('userRegisterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert(`تم إنشاء حسابك بنجاح! مرحبًا ${username}`);
        this.reset(); // إعادة تعيين الحقول بعد الإرسال
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
});
