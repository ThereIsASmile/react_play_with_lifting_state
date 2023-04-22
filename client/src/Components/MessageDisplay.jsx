    
const MessageDisplay = (props) => {
    return (
        <>
            <div className='row'>
                <div className='col-md-4 offset-4  mt-5 pt-3 pb-3 bg-success text-white'>
                    <div className='form-group text-center'>
                        <h1>Current Message</h1>
                        <pre>{ props.message }</pre>
                        {/* <pre></pre> is a tag used to preserve line breaks or white spaces that is included in the text. When this code is rendered in the browser, the text will be displayed exactly how the user typed it! */}
                    </div>
                </div>
            </div>
        </>
    );
};
    
export default MessageDisplay;