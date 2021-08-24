import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios'
import BookDeatls from './componanet/BookDeatls'

class MyFavoriteBooks extends React.Component {
  
  constructor(props) {
    super(props) 
    this.state = {

      bookData : [] 
    }


  }
  
  
  componentDidMount= async () => { 

    let bookUrl = `${process.env.REACT_APP_SERVER}/books`

    let BookData = await axios.get(bookUrl) 

    console.log('ccccc',BookData.data); 
    this.setState({bookData: BookData.data});

  }

   
          

  render() {
    return(
        <div>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
       
       <BookDeatls   

        BookInfo={this.state.bookData} 
        
        />
        </div>
    )
  }
}

export default MyFavoriteBooks; 
