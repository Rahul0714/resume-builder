import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full flex font-mono ">
      <div className="basis-2/3 flex items-center flex-col justify-center h-screen">
        <div className="text-7xl font-extrabold tracking-wide">
          Resume Creator
        </div>
        <div className="text-2xl tracking-widest">
          Create your own resume in no time
        </div>
      </div>
      <div className=" bg-slate-600 items-center justify-center flex-col w-[2px] mt-4 mb-4"></div>
      <div className=" flex basis-1/3  items-center justify-center flex-col">
        <div className="text-3xl">Get Started</div>
        <Link to="/personal-info" className="mt-4 text-3xl cursor-pointer btn">
          <BsFillArrowRightCircleFill />
        </Link>
      </div>
    </div>
  );
};

export default Home;
