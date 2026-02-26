// --- محرك ياما السحابي - المبتكر سلطان ---

// 1. قاعدة الطباعة
window.اطبع = function(txt) {
    const area = document.getElementById('preview-area');
    if(area) {
        area.innerHTML += `<div style="padding:5px; border-bottom:1px solid #eee; color:#333;"><b>←</b> ${txt}</div>`;
        area.scrollTop = area.scrollHeight;
    }
};

// 2. قاعدة مسح الشاشة
window.مسح = function() {
    document.getElementById('preview-area').innerHTML = "";
};

// 3. قاعدة تغيير لون الخلفية
window.لون_الخلفية = function(color) {
    document.getElementById('preview-area').style.backgroundColor = color;
};

// 4. قاعدة تغيير لون الخط
window.لون_الخط = function(color) {
    document.getElementById('preview-area').style.color = color;
};

// 5. قاعدة التنبيه المنبثق
window.تنبيه = function(txt) {
    alert("رسالة من محرك ياما: " + txt);
};

// 6. قاعدة الوقت الحالي
window.الوقت = function() {
    const d = new Date();
    window.اطبع("الوقت الآن هو: " + d.toLocaleTimeString());
};

console.log("🚀 تم تحميل جميع قواعد ياما السحابية بنجاح!");
