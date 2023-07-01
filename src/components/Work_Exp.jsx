import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Work_Exp = () => {
  const initState = {
    fName: "",
    lName: "",
    city: "",
    linkedin: "",
    num: "",
    email: "",
  };

  const [personalInfo, setPersonalInfo] = useState(initState);

  return (
    <div className="flex font-mono">
      <div className=" basis-1/3 h-screen">
        <div className="flex text-2xl font-bold justify-center">Education</div>
        <div className="flex justify-center mt-7">
          <input
            type="text"
            className="p-2 mr-2 ml-2 outline-none rounded basis-1/2"
            placeholder="FirstName"
            value={personalInfo.fName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, fName: e.target.value })
            }
          />
          <input
            type="text"
            className="p-2 mr-2 ml-2 outline-none rounded basis-1/2"
            placeholder="LastName"
            value={personalInfo.lName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, lName: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center mt-7">
          <input
            type="text"
            className="p-2 mr-2 ml-2 outline-none rounded w-full "
            placeholder="City"
            value={personalInfo.city}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, city: e.target.value })
            }
          />
        </div>

        <div className="flex justify-center mt-7">
          <input
            type="number"
            className="p-2 mr-2 ml-2 outline-none rounded w-full"
            placeholder="Contact Number"
            value={personalInfo.num}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, num: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center mt-7">
          <input
            type="email"
            className="p-2 mr-2 ml-2 outline-none rounded w-full"
            placeholder="Email"
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center mt-7">
          <input
            type="text"
            className="p-2 mr-2 ml-2 outline-none rounded w-full"
            placeholder="Linkedin"
            value={personalInfo.linkedin}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, city: e.target.value })
            }
          />
        </div>
        <div
          className="m-auto mt-4 flex justify-center p-2 bg-slate-400 w-1/2 rounded-md text-white cursor-pointer"
          onClick={() => setPersonalInfo(initState)}
        >
          Reset
        </div>
        <Link
          to="/"
          className="m-auto mt-4 flex justify-center p-2 bg-slate-400 w-1/2 rounded-md text-white cursor-pointer"
          onClick={() => setPersonalInfo(initState)}
        >
          Next
        </Link>
      </div>
      <div className="bg-slate-400 w-[2px] mt-4 mb-4 ml-2 mr-2  "></div>
      <div className="basis-2/3 h-screen flex justify-center items-center">
        <div className=" border-2 h-[650px] w-[500px]">
          <div className="m-2">
            <div className="text-2xl font-bold">
              <span>{personalInfo.fName}</span>
              &nbsp;
              <span>{personalInfo.lName}</span>
            </div>
            <div>
              {personalInfo.num !== "" ? `phone: ${personalInfo.num}` : ""}
            </div>
            <div>
              {personalInfo.email !== "" ? `email: ${personalInfo.email}` : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work_Exp;
