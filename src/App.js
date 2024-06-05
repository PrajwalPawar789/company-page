import React, { useState } from "react";
import LineChart from "./LineChart";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFullText, setShowFullText] = useState(false);
  const [selectedOption, setSelectedOption] = useState("null");
  const [data, setData] = useState([
    { id: 1, name: "smile" },
    { id: 2, name: "amcs" },
    { id: 3, name: "intervals" },
    { id: 4, name: "vista" },
    { id: 5, name: "github" },
    { id: 6, name: "keras" },
    { id: 7, name: "majestic" },
    { id: 8, name: "orca" },
    { id: 9, name: "smile" },
    { id: 10, name: "walker" },
    { id: 11, name: "iast" },
    { id: 12, name: "ultipro" },
    { id: 13, name: "broadly" },
    { id: 14, name: "cygwin" },
    { id: 15, name: "nebula" },
    { id: 16, name: "shopzilla" },
    { id: 17, name: "virtualbox" },
    { id: 18, name: "cowboy" },
    { id: 19, name: "cgi" },
    { id: 20, name: "media" },
    { id: 21, name: "spinnaker" },
    { id: 22, name: "shopzilla" },
    { id: 23, name: "hirevue" },
    { id: 24, name: "linux kernel" },
    { id: 25, name: "flot" },
    { id: 26, name: "rpa" },
    { id: 27, name: "amazon" },
    { id: 28, name: "freertos" },
    { id: 29, name: "divvycloud" },
    { id: 30, name: "sharpen" },
    { id: 31, name: "betterworks" },
    { id: 32, name: "cheetah" },
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="App min-h-screen bg-[#F6F6F6]">
      <div className="flex justify-center ">
        <div className="bg-white p-4 m-4 rounded-lg">
          <div className="flex items-center">
            <img
              src="logo.jpg"
              alt="Amazon Logo"
              className="mr-2"
              style={{ height: "30px", width: "30px" }}
            />
            <div>
              <h1 className="font-bold">Amazon</h1>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="https://www.amazon.com/"
              className="text-blue-500 hover:underline"
            >
              Amazon.com
            </a>
            <span className="mx-2">|</span> {/* Adding a separator */}
            <a
              href="https://www.linkedin.com/company/amazon"
              className="text-blue-600 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H2zm3.267 14.75H5v-8.36l-.002-.04c-.017-1.172-.2-2.958-2.732-2.958-2.533 0-2.765 2.05-2.765 3.295v7.064H0V8.817h.003C.318 7.872 1.07 6.41 3.392 6.41c1.65 0 2.315 1.008 2.382 1.546v1.33h-.002c.02-.03.074-.144.096-.216h2.3v2.747zm5.606-.39c0-2.426-1.313-3.577-3.059-3.577-1.517 0-2.188.825-2.562 1.394V8.818h-2.3v7.535h2.3v-4.22c0-.275.025-.548.098-.742.215-.548.703-1.12 1.52-1.12 1.073 0 1.508.825 1.508 2.03v3.052h2.303v-3.142z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <button
            onClick={handleDownload}
            className="text-blue-600 hover:underline ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L11 13.586V4a1 1 0 112 0v9.586l4.293-4.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div>
            <div>
              <h1 className="text-sm font-semibold mt-10">HQ location</h1>
              <h1 className="text-xs text-gray-500">
                Seattle, Washington, United States
              </h1>
            </div>
            <div>
              <h1 className="text-sm font-semibold mt-5">Industry</h1>
              <h1 className="text-xs text-gray-500">
                Software Development, <br />
                Technology, Information & Media
              </h1>
            </div>
            <div>
              <h1 className="text-sm font-semibold mt-5">Employees</h1>
              <h1 className="text-xs text-gray-500">10,001+</h1>
            </div>
            <div>
              <h1 className="text-sm font-semibold mt-5">Revenue</h1>
              <h1 className="text-xs text-gray-500">$1B+</h1>
            </div>
            <div>
              <h1 className="text-sm font-semibold mt-5">Specialties</h1>
              <h1 className="text-xs text-gray-500">Business Internet</h1>
            </div>
            <div>
              <h1 className="text-sm font-semibold mt-8">
                Amazon is guided by four principles: <br />
                customer obsession rather than competitor <br />
                focus, passion for invention, commitment
                <br />
                to operational excellence, and long-term <br />
                thinking. We are driven by{" "}
                {showFullText ? (
                  <>
                    the excitement of <br />
                    thinking, building technologies, inventing
                    <br />
                    providing services that change lives. We <br />
                    products, and embrace new ways of doing <br />
                    decisions quickly, and are not afraid to <br />
                    things, make fail. We have the scope and <br />
                    capabilities of a large company, and the <br />
                    spirit and heart of a small one. Together, <br />
                    Amazonians research and develop new technologies <br />
                    from Amazon Web Services to Alexa on behalf of <br />
                    our customers: shoppers, sellers, content creators, <br />
                    and developers around the world. Our <br />
                    mission is to be Earth's most customer-centric <br />
                    Our actions, goals, projects, programs, <br />
                    company. and inventions begin and end with the customer{" "}
                    <br />
                    top of mind. You'll also hear us say that at <br />
                    Amazon, it's always "Day 1." What do we mean? <br />
                    That our approach remains the same as it was on <br />
                    Amazon's very first day - to make smart, fast <br />
                    decisions, stay nimble, invent, and focus on <br />
                    delighting our customers.
                    <br />
                    <span
                      className="text-blue-600 cursor-pointer"
                      onClick={toggleReadMore}
                    >
                      Read Less
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="text-blue-600 cursor-pointer"
                      onClick={toggleReadMore}
                    >
                      Read More
                    </span>
                  </>
                )}
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 m-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3">
                <div>
                  <h2 className="text-xl font-bold">Funding</h2>
                </div>

                <div className="bg-[#F6F6F6] p-4 rounded-lg flex flex-col items-center mt-12 mb-4">
                  {" "}
                  {/* Add margin top and bottom here */}
                  <div>
                    <h6 className="text-lg mb-2">Total rounds</h6>
                  </div>
                  <div className="w-2/3">
                    <h2 className="text-2xl font-bold">$8.1B</h2>
                  </div>
                </div>
                <div className="bg-[#F6F6F6] p-4 rounded-lg flex flex-col items-center mb-4">
                  {" "}
                  {/* Add margin bottom here */}
                  <div>
                    <h6 className="text-lg mb-2">Last rounds</h6>
                  </div>
                  <div className="w-2/3">
                    <h2 className="text-2xl font-bold">$8B</h2>
                  </div>
                </div>
                <div className="bg-[#F6F6F6] p-4 rounded-lg flex flex-col items-center mb-4">
                  {" "}
                  {/* Add margin bottom here */}
                  <div>
                    <h6 className="text-lg mb-2">Rounds</h6>
                  </div>
                  <div className="w-2/3">
                    <h2 className="text-2xl font-bold">3</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F6F6] p-6 m-6 rounded-lg col-span-1 md:col-span-2">
            <div className="flex justify-between items-center">
              <div className="flex">
                <button
                  onClick={() => handleOptionSelect("fundingRounds")}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  Funding rounds
                </button>
                <button
                  onClick={() => handleOptionSelect("fundingHistory")}
                  className="text-blue-500 hover:underline focus:outline-none ml-4"
                >
                  Funding history
                </button>
              </div>
            </div>
            <div className="w-full">
              <LineChart selectedOption={selectedOption} width="100%" />{" "}
              {/* Set width as needed */}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 m-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Technologies (2141)</h2>
          <input
            type="text"
            placeholder="Search technology"
            className="border border-gray-300 p-2 rounded-lg mb-4"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="grid grid-cols-3 gap-2">
            {filteredData.map((item) => (
              <div key={item.id} className="bg-[#F6F6F6] p-2 rounded-lg">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
