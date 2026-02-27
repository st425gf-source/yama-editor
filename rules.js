// دالة الطباعة (تدعم المتغيرات والنتائج مباشرة)
window.اطبع = function(المحتوى) {
    const شاشة = document.getElementById('preview-area');
    if (!شاشة) return;
    const سطر = document.createElement('div');
    سطر.style.margin = "5px 0";
    سطر.innerHTML = `<b>←</b> ${المحتوى}`;
    شاشة.appendChild(سطر);
    شاشة.scrollTop = شاشة.scrollHeight;
};

// دالة الطلب (تظهر في سطر جديد وتنتظر)
window.اطلب = function(السؤال) {
    return new Promise((resolve) => {
        const شاشة = document.getElementById('preview-area');
        const حاوية = document.createElement('div');
        حاوية.style.margin = "10px 0";
        
        const نص_السؤال = document.createElement('div');
        نص_السؤال.innerText = السؤال;
        نص_السؤال.style.fontWeight = "bold";
        
        const مدخل = document.createElement('input');
        مدخل.style.display = "block";
        مدخل.style.width = "90%";
        مدخل.style.border = "none";
        مدخل.style.borderBottom = "2px solid gold";
        مدخل.style.background = "transparent";
        مدخل.style.outline = "none";
        مدخل.style.marginTop = "5px";

        حاوية.appendChild(نص_السؤال);
        حاوية.appendChild(مدخل);
        شاشة.appendChild(حاوية);
        مدخل.focus();

        مدخل.onkeydown = (e) => {
            if (e.key === 'Enter') {
                const القيمة = مدخل.value;
                حاوية.innerHTML = `<div style="color:#555;">${السؤال}</div><div style="color:gold;"><b>></b> ${القيمة}</div>`;
                resolve(القيمة);
            }
        };
        شاشة.scrollTop = شاشة.scrollHeight;
    });
};
