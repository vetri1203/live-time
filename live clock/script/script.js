const hourEl =  document.getElementById("hour")
const minEl =  document.getElementById("min")
const secEl =  document.getElementById("sec")
const ampmEl = document.getElementById("ampm")

function currentTime()
{
    let h = new Date().getHours()
    let mm = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"


    if(h >12)
    {
        h -= 12;
        ampm = "PM";
    }

    
    h= h<10 ?"0"+h : h
    mm= mm<10 ?"0"+mm : mm
    s= s<10 ?"0"+s : s

    hourEl.innerHTML = h;
    minEl.innerHTML = mm;
    secEl.innerHTML =s;
    ampmEl.innerHTML = ampm;

    setTimeout(() =>
    { currentTime()},1000)


    
}
currentTime()