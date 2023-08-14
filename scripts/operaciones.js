const d = document;
const $numero1 = d.getElementById("numero1"),
  $numero2 = d.getElementById("numero2"),
  $resultados = d.getElementById("resultado"),
  $suma = d.getElementById("suma"),
  $resta = d.getElementById("resta"),
  $multiplicacion = d.getElementById("multiplicacion"),
  $division = d.getElementById("division"),
  $SumaNumeros = d.getElementById("sumaNumeros");
export function Suma(params) {
  $suma.addEventListener("click", (e) => {
    const numero1 = parseFloat($numero1.value);
    const numero2 = parseFloat($numero2.value);
    const resultado = numero1 + numero2;
    if ($numero1.value !== "" && $numero2.value !== "") {
      $resultados.textContent = `El resultado de la suma es: ${resultado}`;
    } else {
      $resultados.textContent = `Por favor, ingrese un número`;
    }
  });
}
export function Resta(params) {
  $resta.addEventListener("click", (e) => {
    const numero1 = parseFloat($numero1.value);
    const numero2 = parseFloat($numero2.value);
    const resultado = numero1 - numero2;
    if ($numero1.value !== "" && $numero2.value !== "") {
      $resultados.textContent = `El resultado de la resta es: ${resultado}`;
    } else {
      $resultados.textContent = `Por favor, ingrese un número`;
    }
  });
}
export function Multiplicacion(params) {
  $multiplicacion.addEventListener("click", (e) => {
    const numero1 = parseFloat($numero1.value);
    const numero2 = parseFloat($numero2.value);
    const resultado = numero1 * numero2;
    if ($numero1.value !== "" && $numero2.value !== "") {
      $resultados.textContent = `El resultado de la multiplicación es: ${resultado}`;
    } else {
      $resultados.textContent = `Por favor, ingrese un número`;
    }
  });
}
export function Division(params) {
  $division.addEventListener("click", (e) => {
    const numero1 = parseFloat($numero1.value);
    const numero2 = parseFloat($numero2.value);
    const resultado = numero1 / numero2;
    if ($numero1.value !== "" && $numero2.value !== "") {
      $resultados.textContent = `El resultado de la division es: ${resultado}`;
    } else {
      $resultados.textContent = `Por favor, ingrese un número`;
    }
  });
}

export function SumaPrimerosNumeros() {
  $SumaNumeros.addEventListener("click", (e) => {
    const numero1 = parseFloat($numero1.value);
    const numero2 = parseFloat($numero2.value);
    const resultado =
      (numero2 * (numero2 + 1)) / 2 - (numero1 * (numero1 - 1)) / 2;
    if ($numero1.value === "" && $numero2.value === "")
      $resultados.textContent = `Por favor, ingrese un número`;
    else if (numero1 <= 0 || numero2 <= 0)
      $resultados.textContent = `Por favor, ingrese un númer mayor a cero`;
    else if (numero1 >= numero2)
      $resultados.textContent = `Por favor, numero 2 debe ser mayor que numero 1`;
    else {
      $resultados.textContent = `la suma de los primeros n números es " ${resultado}`;
    }
  });
}
