import { useState } from "react";
import Form from "./components/Form"
import Formula from "./components/Formula";


function App() {
  const [arrivalRate,setArrivalRate]=useState(0);
  const [serviceRate,setServiceRate]=useState(0)

  const handleInput=(details)=>{
    //  console.log("handle")
    setArrivalRate(parseInt(details.arrival));
    setServiceRate(parseInt(details.service));

  }

  return (
    <>
    <div className="flex justify-evenly gap-4 mt-8">
     
       <Form handleInput={handleInput}></Form>
       
       <Formula arrivalRate={arrivalRate} serviceRate={serviceRate}></Formula>
      

    </div>
    </>
  )
}

export default App
