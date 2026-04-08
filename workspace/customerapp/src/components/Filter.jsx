export default function Filter({filterEvt}) {
  return (
    <div>
        <input type='text' 
        placeholder='search by name' 
        onChange={(evt) => filterEvt(evt.target.value)}
        />
    </div>
  )
}
