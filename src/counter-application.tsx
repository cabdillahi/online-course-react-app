import { useState } from "react";

const CounterApplication = () => {
  // useState

  const [counter, setCounter] = useState<number>(0);
 const [error,setError] = useState("")
 
  const handleIncrease = ()=>{
    setError("")
    setCounter((prev)=>prev+1)
  }

  const hanldeDicrease =()=>{
    if(counter === 0){
        setError("not allowed in this numbers")
        return
    }
    setError("")
    setCounter((prev)=>prev-1)
  }

  return (
    <div className="min-h-screen min-w-full bg-gray-800 flex justify-center items-center ">
      <div className="w-90 py-5 rounded-md bg-gray-500 text-white shadow">
        <h1 className="text-center my-4 text-2xl font-bold"> Counter App </h1>
        <div className="flex gap-10 items-center w-full justify-center">
          <button onClick={handleIncrease} className="bg-blue-500 px-5 rounded-md py-2 cursor-pointer">
            {" "}
            increase{" "}
          </button>
          <button className="text-xl "> {counter} </button>
          <button onClick={hanldeDicrease} className="bg-red-500 px-5 py-2 rounded-md cursor-pointer">
            {" "}
            dicrease{" "}
          </button>

        </div>
        <div className="text-red-500 text-center py-1">
            <p> {error} </p>
        </div>
      </div>
    </div>
  );
};

export default CounterApplication;
