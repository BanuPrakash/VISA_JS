import React, { memo } from 'react'

 function AgeComponent({age}) {
 console.log("Age Component renders!!!");
  return (
    <div>In AgeComponent : {age} </div>
  )
}

export default memo(AgeComponent);