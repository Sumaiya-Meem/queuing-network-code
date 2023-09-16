function Formula({arrivalRate,serviceRate}) {
    const busy = arrivalRate/serviceRate 
    const idle= 1-(arrivalRate/serviceRate);
    
    const avgCusQueue=(arrivalRate/serviceRate)*(1/( serviceRate-arrivalRate));

    const systemUtilization=(arrivalRate/serviceRate);

    const cusWaitServer=(arrivalRate/serviceRate)*(arrivalRate/serviceRate);

    const notEmpty=(arrivalRate/serviceRate)*(1-(arrivalRate/serviceRate));

    const expectedNotEmpty= 1-(1-(arrivalRate/serviceRate ))
    return (
        <>
        <div className="">
            <div className="flex gap-10 mb-4">
            <h1 className="text-xl text-purple-800 font-semibold">Arrival Rate: {arrivalRate}</h1>
            <h1 className="text-xl text-purple-800 font-semibold ml-4">Service Rate: {serviceRate}</h1>
            </div>
        <div>
        <table className="border-2 border-red-300 ">
            <tr className="border-2">
                <td className="text-xl  font-semibold p-4 text-purple-800">Name:</td>
                <td className="text-xl font-semibold p-4 text-purple-800">Value:</td>
            </tr>
             <tr className="border-2">
             <td className="text-xl p-4"><li>Probability server is busy: </li></td>
             <td className="p-4">{busy}</td>
             </tr>

             <tr className="border-2"> 
             <td className="text-xl p-4"><li>Probability server is idle: </li></td>
             <td className="p-4">{idle}</td>
             </tr>
             
             <tr className="border-2">
             <td className="text-xl p-4"><li className="text-xl">System Utilization: </li></td>
             <td className="p-4">{systemUtilization}</td>
             </tr>

             <tr className="border-2">
             <td className="text-xl p-4"><li className="text-xl">Average waiting time of customer in queue: </li></td>
             <td className="p-4">{avgCusQueue}</td>
             </tr>

             <tr className="border-2">
             <td className="text-xl p-4"><li className="text-xl">Probability of customer waiting in the queue: </li></td>
             <td className="p-4">{cusWaitServer}</td>
             </tr>

             <tr className="border-2">
             <td className="text-xl p-4"><li className="text-xl">Probability of queue is not empty: </li></td>
             <td className="p-4">{notEmpty}</td>
             </tr>
            
             <tr className="border-2">
             <td className="text-xl p-4"><li className="text-xl">Expected length of non-empty queue: </li></td>
             <td className="p-4">{expectedNotEmpty}</td>
             </tr>

             
        </table>
        </div>
        </div>
        </>
      )

}
export default Formula