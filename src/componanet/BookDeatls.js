import React   from 'react' 

import Card from 'react-bootstrap/Card'; 

import Row from 'react-bootstrap/Row'; 


 class BookDeatls extends React.Component {

  
removeBook  =  (bookID) =>{

    console.log(bookID);
        
    this.props.DeletBooks(bookID); 
 }
   

 


    render() {
        return (
            <div>
                
            <>
            {this.props.BookInfo.map((item,idx) =>{



 
                    return (

            
                        
            
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                         
                        <Card.Text>  title : {item.title}               </Card.Text>   
                        <Card.Text>  description : {item.description}     </Card.Text>                               
                        <Card.Text>  email : {item.email}               </Card.Text>    
                        <Card.Text>  status : {item.statues}               </Card.Text>    
                        

                    {/* <button onClick={()=>{this.props.deleteCat(this.props.cat._id)}}>Delete</button> */}
                        <button onClick={() => {this.removeBook(item._id)}} >   Delete </button>       //                    

                        
                             
                         
                        </Card.Body>
                      </Card>

                    
                 
                   
                 )
                 
            } )
           
            } 

            
            </>
            </div>
        )
    }
}

export default BookDeatls;
