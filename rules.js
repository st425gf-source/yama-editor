// ملف قواعد محرك ياما - سلطان
window.اطبع = function(txt) {
    const area = document.getElementById('preview-area');
    if(area) {
        area.innerHTML += `<div style="padding:5px; border-bottom:1px solid #eee;"><b>←</b> ${txt}</div>`;
        area.scrollTop = area.scrollHeight;
    }
};

window.مسح = function() {
    document.getElementById('preview-area').innerHTML = "";
};

console.log("تم تفعيل القواعد السحابية بنجاح!");