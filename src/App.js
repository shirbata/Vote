import React from 'react';
import './style.css';
import Language from './Language';
function App() {
    return (
        <div>
            <center>
                <h1 className="title">Vote Your Language!</h1>
            </center>
            <Language language="Php" />
            <Language language="Java" />
            <Language language="Python" />
            <Language language="C" />
        </div>
    );
}
export default App;
