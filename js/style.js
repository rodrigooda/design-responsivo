(function () {
    var btnClose = document.getElementById('btn-close');
    var btnMenu = document.getElementById('btn-menu');
    var menu = document.getElementById('menu');
    btnClose.onclick = function () {
        menu.style.display = 'none';
    };
    btnMenu.onclick = function () {
        menu.style.display = 'block';
    };
})();