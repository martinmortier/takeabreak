import React from 'react';
import './App.css';

function App() {

  const setTimer = (): void => {
    const startTimerNotification = true
    chrome.storage.sync.set({startTimerNotification: startTimerNotification})
    chrome.runtime.reload()
  }

  return (
    <div>
      <button onClick={() => setTimer()}>Set timer</button>
    </div>
  );
}

export default App;
