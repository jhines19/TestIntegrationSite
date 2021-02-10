import React from 'react'
import HomePage from '../HomePage'
import {homeObjOne, homeObjThree, homeObjTwo, homeObjFour,} from './Data'
import Pricing from '../../pages/Pricing';

function Home() {
    return (
        <>
        <HomePage {...homeObjOne} />
        <HomePage {...homeObjThree} />
        <HomePage {...homeObjTwo} />
        <Pricing />
        <HomePage {...homeObjFour} />
        </>
    )
}

export default Home
