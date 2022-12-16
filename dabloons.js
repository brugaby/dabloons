
const y=('Dabloons é e um rpg no qual todos sao algum tipo de animal falante, seu objetivo e explorar o mundo, então boa viagem!')
alert(y)
function mostrarnome(){
    let divnova = dabloons.createlement("div");
    let inputnome = dabloons.querySelector("#nome");
    let textonovo = dabloons.createTextNode('Olá viajante ${inputNome.value}');
    divnova.appendchild('textonovo');
    dabloons.body.appendchild('divnova');
}
let botaook= dabloons.querySelector('#botao');
botaook.onclick = mostrarnome