import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();
    return (
        <form>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" />
            </div>

            <div>
                <button onClick={() => navigate('/dashboard')}>Submit</button>
            </div>
        </form>
    )
}
export default LoginForm;