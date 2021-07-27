var colors = ["black", "purple", "blue", "yellow", "red"];

for(var i = 0; i < colors.length; i++){
    console.log(colors[i])
}

for(var i = 0; i < 10; i++){
    console.log(i);

}

//Primeiro verifica se é valido e depois executa o bloco de código
var i = 0;

while (i<10){
    console.log(i);
    i++;
}

//Primeiro executa o bloco de código e depois verifica se é valido ou não
var i = 0;

do{
    console.log(i);
    i++
} while (i < 10);