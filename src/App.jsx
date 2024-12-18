import { useEffect, useState } from 'react'
import { getImages } from './services/unsplash'

import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'
import Loader from './components/Loader'

function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([])

  const handleSearch = (value) => setSearch(value)

  useEffect(() => {
    const searchValue = search.trim();
    if (!searchValue) return
    getImages(searchValue).then(setImages)
  }, [search])

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      <Loader />
    </div>
  )
}

export default App
