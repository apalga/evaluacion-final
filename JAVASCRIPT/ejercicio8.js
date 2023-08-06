//* ====== EJERCICIO 8 ======

const personas = [
  {
    nombre: "Fernando",
    apellido: "Gutierrez",
    domicilio: {
      calle: "Av.Lopez Torres",
      nro: 832,
    },
    deportes: ["Futbol", "Running"],
    datos: {
      profesion: null,
      casado: false,
      hijos: false,
      laboral: {
        actual: "Empresa ABC",
        experiencia: [
          {
            lugar: "Empresa ABC",
            duracion: 3,
            cargo: "Gerente General",
          },
          {
            lugar: "Pepitos & Asoc",
            duracion: 2,
            cargo: "Ejecutivo de cuentas",
          },
          {
            lugar: "Empresa ZZZ",
            duracion: 5,
            cargo: "Administrativo",
          },
        ],
      },
    },
  },
  {
    nombre: "Nicolas",
    apellido: "Mendez",
    domicilio: {
      calle: "Av.Roque Perez",
      nro: 257,
    },
    deportes: null,
    datos: {
      profesion: "Analista en Ciencias de la Computación",
      casado: true,
      hijos: [
        {
          nombre: "Hernan",
          edad: 19,
        },
        {
          nombre: "Juana",
          edad: 12,
        },
      ],
      laboral: {
        actual: "Duendes S.R.L.",
        experiencia: [
          {
            lugar: "Duendes S.R.L.",
            duracion: 5,
            cargo: "Ejecutivo de ventas",
          },
          {
            lugar: "Pepitos & Asoc",
            duracion: 2,
            cargo: "Administrativo",
          },
          {
            lugar: "Panadería Masas S.R.L.",
            duracion: 6,
            cargo: "Chef",
          },
        ],
      },
    },
  },
  {
    nombre: "Fabricio",
    apellido: "Leites",
    domicilio: {
      calle: "Alvear",
      nro: 217,
    },
    deportes: ["Tennis", "Futbol"],
    datos: {
      profesion: "Analista en Ciencias de la Computación",
      casado: true,
      hijos: false,
      laboral: {
        actual: "Empresa WWW",
        experiencia: [
          {
            lugar: "Empresa WWW",
            duracion: 5,
            cargo: "Administrativo",
          },
          {
            lugar: "Empresa ABC",
            duracion: 3,
            cargo: "Gerente Comercial",
          },
          {
            lugar: "Pepitos & Asoc",
            duracion: 2,
            cargo: "Ejecutivo de cuentas",
          },
        ],
      },
    },
  },
];

//* Crear una funcion que reciba 2 (dos) parámetros: el arreglo "personas" definido aquí arriba y un string con el nombre de alguna empresa.
//* La función debe retornar lo siguiente:
//* Si la empresa no se encuentra en el listado, retornar un booleano false
//* Si existe 1 sola persona que pasó por esa empresa, retornar un string que diga "La única persona que paso por esta empresa es PPP"
//* Si existe mas de 1 persona que alguna vez trabajó o trabaja actualmente en ella, retornar un objeto con el siguiente formato:
//* {
//*   actualmente:
//*   historico:
//* }
//* donde "actualmente" es un arreglo de strings con las personas que actualmente trabajan en la empresa solicitada e "historico" es un arreglo de strings
//* con todas las personas que alguna vez trabajaron o trabajan actualmente en la empresa solicitada.


function buscarPersonasEnEmpresa(personas, empresa) {
  const personasEnEmpresa = personas.filter((persona) =>
    persona.datos.laboral.experiencia.some((exp) => exp.lugar === empresa)
  );

  const cantidadPersonasEnEmpresa = personasEnEmpresa.length;

  if (cantidadPersonasEnEmpresa === 0) {
    return false;
  } else if (cantidadPersonasEnEmpresa === 1) {
    return `La única persona que pasó por esta empresa es ${personasEnEmpresa[0].nombre} ${personasEnEmpresa[0].apellido}`;
  } else {
    const actualmente = personasEnEmpresa.filter(
      (persona) => persona.datos.laboral.actual === empresa
    );
    const historico = personasEnEmpresa.map(
      (persona) => `${persona.nombre} ${persona.apellido}`
    );

    return {
      actualmente: actualmente.map(
        (persona) => `${persona.nombre} ${persona.apellido}`
      ),
      historico,
    };
  }
}

console.log(buscarPersonasEnEmpresa(personas, "Pepitos & Asoc"));
