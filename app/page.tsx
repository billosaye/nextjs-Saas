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
      name="Neura the Brain Explorer"
      topic="Neural Network of the Brain"
      subject="Neuroscience"
      duration={10}
      color="#fcba03" 
      />

<CompanionCard 
      id="12"
      name="Country Explorer"
      topic="Country Information"
      subject="Geography"
      duration={14}
      color="#14fc03" 
      />

<CompanionCard 
      id="123"
      name="History Explorer"
      topic="GDP of the World"
      subject="Economics"
      duration={13}
      color="#036bfc" 
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