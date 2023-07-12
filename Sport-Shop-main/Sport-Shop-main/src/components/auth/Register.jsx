import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { registerUser } from "../../features/authSlice";
import { StyledForm } from "./StyledForm";
import { useNavigate } from "react-router";
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    console.log(auth);

    useEffect(()=>{
        if(auth._id){
            navigate("/Cart");
        }
    }, [auth._id, navigate]);

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
    });

    // 
    // 
    // 
    console.log("user: ", user);
    // 
    // 
    // 
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(registerUser(user));
    }
    return (
    <>
        <StyledForm onSubmit={handleSubmit}>
            <h2>Register</h2>
            
            <input 
                type="email" 
                placeholder="email" 
                onChange={ (e) => setUser({...user, email:e.target.value})}
            />
            <input 
                type="password" 
                placeholder="password" 
                onChange={ (e) => setUser({...user, password:e.target.value})}
            />

            <input 
                type="text" 
                placeholder="name" 
                onChange={ (e) => setUser({...user, name:e.target.value})}
            />
            <button>{auth.registerStatus === "pending" ? "submitting" : "Register" }</button>
            
            {auth.registerStatus === "rejected" ? ( 
                <p>{auth.registerError}</p>
            ) : null }
        </StyledForm>
    </>
    );
};

export default Register;