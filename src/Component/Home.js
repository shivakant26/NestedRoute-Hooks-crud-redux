import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <div className='heading'>
                <h1>Home Component</h1>
            </div>
            
            <div className='Menus'>
                <Link to="/allpage/usestate">UseState</Link>
                <Link to="/allpage/myclassform">MyClassForm</Link>
                <Link to="/allpage/myform">MyForm</Link>
                <Link to="/allpage/redux-component">redux</Link>
            </div>
        </div>
    )
}
export default Home;