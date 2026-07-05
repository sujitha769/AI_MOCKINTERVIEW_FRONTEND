import { useNavigate } from "react-router-dom";

function DashboardPage() {

    const navigate = useNavigate();

    return (

        <div>

            <h1 className="text-4xl font-bold mb-8">

                Welcome

            </h1>

            <div
                onClick={() => navigate("/dashboard/mock")}
                className="bg-white rounded-lg shadow p-8 cursor-pointer hover:shadow-lg"
            >

                <h2 className="text-2xl font-semibold">

                    Take Mock Interview

                </h2>

                <p className="text-gray-600 mt-2">

                    Start a new AI-powered interview.

                </p>

            </div>

        </div>

    );

}

export default DashboardPage;