let nome = prompt("Insira seu nome: ");
let altura = prompt("Insira sua altura (ex:1.90): ");
let peso = prompt("Insira seu peso: ");
let imc = peso / altura ** 2;

alert(imc)

document.getElementById("resultadoimc").textContent += imc



if (imc < 18.5) {
    
    alert("Abaixo do peso.")
    let cla = ("Abaixo do peso.")
    document.getElementById("class").textContent +=cla;

} else if (imc < 24.9) {
    
    alert("Peso normal.")
    let cla = ("Peso normal.")
    document.getElementById("class").textContent +=cla;

} else if (imc < 29.9) {
    
    alert("Excesso de peso.")
    let cla =("Excesso de peso.")
    document.getElementById("class").textContent +=cla;

} else if (imc < 34.9) {
    
    alert("Obesidade classe 1.")
    let cla =("Obesidade classe 1.")
    document.getElementById("class").textContent +=cla;

} else if (imc < 39.9) {
    
    alert("Obesidade classe 2.")
    let cla =("Obesidade classe 2")
    document.getElementById("class").textContent +=cla;

} else if (imc > 40.0) {
    
    alert("Obesidade classe 3.")
    let cla =("Obesidade classe 3.")
    document.getElementById("class").textContent +=cla;

}