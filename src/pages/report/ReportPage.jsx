import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReport } from "../../services/reportService";

function ReportPage() {

    const { interviewId } = useParams();

    const [report, setReport] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadReport();

    }, []);

    const loadReport = async () => {

        try {

            const response = await getReport(interviewId);

            setReport(response);

        } catch (error) {

            alert(

                error.response?.data?.message ||
                "Failed to load report."

            );

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="min-h-screen flex justify-center items-center">

                <h2 className="text-2xl">

                    Loading Report...

                </h2>

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-10">

            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10">

                <h1 className="text-4xl font-bold text-center mb-10">

                    Interview Report

                </h1>

                <div className="mb-8">

                    <h2 className="text-2xl font-semibold">

                        Overall Score

                    </h2>

                    <p className="text-5xl text-blue-600 font-bold mt-4">

                        {report.overallScore}/100

                    </p>

                </div>

                <div className="mb-8">

                    <h2 className="text-2xl font-semibold mb-3">

                        Strengths

                    </h2>

                    <p>

                        {report.strengths}

                    </p>

                </div>

                <div className="mb-8">

                    <h2 className="text-2xl font-semibold mb-3">

                        Weaknesses

                    </h2>

                    <p>

                        {report.weaknesses}

                    </p>

                </div>

                <div>

                    <h2 className="text-2xl font-semibold mb-3">

                        Recommendations

                    </h2>

                    <p>

                        {report.recommendations}

                    </p>

                </div>

            </div>

        </div>

    );

}

export default ReportPage;