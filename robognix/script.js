let smallCursor = document.querySelector('.smallCursor');
let largeCursor = document.querySelector('.largeCursor');

document.onmousemove = function (e) {
    smallCursor.style.left = (e.pageX - 5) + 'px';
    smallCursor.style.top = (e.pageY - 5) + 'px';

    smallCursor.style.display = 'block';

    largeCursor.style.left = (e.pageX - 22) + 'px';
    largeCursor.style.top = (e.pageY - 22) + 'px';

    largeCursor.style.display = 'block';
}

document.onmousedown = function () {
    smallCursor.style.transform = 'scale(0.5)';
    largeCursor.style.transform = 'scale(1.3)';
    largeCursor.style.borderColor = '#006eff';
}

document.onmouseup = function () {
    smallCursor.style.transform = 'scale(1)';
    largeCursor.style.transform = 'scale(1)';
    smallCursor.style.backgroundColor = '#3fc9f5';
    largeCursor.style.borderColor = '#3fc9f5';
}