const text = "Ghost Text";
const h2 = document.querySelector('#ghostText');

text.split('').forEach((char , i) => {
    let span = document.createElement('span');
    span.textContent = char  === ' ' ? '\u00A0\u00A0' : char;;
    span.style.transitionDelay = `${i * 0.1}s`;
    h2.appendChild(span);
})
