import React, {useEffect} from 'react';
import './App.css';
import logoNotification from './relaxIcon.png'

function App() {

  const notification = () => {
    return chrome.notifications.create({
      title: 'Reminder',
      message:'Test reminder',
      iconUrl:logoNotification,
      type:'basic'
    })
  }

  useEffect(() => {
    notification()
  }, [])

  return (
    <div>
    </div>
  );
}

export default App;
