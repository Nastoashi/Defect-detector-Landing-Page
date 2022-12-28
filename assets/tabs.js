const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');


tab1.onclick = function () {
    tab1.classList.add('filled');
    tab2.classList.remove('filled');
    tab3.classList.remove('filled');
}
tab2.onclick = function () {
    tab2.classList.add('filled');
    tab1.classList.remove('filled');
    tab3.classList.remove('filled');
}
tab3.onclick = function () {
    tab3.classList.add('filled');
    tab2.classList.remove('filled');
    tab1.classList.remove('filled');
}