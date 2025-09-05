import { useNavigate,Outlet } from "react-router-dom";
export default function Marks({questions , scr_array ,score,setScore,setArray,setIndex,setSelectedAnswers,selectedAnswers,setName})
{
    
   const  navigate=useNavigate(); 
    return(
        <>
        <div className='bg-white  m-15 ml-30 mr-30 rounded-4xl relative h-340'>
         <h1 id='heading' className='text-blue-700 text-4xl text-center drop-shadow-xl font-bold py-6'>Marks Details</h1>
            <div className="overflow-x-auto px-10 pb-10">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
             <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <tr>
                <th className="px-6 py-6 text-left font-bold text-xl uppercase tracking-wider">Questions</th>
                <th className="px-6 py-6 text-left font-bold text-xl uppercase tracking-wider">Results</th>
                <th className="px-6 py-6 text-left font-bold text-xl uppercase tracking-wider">Selected Answer</th>
                <th className="px-6 py-6 text-left font-bold text-xl uppercase tracking-wider">Correct Option</th>
           </tr>
           </thead>
            <tbody className="divide-y divide-gray-200">
           {questions.map((q,index)=>
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100 text-bold' : 'bg-white hover:bg-gray-100 text-bold'}>
                 <td className="px-4 py-3 text-blue-700 font-semibold text-xl">Q{index+1} ) {q.question}</td>
                <td className= {scr_array[index]===true? 'text-green-900 font-bold px-4 py-3 text-blue-700 font-semibold text-xl':'text-red-900 font-bold px-4 py-3 text-blue-700 font-semibold text-xl'}  >{scr_array[index]===true?'✅ Correct':'❌Incorrect'}</td>
                <td className="px-4 py-3 text-blue-700 font-semibold text-xl">{q.options[selectedAnswers[index]]}</td>
                <td className="px-4 py-3 text-gray-700 font-semibold text-xl">{q.options[q.correctAnswer]}</td>
            </tr>
           )
           }
           </tbody>
            
         </table>
         <h1 className="my-6 text-lg bg-blue-700 w-50 rounded-lg text-white"> Total score: {score} / {questions.length}</h1>
         <button className=" text-lg bg-blue-800 w-50 rounded-2xl text-white hover:-translate-3 hover:scale-115  active:bg-blue-400 text-lg" onClick={()=>navigate('attempts')}>VIEW ALL ATTEMPTS</button>
         <button className=' text-white bg-blue-800 rounded-2xl w-35 h-25 mx-auto block hover:translate-3 hover:scale-115  active:bg-blue-400 text-lg' onClick={()=>{setArray(Array(scr_array.length).fill(false));setScore(0);setIndex(0);setSelectedAnswers(Array(selectedAnswers.length).fill(null));setName("");navigate("/name")}}>TRY AGAIN 😎</button>
         </div>
        </div>
         <Outlet/>
         </>
    )
}