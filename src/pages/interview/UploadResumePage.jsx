import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { uploadResume } from "../../services/interviewService";

function UploadResumePage() {

    const { interviewId } = useParams();

    const navigate = useNavigate();

    const [resume, setResume] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!resume) {

            alert("Please select a resume.");

            return;

        }

        try {

            const response = await uploadResume(interviewId, resume);
alert(response.message);

navigate(`/dashboard/interview/${interviewId}`,  {
    state: {
        questionId: response.questionId,
        question: response.question
    }
});
        } catch (error) {

            alert(

                error.response?.data?.message ||
                "Resume upload failed."

            );

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-sky-50">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-[500px] border border-sky-100"
            >

                <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">

                    Upload Resume

                </h2>

                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setResume(e.target.files[0])}
                    className="w-full border border-sky-200 p-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-sky-300"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded transition-colors"
                >

                    Upload Resume

                </button>

            </form>

        </div>

    );

}

export default UploadResumePage;