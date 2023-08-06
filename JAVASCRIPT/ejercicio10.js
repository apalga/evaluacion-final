//* ====== EJERCICIO 10 ======

//* Crear 2 (dos) clases con las siguientes características:

//* CLASE 1:
//* a) nombre de la clase: Persona
//* b) parámetros: un objeto con los siguientes atributos: nombre, edad, profesion
//* b) I- los valores por defecto deben ser los siguientes:
//*    nombre: 'Sin nombre'
//*    edad: null
//*    profesion: null
//* c) atributos: ninguno puede ser accesible directamente desde fuera de la clase
//* d) crear los respectivos métodos getters para todos los atributos
//* e) crear 1 método setter para poder modificar la profesión con las siguientes caracterísitcas y/o restricciones:
//* e) I- Si el valor recibido como argumento no es una cadena de texto, retornar "Parámetro inválido, por favor inserte una cadena de texto"
//* e) II- Si la persona ya contaba con una profesion asignada, retornar "Esta persona ya tiene una profesion asignada"
//* e) III- Para los restantes casos, setear la profesión.
//* f) crear 1 método llamado "quienSoy" que retorne un string diciendo "Soy NNN, tengo EEE años y mi profesión es PPP". En caso de no contar con una profesión
//* ...retornar el siguiente string "Soy NNN, tengo EEE años"
//* NNN es el nombre de la persona
//* EEE es la edad de la persona
//* PPP es la profesión de la persona

//* CLASE 2:
//* a) nombre de la clase: Alumno
//* b) debe heredar de la clase Persona
//* c) parámetros: un objeto con los siguientes atributos: nombre, edad, profesion, catedra, nivel
//* d) atributos: ninguno puede ser accesible directamente desde fuera de la clase
//* e) crear los respectivos métodos getters para todos los atributos
//* f) crear 2 métodos setters para poder modificar tanto la catedra como el nivel.
//* f) I- restricciones del método para modificar la catedra:
//*     Si el valor recibido como argumento no es una cadena de texto, retornar "Parámetro inválido, por favor inserte una cadena de texto"
//*     Debe tener una longitud mínimo de 5 caracteres, de lo contrario retornar "La catedrá a asignar debe tener al menos 5 caracteres"
//*     En caso de cumplir con lo anterior, setear la catedra
//* f) II- restricciones del método para modificar el nivel:
//*     Si el valor recibido como argumento no es un número, retornar "Parámetro inválido, por favor inserte un número"
//*     El nivel se debe encontrar en el rango de 1 a 5, caso contrario retornar "Rango inválido"
//*     En caso de cumplir con lo anterior, setear el nivel


class Persona {

    #nombre;
    #edad;
    #profesion;

    constructor(nombre = "Sin nombre", edad = null, profesion = null) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;

    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    get getNombre() {
        return this.#nombre;

    }

    set setEdad(edad) {
        this.#edad = edad;
    }

    get getEdad() {
        return this.#edad;

    }

    set setProfesion(profesion) {
        if (typeof profesion === 'string') {
            if (this.getProfesion == null) { this.#profesion = profesion }
            else {
                console.log("Esta persona ya tiene una profesion asignada")
            }

        }

        else {
            console.log("Parámetro inválido, por favor inserte una cadena de texto");
        }


    }

    get getProfesion() {
        return this.#profesion;

    }



    quienSoy() {
        if (this.getProfesion != null)
            return `Soy ${this.getNombre}, tengo ${this.getEdad} años y mi profesion es ${this.getProfesion}`;
        else
            return `Soy ${this.getNombre}, tengo ${this.getEdad} años`;
    }

}


class Alumno extends Persona {
    #catedra;
    #nivel;

    constructor(nombre, edad, profesion, catedra, nivel) {
        super(nombre, edad, profesion);
        this.#catedra = catedra;
        this.#nivel = nivel;

    }

    get getCatedra() {
        return this.#catedra;
    }

    set setCatedra(catedra) {
        if (typeof catedra === 'string') {
            if (catedra.length >= 5) {
                this.#catedra = catedra;
            }
            else {
                console.log("La catedrá a asignar debe tener al menos 5 caracteres");
            }



        }

        else {
            console.log("Parámetro inválido, por favor inserte una cadena de texto");
        }

    }

    get getNivel() {

        return this.#nivel;
    }

    set setNivel(nivel) {
        if (typeof nivel === 'number') {
            if (nivel >= 1 && nivel <= 5) {
                this.#nivel = nivel;
            }
            else {
                console.log("Rango inválido");
            }



        }

        else {
            console.log("Parámetro inválido, por favor inserte un número");
        }

    }

}

//Caso de prueba 1 : No ingresar un string para profesion.
const alumno = new Alumno("Arturo", 30, "sistemas", "Fisica", 1);
alumno.setProfesion = 1;

//Caso de prueba 2: Ingresar una profesion cuando el alumno ya tenia asignada una.
const alumno2 = new Alumno("David", 24, "electronica", "Fisica", 1);
alumno2.setProfesion = "sistemas";

//Caso de prueba 3: Ejecutar el metodo quienSoy() y retornar: "Soy NNN, tengo EEE años y mi profesión es PPP". 
console.log(alumno2.quienSoy());

//Caso de prueba 4: Ejecutar el metodo quienSoy() y retornar: "Soy NNN, tengo EEE años". 
const alumno3 = new Alumno("Ciro", 30, null,"Circuitos", 1);
console.log(alumno3.quienSoy());

//Caso de prueba 5: El valor setead en catedra no es un string
alumno.setCatedra = 1;

//Caso de prueba 6: El valor seteado en catedra tiene menos de 5 caracteres
alumno.setCatedra = "Mat";

//Caso de prueba 7: Setear la catedra
alumno.setCatedra = "Matematica";

console.log(alumno.getCatedra);

//Caso de prueba 8 : Setear un nivel con un parametro que no sea un numero
alumno2.setNivel = "abc";

//Caso de prueba 9 : Setear un nivel con un parametro que sea un numero fuera del rango 1-5
alumno2.setNivel = 6;

//Caso de prueba 10 : Setear un nivel con un parametro que sea un numero dentro del rango 1-5
alumno2.setNivel = 5;

console.log(alumno2.getNivel);
