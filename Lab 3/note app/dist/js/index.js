'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
  function Note(title) {
    _classCallCheck(this, Note);

    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
  }

  _createClass(Note, [{
    key: 'createElement',
    value: function createElement(title) {
      var newNote = document.createElement('div');

      // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));

      return newNote;
    }
  }, {
    key: 'add',
    value: function add(note) {
      // HINT🤩
      // this function should append the note to the screen somehow
      document.querySelector(".notes").innerHTML += '<div class="card">' + ('<p>' + note + '</p>') + '<a href="#" class="card-remove">Remove</a>' + '</div>';
    }
  }, {
    key: 'saveToStorage',
    value: function saveToStorage(noteText) {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      var storageCount = localStorage.length;
      localStorage.setItem('node' + storageCount, noteText);
    }
  }, {
    key: 'remove',
    value: function remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
    }
  }]);

  return Note;
}();

var App = function () {
  function App() {
    _classCallCheck(this, App);

    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }

  _createClass(App, [{
    key: 'loadNotesFromStorage',
    value: function loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
      console.log(window.localStorage.getItem('node1'));
    }
  }, {
    key: 'createNote',
    value: function createNote(e) {
      var noteText = document.querySelector("#txtAddNote").value;
      // this function should create a new note by using the Note() class
      var note = new Note("test");
      // HINT🤩
      note.add(noteText);
      note.saveToStorage(noteText);
      this.reset();
    }
  }, {
    key: 'reset',
    value: function reset() {
      // this function should reset the form
      document.querySelector("#txtAddNote").value = "";
    }
  }]);

  return App;
}();

var app = new App();

//# sourceMappingURL=index.js.map