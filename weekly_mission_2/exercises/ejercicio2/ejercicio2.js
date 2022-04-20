const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


   // 1 - Imprimir nombre

   console.log("Imprimiendo el nombre:")
   explorers.forEach(ele => console.log(ele.name))

   // 2 - Imprime el stack de cada explore

   console.log("Imprimiendo el stack:")
   explorers.forEach(nam => console.log((nam.name) + ": " + (nam.stack)))

   // 3 - Crea una nueva lista con las listas de stacks de cada explorer

   console.log("Crea una nueva lista con las listas de stacks de cada explorer")
   const newExplo = explorers.map( stac => console.log(stac.name + ": " + stac.stack))

   // 4 - Obtén la lista de explorers que tengan en su stack "js"

   console.log('Lista de explorers que tengan en su stack "js"')
   const newFilter = explorers.filter((ele) => ele.stack.includes('js'))
   const nomOf = newFilter
   nomOf.forEach(nom => console.log(nom.name))

 
   // 5 - Busca el primer explorer que sea de la CDMX

   console.log("Primer explorer que sea de la CDMX:")
   const cdmxExplo = explorers.find((cdmx) => cdmx.city === 'CDMX')
   console.log(cdmxExplo.name)

   // 6 - Obtén la suma de todos los exercises_completed

   console.log("Suma de todos los exercises_completed")

   const sumaOfEx = explorers.reduce((ele, ele1) => (ele.exercises_completed) + (ele1.exercises_completed), 0 )
   console.log(sumaOfEx) 

   // 7 - Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true

   console.log("Explorers tiene la propiedad exercisesFinished en frontend")
   const tiene = explorers.some((b) =>  b === false)
   console.log(tiene)

   // 8 - Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true
   console.log("Todos los explorers tienen la propiedad isFinished del onboarding como true")
   const valida = explorers.every((name) =>  name.isFinished === true)
   console.log(valida)
