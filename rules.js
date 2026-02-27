// --- قواعد محرك ياما (قواعد الدروس: اطبع، اطلب، متغير) ---

// 1. درس "اطبع": لعرض المخرجات في الشاشة البيضاء
window.اطبع = function(النص) {
    const شاشة_النتائج = document.getElementById('preview-area');
    const سطر = document.createElement('div');
    سطر.style.padding = "2px 0";
    سطر.innerHTML = `<b>←</b> ${النص}`;
    شاشة_النتائج.appendChild(سطر);
    شاشة_النتائج.scrollTop = شاشة_النتائج.scrollHeight;
};

// 2. درس "اطلب": لطلب مدخلات من المستخدم داخل الشاشة نفسها
window.اطلب = function(السؤال) {
    return new Promise((resolve) => {
        const شاشة_النتائج = document.getElementById('preview-area');
        const حاوية = document.createElement('div');
        حاوية.style.margin = "8px 0";
        حاوية.innerHTML = `<span style="color:#007bff; font-weight:bold;">؟ ${السؤال}</span> `;
        
        const مدخل = document.createElement('input');
        مدخل.type = "text";
        مدخل.className = "yama-input-style"; // يمكنك تنسيقها في CSS
        مدخل.style.border = "none";
        مدخل.style.borderBottom = "2px solid #007bff";
        مدخل.style.outline = "none";
        مدخل.style.padding = "2px 5px";
        
        حاوية.appendChild(مدخل);
        شاشة_النتائج.appendChild(حاوية);
        مدخل.focus();

        // الانتظار حتى يضغط المستخدم Enter
        مدخل.onkeydown = (e) => {
            if (e.key === 'Enter') {
                const القيمة = مدخل.value;
                حاوية.innerHTML = `<span style="color:#007bff;">؟ ${السؤال}</span> : <b>${القيمة}</b>`;
                resolve(القيمة);
            }
        };
        شاشة_النتائج.scrollTop = شاشة_النتائج.scrollHeight;
    });
};

// 3. درس "المتغير": يتم معالجته في دالة التشغيل الرئيسية
