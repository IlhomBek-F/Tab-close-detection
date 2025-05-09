import { useEffect } from 'react'
import './App.css'

const API_URL = 'http://localhost:5000/log'

function App() {
  
  const sendLeaveRequest = () => {
    if(document.visibilityState === 'hidden') {
      const blob = new Blob([JSON.stringify({time: new Date()})], { type: 'text/plain', });
      navigator.sendBeacon(API_URL, blob);
    }
  }

  useEffect(() => {
    document.addEventListener("visibilitychange", sendLeaveRequest);
    
    return () => document.removeEventListener("visibilitychange", sendLeaveRequest);
  }, [])

  return (
    <>
      <h1>Close the tab and view the request on the server.</h1>
    </>
  )
}

export default App
