
function webModeHandler () {
    var button = document.querySelector('#mode-button');
    var root = document.querySelector('#root');
    var container = document.querySelector('#container');

    if (button.value === 'Dark') {
        root.style.backgroundColor = '#121212';
        container.style.backgroundColor = '#121212';
        container.style.color = 'rgb(250, 246, 10)';

        button.value = 'Light';

        
    } else {
        root.style.backgroundColor = 'white';
        button.value = 'Dark';
        container.style.backgroundColor = 'whitesmoke';
        container.style.color = 'black';

        root.style.backgroundColor = 'whitesmoke';

    }
}