import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
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
      duration="10 minutes"
      color="#fcba03" 
      />

<CompanionCard 
      id="12"
      name="Country Explorer"
      topic="Country Information"
      subject="Geography"
      duration="14 minutes"
      color="#14fc03" 
      />

<CompanionCard 
      id="123"
      name="History Explorer"
      topic="GDP of the World"
      subject="Economics"
      duration="13 minutes"
      color="#036bfc" 
      />


           
     </section>


     <section className='home-section'>
      <CTA />
     </section>
    </main>
  )
}

export default page