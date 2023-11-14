import "./Ticketqun.css"

const SelectTicketQunatity = ({ticketQun,setTicketQun}) => {
  function HandleQuntity(e){
    setTicketQun(e.target.value)
    console.log(e.target.value);
    //props.onChangeQuantity(e.target.value);
  }
  return (
    <div>
      <select  id="qty" value={ticketQun} onChange={HandleQuntity}>
        <option value="qty" hidden>Qty</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        
      </select>
    </div>
  )
}

export default SelectTicketQunatity
