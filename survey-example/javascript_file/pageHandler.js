function subPageOpener (){
    location.href="submit.html"
}
function mainPageOpener () {
    location.href="index.html"
}
function reviewPageOpener() {
    let check_counter = 0;
    let check_point = 0;
    let elements = document.getElementsByClassName('rdb-1')
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            check_counter++;
            check_point+=0;
        }        
    }
    elements = document.getElementsByClassName('rdb-2')
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            check_counter++;
            check_point+=1;
        }        
    }
    elements = document.getElementsByClassName('rdb-3')
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            check_counter++;
            check_point+=2;
        }        
    }
    elements = document.getElementsByClassName('rdb-4')
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            check_counter++;
            check_point+=3;
        }        
    }
    elements = document.getElementsByClassName('rdb-5')
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            check_counter++;
            check_point+=4;
        }        
    }
    if (check_counter != 12) {
        alert('checking list')
        return
    }
    if (check_point <= 15) {
        location.href="result.html"
    } else if (check_point <= 32 && check_point >= 16) {
        location.href="result_2.html"
    } else if (check_point >= 33) {
        location.href="result_3.html"
    }
}
