
function changeDirection(){
    const a = document.getElementsByClassName('parent');
    a[0].style.flexDirection = "column";
}

const abc = document.getElementsByTagName('h2');
abc[0].style.color = "red";
abc[0].setAttribute("id","heading");

function change(){
    const replace1 = document.getElementsByClassName('replace');
    replace1[0].innerText = "Welcome to Elevation Academy";
}

function clock1(){
    const date = new Date();
console.log(date);
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(hour < 10){
        hour = `0${hour}`;
    }
    if(min < 10){
        min = `0${min}`;
    }
    if(sec < 10){
        sec = `0${sec}`;
    }

    let hourslot = document.getElementsByClassName('hours');
    hourslot[0].innerHTML=`${hour}:`;

    let minslot = document.getElementsByClassName('mins');
    minslot[0].innerHTML=`${min}:`;

    let secslot = document.getElementsByClassName('secs');
    secslot[0].innerHTML=`${sec}`;
}
setInterval(()=>{
    clock1();
},1000);

function year(){
    let year12 = document.getElementsByClassName('newyear');
    let year13  = document.getElementById('year1').value;
    year12[0].innerHTML = `${year13}`;
}




