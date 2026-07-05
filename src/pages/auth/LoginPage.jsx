import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

function LoginPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",
        password: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await loginUser(formData);

            localStorage.setItem("token", response.token);

            alert(response.message);

           navigate("/dashboard/mock");

        } catch (error) {

            alert(

                error.response?.data?.message ||
                "Login Failed"

            );

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-96"
            >

                <h2 className="text-3xl font-bold text-center mb-6">

                    Login

                </h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded mb-4"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border p-3 rounded mb-6"
                    autoComplete="current-password"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded"
                >

                    Login

                </button>

            </form>

        </div>

    );

}

export default LoginPage;