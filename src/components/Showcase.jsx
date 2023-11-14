import './Showcase.css'
import { PiChairDuotone} from 'react-icons/pi';
const Showcase = () => {
  return (
    <div className='right'>
    <div>
      <h3>Key to Seat Layout</h3>
      <ul>
        <li>
          <PiChairDuotone className='available seat' style={{width:"35px",height:"35px"}} />
          <p>Available</p></li>

        <li>
          <PiChairDuotone className='unavailable size' />
          <p>Unavailable</p></li>

        <li>
          <PiChairDuotone className='yourselection size' />
          <p>Selected</p></li>

          <li>
          <PiChairDuotone className='premiumcolor size ' />
          <p>Premium</p></li>

      </ul>
    </div>
  </div>
  )
}

export default Showcase
