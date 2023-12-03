import { useEffect, useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import Verification from './Verification';


function Login() {
    const [UserInputs, SetUserInputs] = useState('');
    const [GetUser, setGetUser] = useState(null);
    let UserInput = (event) => {
        SetUserInputs(event.target.value)
    }
    useEffect(() => {
        var GetUser = localStorage.getItem("RegisterUser") ? JSON.parse(localStorage.getItem("RegisterUser")) : [];
        setGetUser(GetUser)
    }, [])
    let Login = () => {
        if (UserInputs.length === 10) {
            let GetNumber = GetUser.find((item) => {
                return item.Number === UserInputs
            })
            if (GetNumber) {
                let GenrateOTP = Math.floor(Math.random() * 10000000).toString().slice(0, 6);
                localStorage.setItem("OTP", JSON.stringify(`${GenrateOTP}`))
                alert(`Your Coolpoint OTP is : ${GenrateOTP}`)
            }
            else {
                alert("Invalid user , User Not found !!")
            }
        } else {
            alert("Invalid Mobile Number Should have 10 digit !!")
        }
    }
    return (
        <>
            <div className="LoginContainer">
                <div className="LoginHeaderContainer">
                    <h1>Login</h1>
                </div>
                <div className="LoginInputContainer">
                    <div className='InputSection'>
                        <Input Types="number" value={UserInputs} placeholder={"Enter Mobile Number"} handleChange={UserInput} />
                    </div>
                    <div className='ButtonSection'>
                        <Button Text="Next" Click={Login} backgroundColor="orange" color="White" fontSize="1rem" padding="1rem 2rem " borderRadius=".5rem" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
