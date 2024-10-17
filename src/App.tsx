import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-96 mx-auto my-12">
      <h1 className="text-2xl">Vite + React</h1>
      <div>
        <button
          type="button"
          className="btn"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
