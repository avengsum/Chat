import React, { useState } from 'react';
import Table from './Table';

const Star = () => {
  const [row,setRow] = useState()
  const [col,setCol] = useState()
  const [toggle,setToggle] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    setRow(data.get("row"))
    setCol(data.get("col"))
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="row">row</label>
      <input type="number"
      name='row'
      id='row' />
      <label htmlFor="col">col</label>
      <input type="number"
      name='col'
      id='col'/>
      <button
      type='submit'>submit</button>
      </form>
  
      {toggle && (<div>
        
      </div>)}
      <Table rows={row} cols={col} />
      
      
    </div>
  );
};

export default Star;
