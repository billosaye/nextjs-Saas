import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'

import { recentSessions } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
     <section className='home-section'>
      <CompanionCard 
      id="1"
      name="AlgoMaster"
      topic="Time Complexity Analysis"
      subject="algorithms"
      duration={45}
      color="#E5D0FF" 
      />

      <CompanionCard 
      id="2"
      name="WebWizard"
      topic="React Hooks & State Management"
      subject="web-development"
      duration={30}
      color="#BDE7FF" 
      />

      <CompanionCard 
      id="3"
      name="CyberGuard"
      topic="Cryptography Basics"
      subject="cybersecurity"
      duration={25}
      color="#FFA07A" 
      />           
     </section>

     <section className='home-section'>
      <CompanionList 
      title ="Recently Completed Sessions"
      companions = {recentSessions}
      classNames = "w-2/3 max-lg:w-full"      
      />
      <CTA />
     </section>
    </main>
  )
}

export default page