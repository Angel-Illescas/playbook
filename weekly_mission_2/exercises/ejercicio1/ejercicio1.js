

const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

const issue = {
    title: "Issue 1",
    repositoryNameAssociated: "Angel",
    status: "Open",
    numberOfComments: 100,
    labels: "Bug",
    author: "Angel",
    dateCreated: "10/12/2021",
    lastUpdated: "2/04/2022",

    getTitleAndAuthor: function(){
        return `Título: ${this.title}, Autor: ${this.author}`
    }
}

console.log("Status: " + issue.status)
console.log("Título y autor del issue: " + issue.getTitleAndAuthor())
console.log(repo.getGeneralInfo())


const pullRequest = {
    title: "My objet",
    branchName: "main",
    dateCreated: "10/12/2022",
    status: "Able to merge",
    repositoryNameAssociated: "Angel-Illescas",

    getStatus: function(){
        return this.status
    }
}



console.log("Status of Pull Request: " + pullRequest.getStatus())

const twitter = {
    perfil: {
        user: "",
        userName: "",
        siguiendo: "",
        seguidores: "",
        tweets: 0,
    },
    listas:{
        listasFijadas: "",
        descubre: "",
        tusListas: ""
    },
    temas:{
        seguidos: "",
        sugeridos: "",
        noMeInteresa: ""
    },
    elementosGuardados: {
        verMasTarde: ""
    },
    momentos:{
        esperandoMomento: ""
    }
    
}

console.log(twitter)

const facebook = {
    perfil: {
        usuario: "",
        amigos: "",
        detallesPublicos: "",
    },
    inicio: {
        reel: "",
        sala: "",
        grupo: "",
        enVivo: ""
    },
    watch:{
        parati: "",
        enVivo: "",
        musica: "",
        videojuegos: ""
    },
    marketplace: ["","",""],
    notificaciones:{
        anteriores: ""
    }
}

console.log(facebook)

const uber = {
    perfil:{
        usuario: "",
        estrellas: 0,
    },
    ayuda:{
        viajes: "",
        alimentos: ""
    },
    pagos:{
        billetera: "",
        agregarMetodo: "",
        agregarFondos: ""
    },
    viajes: {
        anteriores: "",
        proximos: ""
    },
    mensajes: ""
}

console.log(uber)
