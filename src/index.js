import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllMoviesStore from "./Context/AllMoviesStore";

ReactDOM.render(
    <React.StrictMode>
        <AllMoviesStore>
            <App/>
        </AllMoviesStore>
    </React.StrictMode>,
    document.getElementById('root')
);

