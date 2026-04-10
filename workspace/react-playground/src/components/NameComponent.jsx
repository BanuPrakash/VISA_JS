import React, { memo, useState } from 'react'

 function NameComponent({name}) {
  console.log("Name Component renders!!!");
  return (
    
    <div>In NameComponent: {name} </div>
  )
}

export default memo(NameComponent);