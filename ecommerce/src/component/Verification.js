import React, { useEffect, useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

export default function Verification(props) {
    const [Otp ,setOtp] =useState(null);
    const [UserInputs ,setUserInputs] = useState('');
    useEffect(()=>{
    let OTP =localStorage.getItem("OTP") ? JSON.parse(localStorage.getItem("OTP")):[];
    setOtp(OTP)
    },[])
    let UserInput=(event)=>{
     setUserInputs(event.target.value)
    }
    
    const navigate =useNavigate();

    let VerificationUser =()=>{
      if(UserInputs ===Otp){
        alert("match Otp")
        navigate("/productList")
        setUserInputs('')
        
        localStorage.removeItem("OTP")
      }
       else{
        alert("don't match")
       }
    }
    return (
        <>
            <div className="VerificationContainer">
                <div className="VerificationSection">
                    <div className="VerficationHeaderSection">
                        <h1>Verification User</h1>
                        <div className="VerificationInputSection">
                            <div className='InputSection'>
                         <Input Types="number" value={UserInputs} id="UserName" placeholder={"Enter OTP"} handleChange={UserInput} />
                            </div>
                            <div className='ButtonSection'>
                            <Button Text="Login" Click={VerificationUser} backgroundColor="orange" color="White" fontSize="1rem" padding="1rem 2rem " borderRadius=".5rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
