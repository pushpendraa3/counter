import React, {useState} from 'react';
import './Counter.css'

export default function Counter() {

  let [count, setCount] = useState(0);

  const addCount = () => {
    return setCount(count + 1);
  }

  const reduceCount = () => {
    if (count > 0) {
      return setCount(count - 1);
    }
  }
  return (
    <div className='counter'>
        <h1>{count}</h1>
        <button onClick={addCount}>add</button>
        <button onClick={reduceCount}>Subtract</button>
    </div>
  )
}
