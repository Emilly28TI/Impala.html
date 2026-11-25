//====duas formas de variáveis====//
//let variavel1= 0 // //---recebe várias variações durante o código---//
//const variavel2 = "nome" // //---não recebe várias variações---//

//====outras estruturas de códigos:====//

console.log("Essa é uma mensagem de console.")// //---imprime algo que você tenha no código---//

function calcularidade(){
    let idade = document.getElementByid("idade").value

    if(idade>= 18){
        console.log("Sua idade é:" + idade)
        console.log("maior de idade")
    } else {
        console.log("Sua idade é:"+idade)
        cpnsole.log("menor de idade")
    }
}
