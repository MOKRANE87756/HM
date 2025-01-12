document.getElementById('userRegisterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // التأكد من أن جميع الحقول تم ملؤها
    if (username && email && password) {
        alert(`تم إنشاء حسابك بنجاح! مرحبًا ${username}`);
        this.reset(); // إعادة تعيين النموذج بعد الإرسال
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
});
