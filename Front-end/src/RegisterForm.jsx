import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        password: '',
        cnfPass: ''
    });
    const [array, setArray] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        setErrorMessage(false);
    }, []);

    const handleInput = (event) => {
        event.preventDefault();
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const submitFormData = async (event) => {
        event.preventDefault();
        if (check) {
            navigate('/login');
        } else {
            if (FormValidations()) {
                const registerData = [...array, formData];
                setArray(registerData);
                setErrorMessage(false);


                try {
                    const url = "https://scaling-fortnight-ggrxvwwj9v4fq6g-5000.app.github.dev"
                    // Send form data to the backend API
                    const response = await fetch(url + '/submit-form', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData), // Send form data as JSON
                    });

                    const result = await response.json();
                    if (response.ok) {
                        alert(result.message); // Success message
                        setFormData({
                            fname: '',
                            email: '',
                            password: '',
                            cnfPass: '',
                        });
                        navigate('/login');
                    } else {
                        alert('Error submitting form');
                    }
                } catch (error) {
                    alert('Error submitting form');
                }
            } else {
                setErrorMessage(true);
            }
        }
    };


    const FormValidations = () => {
        event.preventDefault();
        const validate = formData.fname !== '' &&
            formData.email !== '' &&
            formData.password !== '' &&
            formData.cnfPass !== '' &&
            formData.password === formData.cnfPass;
        return validate;
    };

    return (
            <div className="container">
                <form action="">
                    <div>
                        <label htmlFor="">FirstName</label>
                        <input type="text" className="form-control" name="fname" value={formData.fname} onChange={handleInput} />
                        <p>{errorMessage && formData.fname === '' && !check ? <span className="errorMessage">This form is required</span> : ''}</p>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control" name="email" value={formData.email} onChange={handleInput} />
                        <p>{errorMessage && formData.email === '' && !check ? <span className="errorMessage">This form is required</span> : ''}</p>
                    </div>
                    <div>
                        <label htmlFor="">PassCode</label>
                        <input type="text" name="password" className="form-control" value={formData.password} onChange={handleInput} />
                        <p>{errorMessage && formData.password === '' && !check ? <span className="errorMessage">This form is Required </span> : ''}</p>
                    </div>
                    <div>
                        <label htmlFor="">Confirm Password</label>
                        <input type="text" name="cnfPass" className="form-control" value={formData.cnfPass} onChange={handleInput} disabled={!formData.password} />
                        <p>{errorMessage && formData.password !== formData.cnfPass ? <span className="errorMessage">Password is not Matched</span> : ''}</p>
                        <p>{errorMessage && formData.cnfPass === '' && !check ? <span className="errorMessage">This form is Required</span> : ''}</p>
                    </div>
                    <div>
                        <input type="checkbox" onChange={() => setCheck(!check)} />{!check ? 'With Validation' : 'without validation in form'}
                    </div>
                    <div>
                        <button onClick={submitFormData}>Submit</button>
                    </div>
                </form>
            </div>
    );
}
export default RegisterForm;