class Note {
  constructor(title) {
    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    
    return newNote;
  }
  
  add(note){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").innerHTML +=
      '<div class="card">' +
        `<p>${note}</p>` +
        '<a href="#" class="card-remove">Remove</a>' +
      '</div>'
    ;
  }
  
  saveToStorage(noteText){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    let arrLocalstorage = [];
    let storageCount = localStorage.length;
    if (storageCount > 0) {
      arrLocalstorage = JSON.parse(localStorage.getItem("node"));

      let arrCount = arrLocalstorage.length;
      arrLocalstorage[arrCount] = noteText;
    } else {
      arrLocalstorage[0] = noteText;
    }

    localStorage.setItem("node", JSON.stringify(arrLocalstorage));
    //console.log(arrLocalstorage);
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    /*let arrLocalstorage = [];
    let i = 0;
    
    arrLocalstorage.forEach(function(text) {
      i++;
      arrLocalstorage[i] = localStorage.getItem(`node${text}`);
      console.log(...arrLocalstorage);
    });*/

    var storedValues = JSON.parse(localStorage.getItem("node"));

  }
   
  createNote(e){
    let noteText = document.querySelector("#txtAddNote").value;
    // this function should create a new note by using the Note() class
    let note = new Note("test");
    // HINT🤩
    note.add(noteText);
    note.saveToStorage(noteText);
    this.reset();
  }
  
  reset(){
    // this function should reset the form
    document.querySelector("#txtAddNote").value = "";
  }
  
}

let app = new App();