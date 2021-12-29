import React from 'react'
import spiner from '../../img/spinner.gif'

function Spiner() {
    return (
       <img src={spiner} style={{width:"200px",margin:'auto',display:'block'}} alt="Loading" />
    )
}

export default Spiner
