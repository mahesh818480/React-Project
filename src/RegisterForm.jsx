import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        password: '',
        cnfPass: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        setErrorMessage(false)
    }, [])

    const handleInput = (event) => {
        event.preventDefault();
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const submitFormData = (event) => {
        event.preventDefault();
        if (FormValidations()) {
            setErrorMessage(false);
            navigate('/login');
        } else {
            setErrorMessage(true);
        }

    };

    const FormValidations = () => {
        event.preventDefault();
        const validate = formData.fname !== '' &&
            formData.email !== '' &&
            formData.password !== '' &&
            formData.cnfPass !== '' &&
            formData.password === formData.cnfPass
        return validate;
    }
    return (
        <form action="">
            <div>
                <label htmlFor="">FirstName</label>
                <input type="text" name="fname" value={formData.fname} onChange={handleInput} />
                <p>{errorMessage && formData.fname === '' ? <span className="errorMessage">This form is required</span> : ''}</p>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleInput} />
                <p>{errorMessage && formData.email === '' ? <span className="errorMessage">This form is required</span> : ''}</p>
            </div>
            <div>
                <label htmlFor="">PassCode</label>
                <input type="text" name="password" value={formData.password} onChange={handleInput} />
                <p>{errorMessage && formData.password === '' ? <span className="errorMessage">This form is Required </span> : ''}</p>
            </div>
            <div>
                <label htmlFor="">Confirm Password</label>
                <input type="text" name="cnfPass" value={formData.cnfPass} onChange={handleInput} disabled={!formData.password} />
                <p>{errorMessage && formData.password !== formData.cnfPass ? <span className="errorMessage">Password is not Matched</span> : ''}</p>
                <p>{errorMessage && formData.cnfPass === '' ? <span className="errorMessage">This form is Required</span> : ''}</p>
            </div>
            <div>
                <button onClick={submitFormData}>Submit</button>
            </div>
        </form>

    )
}
export default RegisterForm;