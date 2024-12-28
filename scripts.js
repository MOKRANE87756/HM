document.addEventListener("DOMContentLoaded", function() {
    const matchSearchInput = document.getElementById("matchSearch");
    const matchesList = document.getElementById("matchesList");
    
    // فلترة المباريات بناءً على النص المدخل
    matchSearchInput.addEventListener("input", function() {
        const searchTerm = matchSearchInput.value.toLowerCase();
        const rows = matchesList.getElementsByTagName("tr");
        
        Array.from(rows).forEach(function(row) {
            const cells = row.getElementsByTagName("td");
            const matchInfo = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(" ");
            
            if (matchInfo.includes(searchTerm)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    // تفعيل وظيفة تسجيل الدخول (مجرد مثال)
    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function() {
        alert("يتم فتح نافذة تسجيل الدخول!");
        // هنا يمكنك إضافة نافذة منبثقة أو صفحة تسجيل دخول
    });
});
