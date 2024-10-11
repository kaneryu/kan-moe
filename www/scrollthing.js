addEventListener('click', updateDiv);

function updateDiv() {
    var div = document.getElementById('contact');
    div.classList.toggle('visible');

    var clickhint = document.getElementById('clickhint');
    clickhint.classList.toggle('visible');
}