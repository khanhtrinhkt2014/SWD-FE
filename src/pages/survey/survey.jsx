import { useState } from "react";

const surveys = {
  gad7: {
    name: "GAD-7 (General Anxiety Disorder)",
    questions: [
      "Feeling nervous, anxious, or on edge?",
      "Not being able to stop or control worrying?",
      "Worrying too much about different things?",
      "Trouble relaxing?",
      "Being so restless that it's hard to sit still?",
      "Becoming easily annoyed or irritable?",
      "Feeling afraid, as if something awful might happen?",
    ],
  },
  phq9: {
    name: "PHQ-9 (Depression Test)",
    questions: [
      "Little interest or pleasure in doing things?",
      "Feeling down, depressed, or hopeless?",
      "Trouble falling or staying asleep, or sleeping too much?",
      "Feeling tired or having little energy?",
      "Poor appetite or overeating?",
      "Feeling bad about yourself — or that you are a failure?",
      "Trouble concentrating on things, such as reading the newspaper?",
      "Moving or speaking so slowly that other people could notice?",
      "Thoughts that you would be better off dead or hurting yourself?",
    ],
  },
};

const Survey = () => {
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSurveySelect = (surveyKey) => {
    setSelectedSurvey(surveys[surveyKey]);
    setAnswers(new Array(surveys[surveyKey].questions.length).fill(0));
    setSubmitted(false);
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mental Health Assessment</h1>

      {!selectedSurvey ? (
        <div className="flex flex-col items-left justify-center gap-4"> 
        <p>Select a survey:</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded w-1/2"
          onClick={() => handleSurveySelect("gad7")}
        >
          GAD-7 (Anxiety Test)
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded w-1/2"
          onClick={() => handleSurveySelect("phq9")}
        >
          PHQ-9 (Depression Test)
        </button>
      </div>
      ) : (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{selectedSurvey.name}</h2>
          <form className="mt-4">
            {selectedSurvey.questions.map((question, index) => (
              <div key={index} className="mb-4">
                <p>{question}</p>
                <select
                  className="border rounded p-2 w-full"
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                >
                  <option value="0">Not at all (0)</option>
                  <option value="1">Several days (1)</option>
                  <option value="2">More than half the days (2)</option>
                  <option value="3">Nearly every day (3)</option>
                </select>
              </div>
            ))}
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 border rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold">Your Score</h3>
              <p>Total Score: {answers.reduce((sum, val) => sum + val, 0)}</p>
              <button
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded w-full"
                onClick={() => setSelectedSurvey(null)}
              >
                Take Another Test
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Survey;
