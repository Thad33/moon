import React, { useState } from 'react'
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

function Main() {

    let [currentDestination, setDestination] = useState(0); // change this to show a different destination

  return (
    <div className='destinations-wrapper'>
        <ul className="destinations-navigation">
            <li className='destinations-navigation-item'><button className={currentDestination === 0 ? "current": ""} onClick={() => setDestination(0)}>Moon</button></li>
            <li className='destinations-navigation-item'><button className={currentDestination === 1 ? "current": ""} onClick={() => setDestination(1)}>Mars</button></li>
            <li className='destinations-navigation-item'><button className={currentDestination === 2 ? "current": ""} onClick={() => setDestination(2)}>Europa</button></li>
            <li className='destinations-navigation-item'><button className={currentDestination === 3 ? "current": ""} onClick={() => setDestination(3)}>Titan</button></li>
        </ul>

        <div className='destinations'>
            {/** Destination */}
            <div className={currentDestination === 0 ? "show destination" : "hide destination"}>
                <div className='destination-image'>
                    <img src={moon} alt="" />
                </div>
                <div className='destination-description'>
                    <h1 className='destination-title'>MOON</h1>
                    <div className='destination-para'>
                        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    </div>
                    <div className='destination-numbers'>
                        <div className='destination-distance'>
                            <small>AVG. DISTANCE</small>
                            <p>384, 400 KM</p>
                        </div>
                        <div className='destination-travel-time'>
                            <small>EST. TRAVEL TIME</small>
                            <p>3 DAYS</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** End destination */}
            {/** Destination */}
            





            {/** End destination */}
            {/** Destination */}
            <div className={currentDestination === 2 ? "show destination" : "hide destination"}>
                <div className='destination-image'>
                    <img src={europa} alt="" />
                </div>
                <div className='destination-description'>
                    



                </div>
            </div>
            {/** End destination */}
            {/** Destination */}
            <div className={currentDestination === 3 ? "show destination" : "hide destination"}>
                <div className='destination-image'>
                    <img src={titan} alt="" />
                </div>
                <div className='destination-description'>
                    
                    
                </div>
            </div>
            {/** End destination */}
        </div>
    </div>
  )
}

export default Main