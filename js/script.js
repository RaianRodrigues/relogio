const hour= document.getElementById('hour');
const min= document.getElementById('min');
const sec= document.getElementById('sec');

const clock = setInterval(function time(){
    let dateToday= new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr<10) {
        hr= '0' + hr;
    }

    if (mn<10) {
        mn= '0' + mn;
    }

    if (s<10) {
        s= '0' + s;
    }

    hour.textContent = hr;
    min.textContent = mn;
    sec.textContent = s;
})