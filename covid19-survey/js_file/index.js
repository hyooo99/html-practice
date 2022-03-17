function result() {
    let safe_count = 0;
    let warning_count = 0;
    let count_num = 0;


    /* first check box*/
    let elements = document.getElementsByClassName('rdb1')
    for (let i = 0; i < elements.length; i++) {
        if(elements[i].checked) {
            safe_count++;
            count_num += 0;
        }
    }
    /* second check box*/
    elements = document.getElementsByClassName('rdb2')
    for (let i = 0; i < elements.length; i++) {
        if(elements[i].checked) {
            safe_count++;
            count_num += 1;
        }
    }
    /* third check box*/
    elements = document.getElementsByClassName('rdb3')
    for (let i = 0; i < elements.length; i++) {
        if(elements[i].checked) {
            warning_count++;
            count_num += 2;
        }
    }

    /* fourth check box*/
    elements = document.getElementsByClassName('rdb4')
    for (let i = 0; i < elements.length; i++) {
        if(elements[i].checked) {
            warning_count++;
            count_num += 3;
        }
    }


    if (safe_count + warning_count != 4) {
        alert("check list");
        return
    }

    if (count_num <= 2) {
        location.href="result_1.html"
    } else if (count_num <=8 && count_num >=3) {
        location.href="result_2.html"
    } else if (count_num >=9) {
        location.href="result_3.html"
    }
}