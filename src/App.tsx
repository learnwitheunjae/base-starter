import { useState } from 'react';
import { Plus } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-96 mx-auto my-12">
      <h1 className="text-2xl">GyulStudy Starter</h1>
      <div className='mt-4'>
        <button
          type="button"
          className="btn"
          onClick={() => setCount((count) => count + 1)}
        >
          <Plus size={14} />
          <span>Increase</span>
        </button>
        <p>Count: {count}</p>
      </div>
    </div>
  );
}

export default App;
