import React from 'react'
import HomePage from '../HomePage'
import {homeObjThree, homeObjTwo, homeObjFour,} from './Data'
import Pricing from '../../pages/Pricing';

function Home() {
    return (
        <>
        <HomePage {...homeObjThree} />
        <HomePage {...homeObjTwo} />
        <Pricing />
        <HomePage {...homeObjFour} />
        </>
    )
}

export default Home
