import React   from 'react' 

import Card from 'react-bootstrap/Card'; 

 class BookDeatls extends React.Component {
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
