import { useEffect, useState } from 'react'
import { getImages } from './services/unsplash'

import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'
import Loader from './components/Loader'

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    getImages().then(setImages)
  }, [])

  return (
    <div>
      <SearchBar onSubmit={(value) => console.log('search value:', value)} />
      <ImageGallery />
      <Loader />
    </div>
  )
}

export default App
