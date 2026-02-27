async function toggleRun() {
    const out = document.getElementById('preview-area');
    out.innerHTML = ""; 
    
    let rawCode = editor.getValue();
    
    // 1. تحويل "متغير" إلى "var"
    // 2. تحويل "اطلب" إلى "await اطلب" (هذا هو السر!)
    let translatedCode = rawCode
        .replace(/متغير\s+/g, "var ")
        .replace(/(?<!await\s)اطلب/g, "await اطلب");

    try {
        // تنفيذ الكود كدالة Async
        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
        const runner = new AsyncFunction('اطبع', 'اطلب', translatedCode);
        await runner(window.اطبع, window.اطلب);
    } catch (e) {
        console.error(e);
        document.getElementById('error-log').innerText = "⚠️ خطأ: " + e.message;
        document.getElementById('error-log').style.display = 'block';
    }
}
