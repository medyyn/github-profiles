import React from 'react'

function Container({children}) {
  return (
    <div className=' px-6 xl:px-0 max-w-[1240px] mx-auto w-full'>{children}</div>
  )
}

export default Container