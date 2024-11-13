import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from './Redux/slice/counterSlice'


function Counter() {

  const count = useSelector((state)=> state.counterReducer.count)
  const dispatch = useDispatch()
  const [amount,setAmount] = useState("")
  console.log(amount);

  const handleincrement=()=>{
    if(amount==""){
      alert("Please provide values")
    }
    else{
      dispatch(incrementByAmount(Number(amount)))
    }
  }
  

  return (
    <>
      <h1 className='text-danger fw-bolder text-center mt-5'>Counter Application</h1>
      <div className="container border border-3 mt-3 p-3 w-25">
        <h1 className='fw-bolder text-center mt-5' style={{fontSize:"50px"}}>{count}</h1>


      <div className="d-flex justify-content-evenly align-items-center mt-5">
        <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
        <button className='btn btn-danger' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className='btn btn-warning' onClick={()=>dispatch(reset())}>Reset</button>
        </div>

      <div className="d-flex mt-5">
        <input type="text" className='form-control' onChange={e=>setAmount(e.target.value)} value={amount||""} placeholder='Enter amount to be incremented' />
        <button className='btn btn-primary ms-3' onClick={handleincrement}>Increment Amount</button>
      </div>


      </div>
  
    </>
  )
}

export default Counter
