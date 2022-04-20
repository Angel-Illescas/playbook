console.log("OBJETOS")

// Ejemplo 1: Crear un objeto
const myObjetc = {} // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío")
console.log(myObjetc)

// My example of "Ejemplo 1"

const myObjetEmpty = {};
console.log("Mi ejemplo de objeto vacio");
console.log(myObjetEmpty)

// Ejemplo 2: Crear un objeto con propiedades
const myObjetc2 = {
    name: "Carlo",
    age: 27
  }
  console.log("Ejemplo 2: Crear un objeto con propiedades")
  console.log(myObjetc2)

  // My examplo of "Crear un objeto con propiedades"

  const myObjetWithPropertys = {
      name: "Angel",
      age: 25,
      city: "CDMX"
  }

  console.log("Ejemplo 2: Crear un objeto con propiedades");
  console.log(myObjetWithPropertys);

  // Ejemplo 3: Objeto con diferentes propiedades

const myObject3 = {
    name: "Tulio",
    age: 2,
    nicknames: [
     "Tulipan",
      "Tulancingo",
      "Tulish"
    ],
    address: {
      zip_code: "10000",
      street: "Dr. Vertiz 11 Benito Juarez",
      city: "CDMX"
    }
  }
  console.log("Ejemplo 3: Objeto con diferentes propiedades")
  console.log(myObject3)
  console.log(myObject3.name)
  console.log(myObject3["address"])
  
  // My example of "Objeto con diferentes propiedades"

  const myObjetWithDiferentsPropertys = {
    brand: "Suzuki",
    name: "Vitara",
    features :{
        color: "Blue",
        doors: 5,
        hp: 118
    },
    motor:{
        cylinders: 4,
        valves: 16,
    }
  };

  console.log("Ejemplo 3: Objeto con diferentes propiedades")
  console.log(myObjetWithDiferentsPropertys)
  console.log(myObjetWithDiferentsPropertys.motor)
  console.log(myObjetWithDiferentsPropertys["features"])

  // Ejemplo 4: Objeto con métodos
const pet = {
    name: "Tulio",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda en español!`)
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
  pet.sayHello()

  // My examplo of "Objeto con métodos"

  const asistente = {
      name : "Alexa",
      
      help: function(){
          console.log(`${this.name}: ¿En que te puedo ayudar?`)
      }
  }

  console.log("Ejemplo 4: Objeto con métodos")
  asistente.help()

  // Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tulio")

  // My example of "Objeto con método que recibe parámetros"

  const myPoke ={
      name:  "Pikachu",
      sayHiToMyPoke: function(yourPoke){
        console.log(`${this.name} say's what's up! ${yourPoke}`)
      }
  }
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPoke.sayHiToMyPoke("Miuw")