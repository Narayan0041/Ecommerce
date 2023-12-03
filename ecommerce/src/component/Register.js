import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button';

export default function Register() {
    const [Forms, setForm] = useState({
        "UserName": '',
        "Number": "",
        "Email": "",
        "Password": ""
    })
    let UserInput = (event) => {
        let { id, value } = event.target;
        setForm({ ...Forms, [id]: value })
    }
    let UserRegister = () => {
        let RegisterUserData = localStorage.getItem("RegisterUser") ? JSON.parse(localStorage.getItem("RegisterUser")) : [];
        RegisterUserData.push(Forms)
        localStorage.setItem("RegisterUser", JSON.stringify(RegisterUserData));
        alert("User Register Successfully !!")
    }
    return (
        <>
            <div className="RegisterContainer">
                <div className="RegisterSection">
                    <div className="RegisterHeaderPart">
                        <h1>Register Here !!</h1>
                    </div>
                    <div className='RegisterTextSection'>
                        <div>
                            <Input Types="text" value={Forms.UserName} id="UserName" placeholder={"Enter Your Name"} handleChange={UserInput} />
                        </div>
                        <div>
                            <Input Types="number" value={Forms.Number} id="Number" placeholder={"Enter Mobile Number"} handleChange={UserInput} />
                        </div>
                        <div>
                            <Input Types="email" value={Forms.Email} id="Email" placeholder={"Enter Email"} handleChange={UserInput} />
                        </div>
                        <div>
                            <Input Types="password" value={Forms.Password} id="Password" placeholder={"Enter Password"} handleChange={UserInput} />
                        </div>
                        <div>
                            <Button Text="Register" Click={UserRegister} backgroundColor="orange" color="White" fontSize="1rem" padding="1rem 2rem " borderRadius=".5rem" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
