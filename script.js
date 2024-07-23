console.log("hey");
const library = [];

function Book(title,author,pagesNum,isRead){
    this.title = title;
    this.author = author;
    this.pagesNum = pagesNum;
    this.isRead = isRead;
}

function addBooktoLibrary(object){
     library.push(object);
}

const book1 = new Book("Cool book","cool guy",42,false);
addBooktoLibrary(book1);
console.log(library);
const book2 = new Book("Test","fr test",100000,true);
const book3 = new Book("Test","fr test",100000,true);
addBooktoLibrary(book2);
addBooktoLibrary(book3);


function showBooks(){
    
    library.map((book)=>{
        const body = document.querySelector(".book-container");
        const div= document.createElement("div");
        const docTitle =document.createElement("p");
        const docAuthor = document.createElement("p");
        const docPages = document.createElement("p");
        const docIsRead = document.createElement("p");
        body.appendChild(div);
        div.appendChild(docTitle);
        docTitle.textContent = book.title;
        div.appendChild(docAuthor);
        docAuthor.textContent=book.author;
        div.appendChild(docPages);
        docPages.textContent = book.pagesNum.toString();
        div.appendChild(docIsRead);
        docIsRead.textContent = book.isRead;
    })
}
showBooks();

const addButton = document.querySelector(".add-btn");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close-btn");
addButton.addEventListener("click",()=>{
   dialog.showModal();
})
closeButton.addEventListener("click",()=>{
    dialog.close();
})


/*
 THE PAGE
       :D -add a top bar with the title, (change font) 
       :D -crazete three flex divs for page layout (or two), change that in the js file for the body.appendCHild
        
      :D  -cneter the add book byutton
       :D - and make it look good (font,border,backgroundcolor,
       :D -add a class to the book container
        - use css to style whats inside the book container (font,grid layout)

    book container:
         :D grid layout
         -add gap between cardfs
         -add backdrop to cards
         -change the font of text and align it center in cards
         - add read and remove buttons
         -


        
        - add padding to the sides (vw)
        when too many books add scrollbar
        -figure outthe colors 'gpt)
        -change the background color to an image of library?,
        -button hovercolor) 
        add remove button
        add read / not read button
 THE DIALOG
        -add popup animation
        -add 3 input with right font and auto text and right types
        - add a checkbox thing
        -set base width)
        -add submit button and style it
        add logic behind the submit button that adds the book
        -figure oput positioning


 

*/