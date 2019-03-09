class Note {
  constructor(title) {
    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement("div");
    newNote.className = "card";
    newNote.innerHTML = 
    `<p>${title}</p>` +
    '<a href="#" class="card-remove">Remove</a>'
    ;
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    new Promise( (resolve, reject) => {
      setTimeout( () => {
        //let aCount = document.querySelectorAll('.card').length - 1;
        let a = document.getElementsByTagName("a");
        a[i].addEventListener('click', this.remove.bind(newNote));
        /* USE THIS TO PERMANENTLY DELETE VALUE FROM YOUR LOCALSTORAGE */
        a[i].addEventListener('click', this.removeFromStorage.bind(title));
        i++;
      }, 500 );
    });

    return newNote;
  }
  
  add(element){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(element);
  }
  
  saveToStorage(noteText){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    let arrLocalstorage = [];

    if (localStorage.length > 0) {
      arrLocalstorage = JSON.parse(localStorage.getItem("nodes"));

      const arrCount = arrLocalstorage.length;
      arrLocalstorage[arrCount] = noteText;
    } else {
      arrLocalstorage[0] = noteText;
    }

    localStorage.setItem("nodes", JSON.stringify(arrLocalstorage));
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note createElement
    this.className += " animated bounceOut";
    setTimeout(() => {
      this.style.display = "none";
    }, 1000);
  }

  removeFromStorage(element){
    let arrLocalstorage = JSON.parse(localStorage.getItem("nodes"));

    const index = arrLocalstorage.indexOf(this);
    arrLocalstorage.splice(index, 1);

    localStorage.setItem("nodes", JSON.stringify(arrLocalstorage));
  }
}

class App {
  constructor() {
    console.log("🎉 The Constructor! 🎉");

    // HINT🤩
    // clicking the button should work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    
    // pressing the enter key should also work
    /* START FUNCTION CREATENOTE WITH KEYDOWN FUNCTION */
    this.input = document.querySelector("#txtAddNote");
    this.input.addEventListener("keydown", e => {
      if(e.keyCode === 13){
        this.createNote();
      }
    });

    /* START FUNCTION CREATENOTE WHEN FORM IS SUBMITTED */
    /*this.formSend = document.querySelector("form");
    this.formSend.addEventListener("submit", this.createNote.bind(this));*/
    console.log(this);
    if (localStorage.length > 0) {
      this.loadNotesFromStorage();
    }
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    let storedValues = JSON.parse(localStorage.getItem("nodes"));
    
    if (storedValues.length > 0) {
      storedValues.forEach(notes => {
        let note = new Note(notes);
        note.add(note.element);
      });
    }
  }

  createNote(){
    let noteText = document.querySelector("#txtAddNote").value;
    // this function should create a new note by using the Note() class
    let note = new Note(noteText);
    // HINT🤩
    note.add(note.element);
    note.saveToStorage(noteText);
    this.reset();
  }
  
  reset(){
    // this function should reset the form
    document.querySelector("#txtAddNote").value = "";
  }
  
}

let i = 0;
let app = new App();