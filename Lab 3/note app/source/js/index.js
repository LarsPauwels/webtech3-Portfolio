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

    if (localStorage.length > 0) {
      arrLocalstorage = JSON.parse(localStorage.getItem("nodes"));

      let arrCount = arrLocalstorage.length;
      arrLocalstorage[arrCount] = noteText;
    } else {
      arrLocalstorage[0] = noteText;
    }

    localStorage.setItem("nodes", JSON.stringify(arrLocalstorage));
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
    
    if (localStorage.length) {
      this.loadNotesFromStorage();
    }
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    let note = new Note("test");
    let storedValues = JSON.parse(localStorage.getItem("nodes"));
    
    storedValues.forEach(nodes => {
      note.add(nodes);
    });
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