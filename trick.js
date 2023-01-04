const posiciones = document.querySelectorAll(".items");
let arr = [];
for (const pos in posiciones) {
    arr[pos] = posiciones[pos];
}
arr.forEach(elm => {
    elm.addEventListener("click",function jugar(){
        console.log("hola");
        elm.innerHTML =`<img src="../imagenes/2circle.png">`;
        arr.splice(elm,1);
        elm.removeEventListener("click",jugar)
        // ram();

    })
});
