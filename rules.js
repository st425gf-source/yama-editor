// --- أدوات محرك ياما الأساسية فقط ---

// 1. أداة الطباعة
window.اطبع = function(نص) {
    const area = document.getElementById('preview-area');
    if (area) {
        area.innerHTML += `<div>${نص}</div>`;
        area.scrollTop = area.scrollHeight;
    }
};

// 2. أداة الطلب (الإدخال)
window.اطلب = function(سؤال) {
    return prompt(سؤال);
};

// 3. المتغيرات
// ملاحظة: المتغيرات تعمل تلقائياً في لغة المحرك بمجرد كتابة (اسم = قيمة)
