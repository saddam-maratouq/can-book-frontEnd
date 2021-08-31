import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios'
import BookDeatls from './componanet/BookDeatls'
import  {withAuth0}  from '@auth0/auth0-react';

import AddBookForm from './componanet/AddBookForm'

class MyFavoriteBooks extends React.Component {
  
  constructor(props) {
    super(props) 
    this.state = {

      bookData : [] 
    }


  }
  
  //// note aregment very important dont forget  : read / creat / delete / update 

  
  
  componentDidMount= async () => { 
console.log('alive didmount');
    const {user} = this.props.auth0;

    let bookUrl = `${process.env.REACT_APP_SERVER}/books?email=${user.email}`

    let BookData = await axios.get(bookUrl) 

    console.log('data from read',BookData.data); 
    this.setState({bookData: BookData.data});

  }
////////////////////////////////////////////////////


addBook = async (e) =>  {
     
  e.preventDefault();

  const {user} = this.props.auth0;

 
 let bookDatas = {

  title : e.target.title.value,

  description : e.target.description.value,

  statues : e.target.statues.value,

   email : user.email   

  };  


  let addBookData = await axios.post(`${process.env.REACT_APP_SERVER}/AddBook`,bookDatas)


  console.log('data from add',addBookData.data);

 await  this.setState({bookData: addBookData.data}); //// to ubdate new book when I add and render again .... 

  this.componentDidMount(); //////// why ???

}

 ///////////////////////////////////////////////



DeletBook = async  (bookID) => {
  const {user} = this.props.auth0;

  let DeleteBook = await axios.delete(`${process.env.REACT_APP_SERVER}/deletBook/${bookID}?email=${user.email}`)  
  
  console.log('data from delet ',DeleteBook.data);

   await this.setState   ( {  bookData : DeleteBook.data  }) 


   this.componentDidMount();


}
 



   
          
        


  render() {
    return(
        <div>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        <AddBookForm
         addBookData={this.addBook} 
        />
       
       <BookDeatls   

        BookInfo={this.state.bookData}  

        DeletBooks = {this.DeletBook}
        
        />

     
        </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks); 
