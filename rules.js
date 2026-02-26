// القواعد الأساسية للمحرك - يتم إضافتها في ملف الجافا سكريبت
(function() {
    // 1. تعريف دالة الطباعة لتظهر في المربع الأبيض (النتيجة)
    window.اطبع = function(txt) {
        const area = document.getElementById('preview-area');
        if (area) {
            area.innerHTML += `<div style="margin-bottom:5px;"><b>←</b> ${txt}</div>`;
            area.scrollTop = area.scrollHeight;
        }
    };

    // 2. تعريف دالة الطلب لتظهر في المربع الأبيض وتأخذ مدخلات
    window.اطلب = function(message) {
        const area = document.getElementById('preview-area');
        let val = prompt(message);
        if (area) {
            area.innerHTML += `<div style="color: blue; margin-bottom:5px;">؟ ${message} : ${val}</div>`;
        }
        return val;
    };

    // 3. دعم تعريف المتغيرات بالعربي (متغير)
    // ملاحظة: لكي تعمل كلمة "متغير" يجب معالجتها في دالة التشغيل (Run) كما يلي:
})();
