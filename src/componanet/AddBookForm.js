import React, { Component } from 'react'


 class AddBookForm extends Component {

   
    render() {
        return (
            <div>
                
                <form onSubmit={this.props.addBookData}>
                    <input type="text" name='title' placeholder='Book title' />
                    <input type="text" name='description' placeholder='Book description' />
                    <input type="text" name='statues' placeholder='Book status' />

                    <input type="submit" value="Add Book" /> 
                    </form>
            </div>
        )
    }
}

export default AddBookForm;
