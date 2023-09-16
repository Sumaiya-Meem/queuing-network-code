import { useState } from "react"


function Form({handleInput}) {

    const [details, setDetails] = useState({
        arrival: '',
        service: '',
    })

    const inputEvent = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);

        const name = event.target.name;
        const value = event.target.value;

        setDetails((prevValue) => {
            if (name === 'arrival') {
                return {
                    arrival: value,
                    service: prevValue.service,
                }
            }
            if (name === 'service') {
                return {
                    arrival: prevValue.arrival,
                    service: value,
                }
            }

        })
    }

    return (
        <>
            <div className="mt-16">
                <div className="w-[75%] space-y-2">
                        <h2 className="text-[22px] font-semibold text-purple-800">Arrival Rate:</h2>
                        <input type="text" name='arrival' onChange={inputEvent} placeholder="enter arrival rate value" className="border-2 border-gray-200 p-4 rounded-lg" />
                        <h2 className="text-[22px] font-semibold text-purple-800">Service Rate:</h2>
                        <input type="text" name='service' onChange={inputEvent} placeholder="enter service rate value" className="border-2 border-gray-200 p-4 rounded-lg" />
                        <br />
                        <button className="p-4 bg-green-400 rounded-[22px] mt-4 text-xl font-semibold" onClick={()=>{handleInput(details)}}>Calculate</button>
                </div>
            </div>
        </>
    )
}

export default Form
