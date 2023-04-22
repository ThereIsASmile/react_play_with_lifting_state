import React, { useState } from 'react';
    
const MessageForm = (props) => {
    //    getter, setter
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // stops from immediately running function
        props.onNewMessage( msg );
    };
    
    return (

            <div className='row'>
                <form onSubmit={ handleSubmit } className="col-md-4 offset-4  mt-5 pt-3 pb-3 bg-success text-white">
                <div className='form-group text-center
                '>
                    <h1>Set Message</h1>
                    <textarea 
                        rows="8"
                        cols="50"
                        placeholder="Enter your message here"
                        onChange={ (e) => setMsg(e.target.value) }
                        value={ msg }
                    ></textarea>
                    <div>
                    <input type="submit" value="Send Message" />
                    </div>
                </div>
                </form>
            </div>

    );
};
    
export default MessageForm;