function resultado(){
var peso=document.getElementById("peso").value;

var text = ""
if(peso < 56.7){
    text="O seu peso equivale ao Peso Mosca!";
}else if(peso<61.2 ){
    text="O seu peso equivale ao Peso Galo!";
}else if(peso<65.8 ){
    text="O seu peso equivale ao Peso Pena!";
}else if(peso<70.3 ){
    text="O seu peso equivale ao Leve!";
}else if(peso<77.1 ){
    text="O seu peso equivale ao Peso Meio-Medio!";
}else if(peso<83.9 ){
    text="O seu peso equivale ao Peso Médio!";
}else if(peso<93.0){
    text="O seu peso equivale ao Peso Meio-Pesado!";
}else if(peso<120.2){
    text="O seu peso equivale ao Peso Pesado!";
}
document.getElementById("text_area").innerText=text
}
