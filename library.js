class LibraryItem{
    static itemCount = 0;
    #id;
    #title;
    #isAvailable;
    #borrowedBy;

    constructor(title){
        this.#id = ++this.itemCount
        this.#title = title
        this.#isAvailable = true
        this.#borrowedBy = null
    }

    // if someone wanna borrow this item
    borrow(borrowedBy){
        if(!this.#isAvailable) console.log("Sorry, the book is reserved")
        else{
            this.#borrowedBy = borrowedBy
            this.#isAvailable = false
        }
    }

    get id(){
        return this.#id
    }

    get title(){
        return this.#title
    }

    get isAvailable(){
        return this.#isAvailable
    }

    set borrowedBy(borrowedBy){
        this.borrow(borrowedBy)
    }

    get borrowedBy(){
        return this.#borrowedBy
    }
}

// **************************************************************** //

class Book extends LibraryItem{
    #author;
    #pageCount;
    #genre;

    constructor(title, author, pageCount, genre){
        super(title)
        this.#author = author
        this.#pageCount = pageCount
        this.#genre = genre
    }

    get author(){
        return this.#author
    }

    get pageCount(){
        return this.#pageCount
    }

    get genre(){
        return this.#genre
    }

    get info(){
        return `This is ${this.title} book written by ${this.author}
         and right now it's ${this.isAvailable ? "available" : "reserved"}`
    }
}