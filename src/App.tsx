import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Outcomes } from './components/Outcomes'
import { TalentLandscape } from './components/TalentLandscape'
import { Preparation } from './components/Preparation'
import { VisualInterlude } from './components/VisualInterlude'
import { ExperienceProof } from './components/ExperienceProof'
import { PlacementVideo } from './components/PlacementVideo'
import { SalaryLandscape } from './components/SalaryLandscape'
import { Recruiters } from './components/Recruiters'
import { Footer } from './components/Footer'
import './styles/globals.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Outcomes />
        <TalentLandscape />
        <VisualInterlude />
        <Preparation />
        <PlacementVideo />
        <ExperienceProof />
        <SalaryLandscape />
        <Recruiters />
      </main>
      <Footer />
    </div>
  )
}
