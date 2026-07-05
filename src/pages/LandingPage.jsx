import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import FeatureCard from "../components/common/FeatureCard";

function LandingPage() {

    return (

        <>
            <Navbar />

            <section className="min-h-[90vh] flex flex-col justify-center items-center bg-slate-100">

                <h1 className="text-6xl font-bold text-center">

                    Crack Your Next Interview with AI

                </h1>

                <p className="mt-6 text-xl text-gray-600 text-center max-w-2xl">

                    Practice realistic AI-powered interviews based on your resume,
                    job description, and role. Get instant feedback and improve
                    your interview performance.

                </p>

                <div className="mt-10 flex gap-6">

                    <Link
                        to="/register"
                        className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
                    >
                        Get Started
                    </Link>

                    <Link
                        to="/login"
                        className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50"
                    >
                        Login
                    </Link>

                </div>

            </section>


            <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">

            Platform Features

        </h2>

        <p className="text-center text-gray-500 mt-4 mb-16">

            Everything you need to prepare for technical interviews.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <FeatureCard
                icon="🤖"
                title="AI Questions"
                description="Generate realistic interview questions based on the job role and job description."
            />

            <FeatureCard
                icon="📄"
                title="Resume Analysis"
                description="Upload your resume and let AI tailor interview questions to your experience."
            />

            <FeatureCard
                icon="💬"
                title="Instant Feedback"
                description="Receive scores, feedback, and suggestions immediately after every answer."
            />

            <FeatureCard
                icon="📊"
                title="Final Report"
                description="View your strengths, weaknesses, recommendations, and overall interview performance."
            />

        </div>

    </div>

</section>

        </>

        

    );

}

export default LandingPage;