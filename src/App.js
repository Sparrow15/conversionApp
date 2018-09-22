import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Library is a global object containing books tittles
const library = [
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marijn Haverbek',
    readingStatus: 'true',
  },
  {
    title: 'Steve: The Untold Story',
    author: 'The Hectors',
    readingStatus: 'false',
  },
  {
    title: 'Remember Scope!!',
    author: 'Me',
    readingStatus: 'true',
  },
  {
    title: 'Final Book',
    author: 'The Franklin',
    readingStatus: 'false',
  },
];

//main application entry point
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        //states
        displayValue: " ",
        statusRead: [],
        statusNotRead: [],
        titleInputValue: '',
        authorInputValue: '',
        readingStatusValue: false,
      };
    }
//Function to create books in ES6 version to avoid writing bind statements
createBook = (obj) => {
   return "'" + obj.title + "'" + ' by ' + obj.author + '.';
 };
 iterateLibrary = ()=>{
   for(let i=0;i<library.length;i++){let book =this.createBook(library[i])
     this.addToList(library[i], book)
   }
   //add set state disabled
 };
 clearButton = () => {
    this.setState({
      statusRead: [],
      statusNotRead: [],
    });
  };

 addToList =(obj, book) =>{
   if(obj.readingStatus===true || obj.readingStatus==='true'){
     let tempReadArray=this.state.statusRead;
     tempReadArray.push(book);
     this.setState({
       statusRead: tempReadArray,

     });
   }else{
     let tempUnreadArray=this.state.statusNotRead;
     tempUnreadArray.push(book);
     this.setState({statusNotRead: tempUnreadArray,
     });

   }
   //this resets form
 }

 //Render() serves the page to the web browser.
 submitForm=()=>{
   let title = this.state.titleInputValue;
       let author = this.state.authorInputValue;

       let alreadyAdded = false;

       for(let i = 0; i < library.length; i++){
         if(library[i].title === title && library[i].author === author){
           alert("Book already exist");
           let alreadyAdded=true;
         }
       }
 if(alreadyAdded===false){
   this.addBook(title, author);

 }
//reset form
 }

addBook =(title, author)=>{
  let readingStatus= this.state.readingStatusInputValue;
  //creates an object
  let newObj = {
    title : ' ',
    author :' ',
    readingStatus: ' ',

  };
     newObj.title = title;
     newObj.author = author;
     newObj.readingStatus = readingStatus;

     library.push(newObj);
     let book =this.createBook(newObj);
     this.addToList(newObj, book);
};

titleChange = e=>{
  this.setState({
    titleInputValue: e.target.value,
  });

}
authorChange = (e) => {
  e.preventDefault();
  this.setState({authorInputValue: e.target.value});
}

readingStatusChange = (e) => {
  e.preventDefault();
  this.setState({readingStatusInputValue: e.target.checked});
}


  render() {
    return (
  <div className="App">
      <div>
            <h1>JSON OBJECT PRACTICE !!!</h1>
       </div>
          <h2>Reading List</h2>
          <h3>You have read...</h3>
  <div>
          <p id="statusRead">{this.state.statusRead}</p>
  </div>
        <h3>You still have to read... </h3>
        <p id="statusNotRead">{this.state.statusNotRead}</p>
        <button onClick={this.iterateLibrary}>Status of Stored Books</button>
        <button onClick={this.clearButton}>clear</button>

        <div>
            <h4>&#123;</h4>
            <h4>title:</h4>
            <input onChange= {this.titleChange} id="title" />
            <h4>,</h4>
          </div>

          <div>
             <h4>author:</h4>
            <input onChange={this.authorChange} id="author" />
             <h4>,</h4>
          </div>

          <div>
             <h4>readingStatus:</h4>
             <input onChange={this.readingStatusChange} type="checkbox" id="readingStatus" />
             <h4>};</h4>
          </div>
          <button onClick={this.submitForm} id="addButton">Add Object</button>
  </div>

    );
  }
}

export default App;
