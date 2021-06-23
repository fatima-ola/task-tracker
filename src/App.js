import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

const App = () => {
  const [tasks] = useState([  
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Virtual Meeting',
        day: 'Feb 5=6th at 12:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping Online',
        day: 'Feb 9th at 4:30pm',
        reminder: false,
    }
   
])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
