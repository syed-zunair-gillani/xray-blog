import React from 'react'

const Container = ({children, className}:any) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  )
}

export default Container