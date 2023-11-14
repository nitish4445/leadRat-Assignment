import Navbar from "./components/Navbar/Navbar"
import { useState } from "react";
import Screen from "./components/Screen";
import Seat from "./components/Seat";
const App = () => {
  const [ticketQun,setTicketQun]=useState('');
  const [ticketType, setTicketType] = useState('');
  return (
    <>
    
    <div>
      <Navbar ticketQun={ticketQun} setTicketQun={setTicketQun} type={ticketType} setTicketType={setTicketType}/>
      <Seat  ticketQun={ticketQun} type={ticketType} />
      <Screen/>
    </div>
    </>
  )
}

export default App
