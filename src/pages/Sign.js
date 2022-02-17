import React from 'react';
import './sign.css';
import { Link } from 'react-router-dom';

function SignPage(){
    return(
        <div className="Entire">
            <p className="notmain-sub-header">喜 怒 哀 樂</p>
            <h1 className="notmain-header">희 노 애 락</h1>
            <div className="InputIDBox">
                <label className="ID"> I  D   : </label>
                <input className="IDbox" type='text' name='id'/>
            </div>
            <div className="InputPWBox">
                <label className="PW">PW  : </label>
                <input className="PWbox" type='password' name='pw'/>
            </div>

            <input className="login-button2" type="submit" value="로그인"/>
            
            <div>
                <Link to="/join">
                    <button className="joinbutton">회원가입</button>   
                </Link>
            </div>
        </div>
    );
}

export default SignPage;