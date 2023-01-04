const posiciones = document.querySelectorAll(".items");
let arr = [];
let count = 0;
const ram = () => {
    let num = Math.random()*8;
    num = Math.round(num);
    let modif = arr[num];
    if(modif.classList.value == "items noDis"){
        ram();
    }else{
        modif.innerHTML =`<img src="../imagenes/2x.png">`;
        modif.classList.add("noDis");
    }
    return modif;
}



for (const pos in posiciones) {
    arr[pos] = posiciones[pos];
}
arr.forEach(elm => {
    
    elm.addEventListener("click",function jugar(){
        count++;
        if(count<5){
            let bloq;
            console.log("hola");
            elm.innerHTML =`<img src="../imagenes/2circle.png">`;         
            console.log(elm.classList.value);
            elm.classList.add("noDis");
            elm.removeEventListener("click",jugar);
            bloq = ram();
            bloq.removeEventListener("click",jugar);
        }else{
            elm.innerHTML =`<img src="../imagenes/2circle.png">`;
            return
        }    
    })
});
