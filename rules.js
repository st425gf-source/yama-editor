// --- محرك ياما السحابي الشامل - المبتكر سلطان ---

// 1. قاعدة الطباعة
window.اطبع = function(txt) {
    const area = document.getElementById('preview-area');
    if(area) {
        area.innerHTML += `<div style="padding:5px; border-bottom:1px solid #eee;"><b>←</b> ${txt}</div>`;
        area.scrollTop = area.scrollHeight;
    }
};

// 2. قاعدة مسح الشاشة
window.مسح = function() {
    document.getElementById('preview-area').innerHTML = "";
};

// 3. قاعدة تغيير لون الخلفية (بدون همزة)
window.لون_الخلفية = function(color) {
    document.getElementById('preview-area').style.backgroundColor = color;
};

// 4. قاعدة تغيير لون الخط
window.لون_الخط = function(color) {
    document.getElementById('preview-area').style.color = color;
};

// 5. قاعدة التنبيه
window.تنبيه = function(txt) {
    alert(txt);
};

// 6. قاعدة الوقت
window.الوقت = function() {
    const d = new Date();
    window.اطبع("الوقت الآن: " + d.toLocaleTimeString());
};

console.log("تم تفعيل القواعد بنجاح!");
