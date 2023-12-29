
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

const page = () => {
    const {id} = useParams() || {} ;
  return (
    <div>
      helo
      <p>
         {id}
      </p>
    </div>
  )
}

export default page