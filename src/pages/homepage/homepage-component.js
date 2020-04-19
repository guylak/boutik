import React from 'react';
import {Route,Link,Router} from 'react-router-dom';
import './homepage.styles.scss';
import  Directory from '../../components/directory/durectory-component'

const HomePage = (props)=>(
    <div className= 'homepage'>
        <Link to ={`${props.match.url}test`}>test</Link>
       <Directory/>
    </div>
);
export default HomePage;