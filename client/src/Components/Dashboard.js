import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './styless.css';

const Dashboard = () => {

  const navigate = useNavigate();

  const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:6005/login/sucesss", { withCredentials: true });

        console.log("response",response)
    } catch (error) {
      navigate("*")
    }
}


useEffect(() => {
  getUser()
}, [])
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img
          src="/comm.jpg"
          alt="Music"
          className="responsiveee-image"
          style={{
            marginTop: "6px",
            width: "80%",
            height: "70%",
          }}
        />
      </div>
    </>
  );
}

export default Dashboard
