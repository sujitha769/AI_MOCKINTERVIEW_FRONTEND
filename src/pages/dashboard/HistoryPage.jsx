import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHistory } from "../../services/historyService";

function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const response = await getHistory();
      setHistory(response);
    } catch (error) {
      alert("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Previous Mock Interviews</h1>

      {loading ? (
        <p>Loading...</p>
      ) : history.length === 0 ? (
        <p>No interviews found.</p>
      ) : (
        history.map((item) => (
          <div
            key={item.interviewId}
            className="bg-white shadow rounded-lg p-6 mb-5"
          >
            <h2 className="text-2xl font-semibold">{item.jobRole}</h2>

            <p className="mt-2">Score : {item.overallScore}/10</p>

            <p>Completed : {item.completed ? "Yes" : "No"}</p>

            <p>Date : {new Date(item.createdAt).toLocaleString()}</p>

            <button
              onClick={() =>
                navigate(`/dashboard/report/${item.interviewId}`)
              }
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
            >
              View Report
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default HistoryPage;