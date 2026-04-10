import React, { memo } from 'react'

 function AgeComponent({age}) {
 console.log("Age Component renders!!!");
  return (
    <div>In AgeComponent : {age} </div>
  )
}

function doCheck(prevProps, props) {
    if(props.age > prevProps.age + 5) {
        return true;
    }
    else false;
}
export default memo(AgeComponent, doCheck);