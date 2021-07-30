import React from 'react'
import { useState } from 'react'
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
/>
const OwnPro = (props) => {
    // console.log(props.user);
    const [con, setCon] = useState('Connect')
    const [rem, setRem] = useState({})
    const [ConnectStyle, setConnectStyle] = useState({ marginRight: '80px' })
    const remo = { display: 'none' };
    const cStyle = {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        outline: 'none'
    }
    let [fr, setFr] = useState([]);
    function connect(user) {
        setCon("Cancel Request")
        setRem(remo)
        setConnectStyle(cStyle)
        setFr(...fr, user)
        console.log(fr.length);
    }
    const [remove, setRemove] = useState({ width: '18rem', marginBottom: '20px' })
    function remover() {
        setRemove(remo);

    }
    
    return (
        <>
            <div className="card" style={remove}>
                <img style={{ marginLeft: "90px", marginTop: '30px', marginBottom: '15px', width: '100px', height: '100px', borderRadius: '50%' }} src={props.pic} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title} {props.fname} {props.lname}</h5>
                    <p className="card-text">{props.email}</p>
                    <button className="btn btn-success" onClick={() => connect(props.user)}  style={ConnectStyle}>{con}</button>

                    <button className="btn btn-danger" onClick={remover} style={rem}>Remove</button>
                    

                </div>
            </div>
        </>
    )
}

export default OwnPro
