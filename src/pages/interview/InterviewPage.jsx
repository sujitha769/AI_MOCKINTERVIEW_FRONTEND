import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { submitAnswer } from "../../services/interviewService";

const TOTAL_QUESTIONS = 10;

function InterviewPage() {

    const { interviewId } = useParams();

    const navigate = useNavigate();

    const location = useLocation();

    const [questionId, setQuestionId] = useState(
        location.state?.questionId
    );

    const [question, setQuestion] = useState(
        location.state?.question
    );

    const [questionNumber, setQuestionNumber] = useState(1);

    const [answer, setAnswer] = useState("");

    const [score, setScore] = useState(null);

    const [feedback, setFeedback] = useState("");

    // "answering" -> user is writing/submitting the current question
    // "feedback"  -> score/feedback shown, waiting for "Next Question"
    const [stage, setStage] = useState("answering");

    const [pendingNext, setPendingNext] = useState(null);

    const handleSubmit = async () => {

        if (answer.trim() === "") {

            alert("Please enter your answer.");

            return;

        }

        try {

            const response = await submitAnswer({

                interviewId,

                questionId,

                answer

            });

            setScore(response.score);

            setFeedback(response.feedback);

            if (response.nextQuestionId && response.nextQuestion) {

                setPendingNext({

                    questionId: response.nextQuestionId,
                    question: response.nextQuestion

                });

            } else {

                setPendingNext(null);

            }

            setStage("feedback");

        } catch (error) {

            alert(

                error.response?.data?.message ||
                "Failed to submit answer."

            );

        }

    };

    const handleNext = () => {

        if (pendingNext) {

            setQuestionId(pendingNext.questionId);

            setQuestion(pendingNext.question);

            setQuestionNumber((prev) => prev + 1);

            setAnswer("");

            setScore(null);

            setFeedback("");

            setPendingNext(null);

            setStage("answering");

        } else {

            navigate(`/dashboard/report/${interviewId}`);

        }

    };

    return (

        <div className="min-h-screen bg-sky-50 p-10">

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8 border border-sky-100">

                <div className="flex items-center justify-between mb-6">

                    <h1 className="text-3xl font-bold text-slate-800">

                        AI Interview

                    </h1>

                    <span className="text-sm font-semibold text-blue-600 bg-sky-100 px-4 py-2 rounded-full">

                        Question {questionNumber} of {TOTAL_QUESTIONS}

                    </span>

                </div>

                <h2 className="text-xl font-semibold mb-4 text-slate-800">

                    Question

                </h2>

                <p className="mb-8">

                    {question}

                </p>

                {stage === "answering" && (

                    <>

                        <textarea
                            rows="8"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="w-full border border-sky-200 rounded p-4 focus:outline-none focus:ring-2 focus:ring-sky-300"
                            placeholder="Write your answer here..."
                        />

                        <button
                            onClick={handleSubmit}
                            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors"
                        >

                            Submit Answer

                        </button>

                    </>

                )}

                {stage === "feedback" && (

                    <div className="mt-2 border-t border-sky-100 pt-6">

                        <h3 className="text-xl font-bold text-slate-800">

                            Score : {score}/10

                        </h3>

                        <p className="mt-4">

                            {feedback}

                        </p>

                        <button
                            onClick={handleNext}
                            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors"
                        >

                            {pendingNext ? "Next Question" : "View Report"}

                        </button>

                    </div>

                )}

            </div>

        </div>

    );

}

export default InterviewPage;