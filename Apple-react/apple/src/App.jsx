
import './App.css'
import Headers from './components/Header/Headers.jsx'
import Footers from './components/Footer/Footers.jsx'
import Banners from './components/Banner/Banners.jsx'
import ElevenPros from './components/ElevenPro/ElevenPros.jsx'
import IPhoneEleven from './components/IEleven/IphoneEleven.jsx'
import WatchCards from './components/WatchCard/WatchCards.jsx'
import AirPodsTv from './components/AirPodTv/AirPodsTv.jsx'
import MacIpad from './components/MacIpad/MacIpad.jsx'

import './css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'

// function App() {


//   return (
//     <div>
//     <Headers/>
//     <Banners/>
//     <ElevenPros/>
//     <IPhoneEleven/>
//     <WatchCards/>
//     <AirPodsTv/>
//     <MacIpad/>
//     <Footers/>
//    </div>
//   )
// }

// export default App


import React, { Component } from 'react'

 class App extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Banners/>
        <ElevenPros/>
        <IPhoneEleven a="iPhone 11" b="Just the right amount of everything." c="From $16.62/mo. or $399 with trade‑in."/>
        <WatchCards/>
        <AirPodsTv/>
        <MacIpad/>
        <Footers/>
      </div>
    )
  }
}

export default App;
