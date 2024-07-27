import { useState } from "react";

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleContent = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          What can we help you with?
        </h1>

        <div>
          <h2 className="text-lg font-bold mb-2">Popular Questions</h2>
          <div className="border-t border-gray-300">
            <div className="py-4">
              <button
                onClick={() => toggleContent("q1")}
                className="w-full text-left flex justify-between items-center"
              >
                Do you guys sell directly to the public?
                <span className="text-gray-500">
                  {openQuestion === "q1" ? "▲" : "▼"}
                </span>
              </button>
              {openQuestion === "q1" && (
                <div id="q1" className="bg-gray-200 p-4 rounded mt-2">
                  Only registered resellers that are on our database will be
                  able to view stock availability & pricing. Completed the{" "}
                  <a href="#" className="text-red-500">
                    registration form
                  </a>
                  .
                  <br />
                  <br />
                  Didn’t find what you need?
                  <button className="bg-red-500 text-white px-4 py-2 rounded mt-2">
                    Contact Us
                  </button>
                </div>
              )}
            </div>
            <div className="py-4 border-t border-gray-300">
              <button
                onClick={() => toggleContent("q2")}
                className="w-full text-left flex justify-between items-center"
              >
                Where can I find the prices of your products?
                <span className="text-gray-500">
                  {openQuestion === "q2" ? "▲" : "▼"}
                </span>
              </button>
              {openQuestion === "q2" && (
                <div id="q2" className="bg-gray-200 p-4 rounded mt-2">
                  Only registered resellers that are on our database will be
                  able to view stock availability & pricing. Completed the{" "}
                  <a href="#" className="text-red-500">
                    registration form
                  </a>
                  .
                  <br />
                  <br />
                  Didn’t find what you need?
                  <button className="bg-red-500 text-white px-4 py-2 rounded mt-2">
                    Contact Us
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
