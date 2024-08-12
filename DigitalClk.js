d1=document.getElementById("btn1");
d2=document.getElementById("btn2");
d3=document.getElementById("btn3");
document.getElementById("clk");
// let box = document.querySelector('#clk');
Start=()=>{
   check=  setInterval(() => {
       clk.innerHTML=new Date().toLocaleTimeString();
   },1000);
}

day=()=>{
  check2=  setInterval(() => {
        clk.innerHTML=new Date().getDay().toLocaleString();
    },0);
}
year = () => {
    check3= setInterval(() => {
        clk.innerHTML = new Date().getFullYear();
    },0);
}
Stop=()=>{
    clearInterval(check);
    clearInterval(check2);
    clearInterval(check3);
}

let count = 1;
const change=()=>{
    if (count === 1) {
        box.classList.remove('bg1');
        box.classList.add('bg2');
        count = 2;
    } 
    else if (count === 2) {
        box.classList.remove('bg2');
        box.classList.add('bg3');
        count = 3;
    }
     else if (count === 3) {
        box.classList.remove('bg3');
        box.classList.add('bg4');
        count = 4;
    } 
    else if (count === 4) {
        box.classList.remove('bg4');
        box.classList.add('bg1');
        count = 1;
    }
}
