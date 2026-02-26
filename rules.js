// --- محرك ياما المطور (إدخال داخل الشاشة) ---
async function executeYama(code) {
    const out = document.getElementById('preview-area');
    const err = document.getElementById('error-log');
    out.innerHTML = ""; 
    err.style.display = 'none';

    // 1. دالة اطبع
    const اطبع = (txt) => {
        out.innerHTML += `<div style="margin-bottom:5px;"><b>←</b> ${txt}</div>`;
        out.scrollTop = out.scrollHeight;
    };

    // 2. دالة اطلب (تظهر داخل الشاشة وتنتظر الإدخال)
    const اطلب = (msg) => {
        return new Promise((resolve) => {
            // إضافة نص السؤال
            const container = document.createElement('div');
            container.style.margin = "10px 0";
            container.innerHTML = `<span style="color:blue; font-weight:bold;">؟ ${msg}</span><br>`;
            
            // إنشاء خانة الإدخال
            const inputField = document.createElement('input');
            inputField.type = "text";
            inputField.style.width = "80%";
            inputField.style.border = "none";
            inputField.style.borderBottom = "2px solid blue";
            inputField.style.outline = "none";
            inputField.style.padding = "5px";
            inputField.placeholder = "اكتب هنا واضغط Enter...";

            container.appendChild(inputField);
            out.appendChild(container);
            inputField.focus();

            // عند الضغط على Enter
            inputField.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const value = inputField.value;
                    // تحويل المدخل لنص ثابت بعد الإدخال
                    container.innerHTML = `<span style="color:blue;">؟ ${msg}</span> : <b>${value}</b>`;
                    resolve(value);
                }
            });
            out.scrollTop = out.scrollHeight;
        });
    };

    // 3. المترجم
    let translatedCode = code.replace(/متغير\s+/g, "var ");
    
    // إضافة "await" قبل كل "اطلب" لكي ينتظر البرنامج المستخدم
    translatedCode = translatedCode.replace(/اطلب/g, "await اطلب");

    try {
        // تنفيذ كود "Async" ليدعم الانتظار
        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
        const runner = new AsyncFunction('اطبع', 'اطلب', translatedCode);
        await runner(اطبع, اطلب);
    } catch (e) {
        err.style.display = 'block';
        err.innerText = "⚠️ خطأ: " + e.message;
    }
}
