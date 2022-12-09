import { fallKeyframes, option } from './swing.js';

const snowWrapper = document.querySelector('.snow-wrapper');


const createSnow = () => {
    const snowSpan = document.createElement('span');
    snowSpan.classList.add('snow');
    snowSpan.animate(fallKeyframes, option);

    const minSize = 5
    const maxSize = 10
    const snowSize = Math.random() * (maxSize - minSize) + minSize;

    snowSpan.style.width = snowSize + 'px';
    snowSpan.style.height = snowSize + 'px';

    snowSpan.style.left = Math.random() * 100 + '%';

    snowWrapper.appendChild(snowSpan);

    setTimeout(() => snowSpan.remove(), 10000);
}

setInterval(createSnow, 100);




