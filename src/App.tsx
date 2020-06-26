import React from 'react';
import './App.css';
import {brotliCompress} from "zlib";
import Message from "./messagetab";

const App = () => {
    return (
        <div className="wrapper">
            <Message message={'У меня дыра в голове '} name={'Артём'} time={'20:05'} isRead={true}/>
            <Message message={'Уже две '} name={'Артём'} time={'20:10'} isRead={true}/>
            <Message message={'Теперь в голове сквозняк'} name={'Артём'} time={'20:20'} isRead={true}/>
            <Message message={'И сразу стало всё ништяк'} name={'Артём'} time={'20:30'} isRead={false}/>
            <h1></h1>
        </div>
    );
}

export default App;

