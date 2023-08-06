//* ====== EJERCICIO 3 ======

const familia = [
  {
    nombre: "Pedro",
    posicion: "padre",
    edad: 45,
    parientes: {
      padres: false,
      hijos: {
        cantidad: 3,
        mayores: 2,
        menores: 1,
      },
      nietos: {
        cantidad: 1,
        mayor: 0,
        menor: 1,
      },
    },
  },
  {
    nombre: "Ana",
    posicion: "madre",
    edad: 39,
    parientes: {
      padres: false,
      hijos: {
        cantidad: 3,
        mayores: 2,
        menores: 1,
      },
      nietos: {
        cantidad: 1,
        mayor: 0,
        menor: 1,
      },
    },
  },
  {
    nombre: "Juan",
    posicion: "hijo",
    edad: 24,
    parientes: {
      padre: {
        nombre: "Francisco",
        edad: 50,
      },
      madre: {
        nombre: "Ana",
        edad: 39,
      },
      hijos: false,
    },
  },
  {
    nombre: "Carla",
    posicion: "hija",
    edad: 14,
    parientes: {
      padre: {
        nombre: "Pedro",
        edad: 45,
      },
      madre: {
        nombre: "Ana",
        edad: 39,
      },
      hijos: false,
    },
  },
  {
    nombre: "Cristian",
    posicion: "hijo",
    edad: 29,
    parientes: {
      padre: {
        nombre: "Pedro",
        edad: 45,
      },
      madre: {
        nombre: "Ana",
        edad: 39,
      },
      hijos: {
        cantidad: 1,
        mayores: 0,
        menores: 1,
      },
    },
  },
];

//* Crear una funcion que reciba el arreglo familia definido aquí arriba que valide si la cantidad de hijos establecida como su distribucion entre mayores y menores es correcta.
//* En caso de no coincidir la relación de cantidad, retornar un string que diga "La cantidad de hijos establecida no es coherente"
//* En caso de no coincidir la distribución entre mayores y menores, retornar un string que diga "La distribución de hijos entre mayores y menores es incorrecta"
//* En caso de que toda la información sea coherete, retornar un true.


function validarHijosFamilia(arrfamilia) {
  let totalHijos = 0;
  let totalMayores = 0;
  let totalMenores = 0;

  arrfamilia.forEach((valor,i,arr) => {
    if (valor.parientes && valor.parientes.hijos) {
      totalHijos = totalHijos + valor.parientes.hijos.cantidad;
      totalMayores = totalMayores +  valor.parientes.hijos.mayores;
      totalMenores = totalMenores + valor.parientes.hijos.menores;
    }
  });

  if (totalHijos !== totalMayores + totalMenores) {
    return "La cantidad de hijos establecida no es coherente";
  }

  if (totalHijos !== totalMayores + totalMenores || totalHijos !== totalMayores + totalMenores) {
    return "La distribución de hijos entre mayores y menores es incorrecta";
  }

  return true;
}

const resultado = validarHijosFamilia(familia);
console.log(resultado);
