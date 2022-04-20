class repo {
    constructor(name, author, language, numberOfCommits,stars,forks,issues_open,issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open    
        this.issues_close = issues_close
        }
        getTotalIssues(){
            return this.issues_open + this.issues_close
        }
        getGeneralInfo(){
            return `This repository ${this.name} was created by ${this.author}`
        }
}

class issue {
    constructor(title, repositoryNameAssociated,status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }
    getTitleAndAuthor(){
        return `Título: ${this.title}, Autor: ${this.author}`
    }
}


class PullRequest {
    constructor(title,branchName,dateCreated,status,repositoryNameAssociated){
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    getStatus(){
        return this.status
    }
}


    







