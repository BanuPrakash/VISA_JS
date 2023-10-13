export default function Filter({filterEvt}) {
    return <input type="text" 
    placeholder="search by name" 
    onChange={(evt) => filterEvt(evt.target.value)}
    />
}