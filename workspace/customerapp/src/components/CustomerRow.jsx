
//export default function CustomerRow(props) {
export default function CustomerRow({customer}) {
//   let {id, firstName, lastName} = props.customer;
    let {id, firstName, lastName} = customer;
  return (
    <div>
        {firstName}, {lastName} &nbsp; &nbsp;
        <button type='button'>Delete</button>
    </div>
  )
}
