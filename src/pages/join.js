import React from 'react';
import './join.css';

function JoinPage(){
    return(
        <div className="Entire">
            <p className="notmain-sub-header">喜 怒 哀 樂</p>
            <h1 className="notmain-header">희 노 애 락</h1>
            <div>
                <span className="InputIDBox-join">
                    <label className="ID"> I  D : </label>
                    <input className="IDbox" type='text' name='id'/>
                </span>
                <span>
                    <input className="check" type="submit" value="ID 중복확인"/>
                </span>
                <div className="InputPWBox-join">
                    <label className="PW-join"> PW : </label>
                    <input className="PWbox-join" type='text' name='password'/>
                </div>
                <input className="joinbutton" type="submit" value="회원가입" />
            </div>
        </div>
    );
}

export default JoinPage;