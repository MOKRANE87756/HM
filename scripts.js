document.getElementById('merchantForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('merchantName').value;
    const email = document.getElementById('merchantEmail').value;
    const password = document.getElementById('merchantPassword').value;
    const storeName = document.getElementById('merchantStoreName').value;

    alert(`تم إنشاء حسابك بنجاح يا ${name}!`);
    this.reset(); // إعادة تعيين الحقول بعد الإرسال
});
