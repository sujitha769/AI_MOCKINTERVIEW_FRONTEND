import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

function RegisterPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
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

            const response = await registerUser(formData);

            alert(response);

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-96"
            >

                <h2 className="text-3xl font-bold mb-6 text-center">
                    Register
                </h2>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border p-3 rounded mb-4"
                    required
                />

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
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded"
                >
                    Register
                </button>

            </form>

        </div>

    );

}

export default RegisterPage;