import React, {useEffect} from 'react'

const ExplorePage  = () => {

    useEffect(() => {
        document.title = "Explore";
    })

  return (
    <div className='app-page rel'>
        <h1 className='page-title s24 fontb c333'>
            Explore 
        </h1>

    </div>
  )
}

export default ExplorePage 