import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { startInterview } from "../../services/interviewService";

function StartInterviewPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        jobRole: "",
        jobDescription: ""

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

            const response = await startInterview(formData);

            alert(response.message);

          navigate(`/dashboard/upload-resume/${response.interviewId}`);

        } catch (error) {

            alert(

                error.response?.data?.message ||
                "Unable to start interview"

            );

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-sky-50">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-[600px] border border-sky-100"
            >

                <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">

                    Start Interview

                </h2>

                <input
                    type="text"
                    name="jobRole"
                    placeholder="Job Role"
                    value={formData.jobRole}
                    onChange={handleChange}
                    className="w-full border border-sky-200 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-sky-300"
                    required
                />

                <textarea
                    name="jobDescription"
                    placeholder="Job Description"
                    value={formData.jobDescription}
                    onChange={handleChange}
                    rows="8"
                    className="w-full border border-sky-200 p-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-sky-300"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded transition-colors"
                >

                    Start Interview

                </button>

            </form>

        </div>

    );

}

export default StartInterviewPage;