import React from 'react'

class ContactInput extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name : '',
            tag:'',
        };

        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
        this.onSubmitEventhandler = this.onSubmitEventhandler.bind(this);
    }

    onNameChangeHandler(event){
        this.setState(()=>{
            return{
                name: event.target.value,
            }
        });
    }
    onTagChangeHandler(event){
        this.setState(()=>{
            return{
                tag: event.target.value,
            }
        });
    }
    onSubmitEventhandler(event){
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render(){
        return(
            <form className="contact-input" onSubmit={this.onSubmitEventhandler}>
                <input type="text" placeholder='Nama' value={this.state.name} onChange={this.onNameChangeHandler}/>
                <input type="text" placeholder='Tag' value={this.state.tag} onChange={this.onTagChangeHandler}/>
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

export default ContactInput;