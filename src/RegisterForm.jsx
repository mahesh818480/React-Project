import React ,{ useState } from "react"
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname:'',
        email:'',
        password:'',
        cnfPass:''
    });
    const handleInput = (event) =>{
        event.preventDefault();
        setFormData({...formData, [event.target.name]: event.target.value})
        console.log(event.target.value,'123:::')
    }

    return (
        <form action="">
            <div>
                <label htmlFor="">FirstName</label>
                <input type="text" name="fname" value={formData.fname} onChange={handleInput} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleInput} />
            </div>
            <div>
                <label htmlFor="">PassCode</label>
                <input type="text" name="password" value={formData.password} onChange={handleInput} />
            </div>
            <div>
                <label htmlFor="">Confirm Password</label>
                <input type="text" name="cnfPass" value={formData.cnfPass} onChange={handleInput} />
            </div>
            <div>
                <button onClick={() => { navigate('/login') }}>Submit</button>
            </div>
        </form>
    )
}
export default RegisterForm;