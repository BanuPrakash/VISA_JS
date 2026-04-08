
//export default function CustomerRow(props) {
export default function CustomerRow({customer, delEvt}) {
//   let {id, firstName, lastName} = props.customer;
// props.delEvt
    let {id, firstName, lastName} = customer;
  
  return (
    <div>
        {firstName}, {lastName} &nbsp; &nbsp;
        <button type='button' 
          onClick={() => delEvt(id)}>
            Delete
        </button>
    </div>
  )
}
