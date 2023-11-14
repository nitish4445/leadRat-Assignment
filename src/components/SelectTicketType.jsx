
import './TicketType.css'
const SelectTicketType = ({type,setTicketType}) => {
  const handleTicketChange = (e) => {
    setTicketType(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='tcktTyp'>
              <select id="tickettype" value={type} onChange={handleTicketChange}>
                <option value="none" hidden>select type</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
    </div>
  );
};

export default SelectTicketType;
