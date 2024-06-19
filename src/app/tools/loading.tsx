import React from 'react'
import { IconLoader3 } from '@tabler/icons-react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='h-[90vh] flex items-center justify-center gap-8'>
        <IconLoader3 size={80} className='text-indigo-500 animate-spin' />
    </div>
  )
}

export default Loading