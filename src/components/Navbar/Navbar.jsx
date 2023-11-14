
import SelectTicketQuantity from '../SelectTicketQunatity';
import SelectTicketType from '../SelectTicketType';
import './navbar.css'; // Import the CSS file

const Navbar = ({setTicketQun, type, setTicketType,ticketQun}) => {
 
    const time="Sunday,Nov 12,2023,12:30 PM"
  return (
    <>
    <div className="navbar">
      <div className='movieName'>
        <span>Tiger 3</span>
        <span>BMX Cinemas (Balaji Movieplex)|{time}</span>
      </div>
      <div id='ticketSecection'>
        <SelectTicketType type={type} setTicketType={setTicketType}/>
        <SelectTicketQuantity ticketQun={ticketQun} setTicketQun={setTicketQun}/>
    </div>
    </div>
    </>
  );
};

export default Navbar;
