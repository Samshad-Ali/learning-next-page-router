import React, { useContext } from 'react'
import { FormContext } from './Context'

const About = () => {
  const {data} = useContext(FormContext)
  return (
    <div>
      {
        data
      }
    </div>
  )
}

export default About