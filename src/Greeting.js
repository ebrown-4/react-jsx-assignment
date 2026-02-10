import React from 'react';
function Greeting() {
    const today = new Date().toLocaleDateString();
    return (
        <div>
            <h1>Hello, welcome to the React JSX assignment!</h1>
            <p style={{color: "blue", fontWeight: "bold"}}>
                Today's date is: {today} 
            </p>        
        </div>
    );
}
export default Greeting;
