import React from 'react'

function Navbar() {
  return (
    <>
    <div>Navbar</div>
    <div>
       <ul className="des-nav">
            <li className='des-nav-item'><button className={currentDestination === 0 ? "current": ""} onClick={() => setDestination(0)}>Moon</button></li>
            <li className='dest-nav-item'><button className={currentDestination === 1 ? "current": ""} onClick={() => setDestination(1)}>Mars</button></li>
            <li className='dest-nav-item'><button className={currentDestination === 2 ? "current": ""} onClick={() => setDestination(2)}>Europa</button></li>
            <li className='dest-nav-item'><button className={currentDestination === 3 ? "current": ""} onClick={() => setDestination(3)}>Titan</button></li>
        </ul>

    </div>
    </>
  )
}

export default Navbar