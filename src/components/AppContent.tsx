import React from 'react'

interface AppData{
title:string
description?:string
}

const AppContent:React.FC<AppData> = ({title,description}:AppData) => {
  return (
    <div className='w-full bg-blue-600 text-white'>
        <h1> {title} </h1>
        <p> {description} </p>
    </div>
  )
}

export default AppContent