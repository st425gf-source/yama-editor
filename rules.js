// --- قواعد محرك ياما المحدثة ---

// 1. درس "اطبع": يدعم النصوص، الأرقام، والمتغيرات
window.اطبع = function(المحتوى) {
    const شاشة_النتائج = document.getElementById('preview-area');
    const سطر = document.createElement('div');
    سطر.style.margin = "5px 0";
    // التحقق إذا كان المحتوى نتيجه عملية أو متغير
    سطر.innerHTML = `<b>←</b> ${المحتوى}`;
    شاشة_النتائج.appendChild(سطر);
    شاشة_النتائج.scrollTop = شاشة_النتائج.scrollHeight;
};

// 2. درس "اطلب": السؤال في سطر والمدخل في سطر جديد (بدون علامات إضافية)
window.اطلب = function(النص) {
    return new Promise((resolve) => {
        const شاشة_النتائج = document.getElementById('preview-area');
        const حاوية = document.createElement('div');
        حاوية.style.margin = "10px 0";
        
        // عرض السؤال في سطر مستقل
        const سطر_السؤال = document.createElement('div');
        سطر_السؤال.innerText = النص;
        سطر_السؤال.style.fontWeight = "bold";
        
        // إنشاء سطر جديد للمدخل
        const سطر_المدخل = document.createElement('div');
        سطر_المدخل.style.marginTop = "5px";
        
        const مدخل = document.createElement('input');
        مدخل.type = "text";
        مدخل.style.width = "90%";
        مدخل.style.border = "none";
        مدخل.style.borderBottom = "2px solid gold"; // خط ذهبي تحت المدخل
        مدخل.style.background = "transparent";
        مدخل.style.outline = "none";
        مدخل.placeholder = "اكتب هنا...";

        سطر_المدخل.appendChild(مدخل);
        حاوية.appendChild(سطر_السؤال);
        حاوية.appendChild(سطر_المدخل);
        شاشة_النتائج.appendChild(حاوية);
        
        مدخل.focus();

        مدخل.onkeydown = (e) => {
            if (e.key === 'Enter') {
                const القيمة = مدخل.value;
                // بعد الإدخال، نحولها لشكل ثابت
                حاوية.innerHTML = `<div style="color:#555;">${النص}</div><div style="color:gold;"><b>></b> ${القيمة}</div>`;
                resolve(القيمة);
            }
        };
        شاشة_النتائج.scrollTop = شاشة_النتائج.scrollHeight;
    });
};
