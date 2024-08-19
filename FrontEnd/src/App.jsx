import { useState } from "react"

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <main className="App">
      <div>
        <h1>Hello World</h1>
        <p>{counter}</p>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>Increament</button>
        <button onClick={() => {
          setCounter(counter - 1)
        }}>Decreament</button>
      </div>
    </main>
  )
}