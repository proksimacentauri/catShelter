import React, {Component} from 'react';

class RegistrationPage extends Component {
    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
     
        
    }
    render() {
        return (
            <div>
                <form  method='POST' action='/api/login'>     
                <div>
                 <div>  
                 <label for="email">Email</label>
                <input id="email" type="email" class="validate" name='username'/>
                 </div>   
                <div>
                <input type='password' name='password'/>
                </div>
    
                   </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default RegistrationPage;