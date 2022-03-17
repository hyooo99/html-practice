function modeHandler() {
    if (document.querySelector('#dis-btn').value === 'dark') {
        document.querySelector('#amongus').style.backgroundColor = '#121212';
        document.querySelector('#amongus').style.color = 'white';
        document.querySelector('#dis-btn').value = 'light';
        document.querySelector('#dis-btn').innerHTML = 'Light Mode';

        document.querySelector('#dis-btn').style.backgroundColor = '#121212'
        // document.querySelector('#dis-btn').color = '#007bff';
    } else {
        document.querySelector('#amongus').style.backgroundColor = 'white';
        document.querySelector('#amongus').style.color = 'black';
        document.querySelector('#dis-btn').value = 'dark';

        document.querySelector('#dis-btn').innerHTML = 'Dark Mode';
        document.querySelector('#dis-btn').style.backgroundColor = 'white';
        // document.querySelector('#dis-btn').color = '#007bff'

    }
}