import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className='flex justify-between my-1'>
          <div className=''>
            <input placeholder='Search doctors' className='w-400' />
          </div>
          <Button className='outlined-btn' onClick={()=> navigate('/apply-doctor')}>Apply Doctor</Button>
        </div>
      </div>
    </>
  )
}

export default Home
