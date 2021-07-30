import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import OwnPro from './OwnPro';
import CountF from './CountF';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
/>
const Profile = () => {
    const Api = 'https://dummyapi.io/data/api';
    const id = '60ffc64a9c63d692632944bd';
    let [user, setUser] = useState([])
    useEffect(() => {
        axios.get(`${Api}/user`, { headers: { 'app-id': id } })
            .then(res => setUser(res.data.data.slice(0, 10)));
    }, [])
    // const [Freq, setFreq] = useState(0)
    function frendReq(how) {
        console.log(how);
    }
    return (

        <div className="userContainer d-flex">
            <div style={{ margin: "10px", marginTop: '50px', width: "70%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", paddingTop: '15px', paddingRight: '10px', borderRight: '1px solid gray', borderTop: '1px solid gray' }}>
                {user.map(myuser => <OwnPro FrendReq={frendReq}  title={myuser.title} email={myuser.email} key={myuser.id} fname={myuser.firstName} lname={myuser.lastName} pic={myuser.picture} user={myuser}></OwnPro>)}
            </div>
            <div className="total" style={{ marginTop: '50px', borderTop: '1px solid gray', width: '30%', borderLeft: '1px solid gray', padding: '20px' }}>
               <CountF user = {user.length} ></CountF>
            </div>
        </div>
    )
}

export default Profile

