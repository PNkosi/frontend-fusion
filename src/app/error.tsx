"use client"

import { IconAlertTriangle } from '@tabler/icons-react'
import React from 'react'

type Props = {}

const Error = (props: Props) => {
  return (
    <div className='h-[90vh] flex items-center justify-center gap-8'>
        <IconAlertTriangle size={80} className='text-red-400'/>
        <h1 className="text-4xl font-bold">Error</h1>
        <p>Something went wrong. Please try to refresh the page</p>
    </div>
  )
}

export default Error