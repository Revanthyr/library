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
const book3 = new Book("Test"," test",100000,true);
const book4 = new Book("Test","fr tedzqdzqst",100000,true);
addBooktoLibrary(book2);
addBooktoLibrary(book3);
addBooktoLibrary(book4);

let removeButtonId = 0;
let itemToRemove = {
 
};
let testcar = 5;
function showBooks(){
    
    library.map((book)=>{
        const body = document.querySelector(".book-container");
        const div= document.createElement("div");
        const docTitle =document.createElement("p");
        const docAuthor = document.createElement("p");
        const docPages = document.createElement("p");
        const docIsRead = document.createElement("button");
        const removeButton = document.createElement("button");
        body.appendChild(div);
        div.appendChild(docTitle);
        docTitle.textContent = book.title;
        div.appendChild(docAuthor);
        docAuthor.textContent=book.author;
        div.appendChild(docPages);
        docPages.textContent = book.pagesNum.toString() + " pages";
        div.appendChild(docIsRead);
        if (book.isRead ==true){
            docIsRead.textContent = "Read";
            docIsRead.classList.add("read");
        }
        else {
            docIsRead.textContent = "Not Read... Yet!";
            docIsRead.classList.add("notread");
        }
        docIsRead.addEventListener("click",()=>{
            if (docIsRead.classList.contains("read")){
                docIsRead.classList.remove("read");
                docIsRead.classList.add("notread");
                docIsRead.textContent = "Not Read... Yet!"
            }
            else if (docIsRead.classList.contains("notread")){
                docIsRead.classList.remove("notread");
                docIsRead.classList.add("read");
                docIsRead.textContent = "Read";
            }
        })
        div.appendChild(removeButton);
        div.setAttribute("bookNumber",library.indexOf(book));
        removeButton.setAttribute("bookNumber",library.indexOf(book));
        removeButton.classList.add("remove");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click",()=>{
            body.removeChild(removeButton.parentElement)
             
        })
    })
}


showBooks();


const addButton = document.querySelector(".add-btn");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click",()=>{
    dialog.close();
})
const page = document.querySelector("body");
addButton.addEventListener("click",()=>{
    dialog.showModal();
})
   




/*
addButton.addEventListener("click",()=>{
   dialog.showModal();

})
     page.addEventListener("click",()=>{
    if (dialog.getAttribute("open")==""){
        dialog.close();
    }
    //dialog.close();
})  
       if (dialog.getAttribute("open")==""){
    page.addEventListener("click",()=>{
        dialog.close();
    })
}
else {
    addButton.addEventListener("click",()=>{
        dialog.showModal()
    })
}
         


        
        
        when too many books add scrollbar
        -figure outthe colors 'gpt)
        -change the background color to an image of library?,
        -button hovercolor) 
       
       
        -add backdrop to cards
 THE DIALOG
        -add popup animation
        -add 3 input with right font and auto text and right types
        - add a checkbox thing
        -set base width)
        -add submit button and style it
        add logic behind the submit button that adds the book
        -figure oput positioning


            

*/