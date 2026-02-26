// yama-engine.js - محرك ياما الأساسي
function runYama(code, outputElement, errorElement) {
    // تنظيف المخرجات السابقة
    outputElement.innerHTML = "";
    errorElement.style.display = 'none';

    // 1. تعريف دالة الطباعة لتظهر في المربع السفلي
    const اطبع = (txt) => {
        outputElement.innerHTML += `<div style="margin-bottom:5px;"><b>←</b> ${txt}</div>`;
        outputElement.scrollTop = outputElement.scrollHeight;
    };

    // 2. تعريف دالة الطلب لتظهر في المربع السفلي
    const اطلب = (msg) => {
        let res = prompt(msg);
        outputElement.innerHTML += `<div style="color:blue; margin-bottom:5px;">؟ ${msg} : ${res}</div>`;
        return res;
    };

    // 3. معالجة الكلمات المفتاحية (تحويل "متغير" إلى "var")
    // نستخدم regex لاستبدال الكلمة مع الحفاظ على المسافات
    let processedCode = code.replace(/متغير\s+/g, "var ");

    try {
        // تنفيذ الكود وتمرير الدوال له
        const execute = new Function('اطبع', 'اطلب', processedCode);
        execute(اطبع, اطلب);
    } catch (e) {
        errorElement.style.display = 'block';
        errorElement.innerText = "⚠️ خطأ في الكود: " + e.message;
    }
}
