import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Section1 from "./components/section1/Section1"
import Section2 from "./components/section2/Section2"
import BgSection from "./components/bgSection/BgSection"
import MidCard from "./components/midCard/MidCard"
import Section3 from "./components/section3/Section3"
import Section4 from "./components/section4/Section4"
import Footer from "./components/footer/Footer"
import "./App.css"
function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <BgSection color="yellow" className="section1">
        <Section1></Section1>
      </BgSection>
      <BgSection color="black" className="section2" type="mid">
        <Section2></Section2>
      </BgSection>
      <BgSection color="yellow" className="section3" type="mid">
        <MidCard></MidCard>
        <Section3></Section3>
      </BgSection>
      <BgSection color="black" className="sectio4" type="mid">
        <Section4></Section4>
      </BgSection>
      <Footer></Footer>
    </>
  )
}

export default App
