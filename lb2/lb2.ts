//2.1
enum Category {
    BUSSINES_ANALYST,
    DEVELOPER,
    DESIGNER,
    QA,
    SCRUM_MASTER
}

function addCategory(workers: any[]){
    for (let i =0; i < workers.length; ++i) {
        workers[i]["category"] = Category[i];
    }
}


interface Worker {
    id: number,
    name: string,
    surname: string,
    available: boolean,
    salary: Category
}

function getAllworkers(): any[] {
    let workers = [
        { id: 1, name: 'Ivan',  surname: 'Ivanov',   available: true,  salary: Category.BUSSINES_ANALYST },
        { id: 2, name: 'Petro', surname: 'Petrov',   available: true,  salary: Category.DESIGNER },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.DEVELOPER },
        { id: 4, name: 'Evgen', surname: 'Zhukov',   available: true,  salary: Category.QA }
    ]
    return workers;
}

function getWorkerByID(workers: Worker[], id: number): Worker {
    let worker = workers.find(elem => elem.id == id );
    if(worker)
        return worker;
    return undefined;
}

function printWorker(worker: Worker){
    console.log(worker.name + worker.surname + ' got salary: ' + worker.salary)
}


let workers = getAllworkers();
let worker: Worker = getWorkerByID(workers, 1);
printWorker(worker)

//2.2

// interface PrizeLogger{
//     log: (message: string) => void;
// }

// function Log(message: string): void {
//     console.log(message)
// }

// let logPrize : PrizeLogger = Log;

//2.3

interface Person{
    name: string,
    email:string
}

interface Author extends Person{
    numBooksPublished: number
}

interface Librarian extends Person {
    department: string,
    assistCustomer: (custName: string) => void
}

let assistCustomer = (custName: string) => console.log("Hello " + custName)

let favoriteAuthor : Author = {numBooksPublished: 12, name: 'Oleksii', email: 'oleksii@gmail.com'}
//let favoriteLibrarian : Librarian = {name: 'Oleksii', email: 'oleksii@gmail.com', department: 'KyivDept', assistCustomer: assistCustomer}

//2.4

class UniversityLibrarian implements Librarian{
    name: string
    email:string
    department: string

    assistCustomer(custName: string): void{
        console.log(`${this.name} is assisting ${custName}`)
    }
}

let favoriteLibrarian : Librarian = new UniversityLibrarian()
favoriteLibrarian.name = 'Oleksii'
favoriteLibrarian.assistCustomer('Mariia')

//2.5

abstract class ReferenceItem{
    // title: string
    // year: number
    // constructor(newTitle: string, newYear: number){
    //     console.log('Creating a new ReferenceItem...')
    //     this.title = newTitle
    //     this.year = newYear
    // }
    static department: string = 'KyivDept'
    _publisher: string 
    constructor(public title: string, protected year: number){
        console.log('Creating a new ReferenceItem...')
    }

    printItem() : void{
        console.log(`${this.title} was published in ${this.year}. Departure: ${ReferenceItem.department}`)
    }

    get publisher() : string{
        return this._publisher.toUpperCase()
    }

    set publisher(newPublisher: string){
        this._publisher = newPublisher
    }

    abstract printCitation(): void
}

// let ref : ReferenceItem = new ReferenceItem("My own title", 2021)
// ref.printItem()
// ref.publisher = 'Oleksii'
// console.log(ref.publisher)

//2.6
class Encyclopedia extends ReferenceItem {
    public edition: number
    constructor(edition: number, title: string, year: number){
        super(title, year)
        this.edition = edition
    }

    printItem() : void {
        super.printItem()
        console.log(`Edition: ${this.edition}(${this.year})`)
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }

}

let refBook: Encyclopedia = new Encyclopedia(10032, 'Title!!!', 2021)
refBook.printItem()
refBook.printCitation()




