import "./row.css";
const Seat = ({key1,key2}) => {
  return (
    <div className="chair">
        <li></li>
    </div>
  )
}
const Row = ({key1}) => {
    const list=[0,1,2,3,4,5,6,7,8,9];
    return (
        <div className="row">
            {list.map((i)=>{
                return (<Seat key={i} key2={i} key1={key1}/>)
            })}
        </div>
        
    )
}
const Matrix = () => {
    const list=[0,1,2,3,4,5,6,7,8,9];
    return (
        <div className="column">
            {list.map((j)=>{
                return (<Row key={j} key1={j}/>)
            })}
        </div>
        
    )
}

export default Matrix
