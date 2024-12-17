
import './App.scss'
import CitiesSection from './components/citiesSection/citiesSection'
import Footer from './components/footer/Footer'
import FutureSection from './components/futureSection/futureSection'
import Header from './components/header/header'
import InfoSection from './components/infoSection/infoSection'
import MembersSection from './components/membersSection/membersSection'
import MoveSection from './components/moveSection/moveSection'
import RideSection from './components/rideSection/rideSection'
import SubscriptionSection from './components/subscriptionSection/subscriptionSection'
import WorksSection from './components/worksSection/worksSection'

function App() {
  return (
    <>
      <Header/>
      <FutureSection/>
      <WorksSection/>
      <MoveSection/>
      <RideSection/>
      <CitiesSection/>
      <SubscriptionSection/>
      <InfoSection/>
      <MembersSection/>
      <Footer/>
    </>
  )
}

export default App
