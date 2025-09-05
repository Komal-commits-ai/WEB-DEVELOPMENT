import {AttemptsRepo} from './repositories/attemptsRepo.js'
export default function Attempts({questions})
{
    let dicts=AttemptsRepo.getData()
    return(
        <>
        {dicts.map((dict,index)=>{
            return (
                  <div key={index} className='bg-white  m-15 ml-30 mr-30 rounded-4xl relative h-310'>
                      <h1 id='heading' className='text-blue-700 text-4xl text-center drop-shadow-xl font-bold py-6'>Marks Details</h1>
                     <h1  className='text-blue-900 text-2xl drop-shadow font-bold   mx-11'>Name:{dict.name}</h1>
                      <h1 className='text-blue-900 text-xl  font-bold  mx-10'>Total Score:{dict.tscore}</h1>
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
                                           <td className= {dict.str_result[index]===true? 'text-green-900 font-bold px-4 py-3 text-blue-700 font-semibold text-xl':'text-red-900 font-bold px-4 py-3 text-blue-700 font-semibold text-xl'} >{dict.str_result[index]===true?'✅ Correct':'❌Incorrect'}</td>
                                           <td className="px-4 py-3 text-blue-700 font-semibold text-xl">{q.options[dict.str_selectedAnswer[index]]}</td>
                                           <td className="px-4 py-3 text-gray-700 font-semibold text-xl">{q.options[q.correctAnswer]}</td>
                                          </tr>
                                               )
                                        }
                                </tbody>
            
                             </table>
                        </div>
                        <h1></h1>
                    </div>
                
            )
        })}
        </>
    )
}