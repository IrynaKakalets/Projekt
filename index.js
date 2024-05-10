

//cursor fish

var customCursor = document.createElement('img');
customCursor.src = 'https://cdn.icon-icons.com/icons2/2070/PNG/512/fish_icon_126046.png'; 
customCursor.style.position = 'fixed';
customCursor.style.width = '50px'; 
customCursor.style.height = '50px'; 
customCursor.style.pointerEvents = 'none';
customCursor.style.zIndex = '9999'; 

document.body.style.cursor = 'none';

document.body.appendChild(customCursor);

function updateCustomCursorPosition(event) {
    customCursor.style.left = (event.clientX - customCursor.offsetWidth / 2) + 'px';
    customCursor.style.top = (event.clientY - customCursor.offsetHeight / 2) + 'px';
}

document.addEventListener('mousemove', updateCustomCursorPosition);
