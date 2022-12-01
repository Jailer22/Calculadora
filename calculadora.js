    /* Variables*/
    
    const displayvalor1 = document.getElementById(valor1);
    const displayvalor2 = document.getElementById(valor2);
    const BtnNumero = documen.querySelectorAll('.num');
    const BtnOperaciones = document.querySelectorAll('.operacion');

    /*Clases */

    class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
} 

// 
var operacion = ""

switch (operacion) {
    case "Suma":
        sumar;
        break;
    case "Resta":
        restar;
        break;
    case "Multiplicación":
        multiplicar;
        break;
    case "División":
        dividir;
            break;
    default: break;
}
function calc(){
    var R;
    document.getElementById("resultado").value = R;
  }

  class display {
    integrador(displayvalor1, displayvalor2)
    this.Calculadora = new Calculadora();


  MostrarNumeros () {
    this.valor1.textContent = this.valor1;
    this.valor2.textContent = this.valor2;
  }
  
  AñadirValores{
    this.valor1 = numero;
    this.MostrarNumeros();

  }
}