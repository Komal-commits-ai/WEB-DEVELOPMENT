import { useNavigate } from "react-router-dom";
export default function NamePage({ name, setName }) {
  const navigate = useNavigate();
  function handleStart() {
    if (name.trim() === "") {
      alert("ENTER YOUR NAME FIRST");
    } else {
      navigate('/quiz');
    }
  }
  return (
    <div className="bg-white  m-15 ml-65 mr-65 rounded-4xl relative h-110 ">
      <h1 className="text-blue-700 text-3xl drop-shadow-xl font-bold text-center py-20">
        WELCOME,LET'S TEST YOUR KNOWLEDGE OF REACT
      </h1>
      <label className='text-blue-700 text-2xl drop-shadow-xl font-bold mx-20 '>
        Enter Your Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-blue-300 rounded-xl text-center"
        />
      </label>
      <div className="flex justify-center items-center my-20">
        <button
          type="button"
          className="font-mono text-white bg-blue-800 rounded-2xl w-25 h-14 hover:-translate-3 active:bg-blue-400 text-xs scale-150 hover:scale-200"
          onClick={handleStart}
        >
          START QUIZ</button>
      </div>
    </div>
  );
}
