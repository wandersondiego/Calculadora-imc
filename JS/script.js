const botao = document.querySelector('#botao')
var numero = document.querySelector('#numero')
var texto = document.querySelector('#texto')

botao.addEventListener("click",clicou)

function clicou(){
    const nome = document.querySelector('#nome').value;

    var pesoDoUsuario = document.querySelector('#peso').value;
    
    var alturaDoUsuario = document.querySelector('#altura').value
    
    var altura = parseFloat(alturaDoUsuario.replace(",","."));
    var peso = parseFloat(pesoDoUsuario.replace(",","."));

    const imc = peso/(altura*altura)
    
    numero.textContent = imc.toFixed(2)

    if(imc < 16){
        texto.textContent = (nome + 'De acordo com o seu IMC, você está no estado de magreza gráve;')
        numero.style.color = 'yellow'
    } else {
        if(imc >= 16 && imc <= 16.90) {
            texto.textContent = (nome + "De acordo com o seu IMC, você está no estado de magreza moderada;")
            numero.style.color = 'yellow'
        }else{
            if(imc > 16.90 && imc <= 18.5){
                texto.textContent = (nome + ", de acordo com o seu IMC, você esta no estado de magreza leve;")
                numero.style.color = 'orange'
            }else{
                if(imc > 18.5 && imc <= 24.9){
                    texto.textContent = (nome + ", de acordo com o seu IMC, você esta no Peso ideal;")
                    numero.style.color = 'green'
                }else{
                    if(imc > 24.9 && imc <= 29.9){
                        texto.textContent = (nome + ", de acordo com o seu IMC, você está acima do peso!")
                        numero.style.color = 'red'
                    }else{
                        if(imc > 29.9){
                            texto.textContent = (nome + ", de acordo com o seu IMC, você está com obesidade grau 1º;")
                            numero.style.color = 'red'
                        }
                    }
                }
            }
        }
    }
}
