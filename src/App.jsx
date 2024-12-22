import { useEffect, useState } from 'react'
import { getImages } from './services/unsplash'

import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'
import Loader from './components/Loader'
import LoadMoreBtn from './components/LoadMoreBtn'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [images, setImages] = useState([])

  const handleSearch = (value) => setSearch(value)

  const handleLoadMore = async () => {
    const { results: newImages, total_pages } = await getImages(search, page)
    setPage(prev => prev + 1)
    setImages(prev => prev.concat(newImages))
    setTotalPages(total_pages)
  }

  const isShowLoadMoreBtn = !isLoading && images.length > 0 && totalPages > page

  useEffect(() => {
    const searchValue = search.trim();
    if (!searchValue) return
    setIsLoading(true)
    getImages(searchValue)
      .then(({ results, total_pages }) => {
        setImages(results || [])
        setTotalPages(total_pages)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [search])

  return (
    <div className='app'>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      { isLoading ? <Loader /> : null }
      { isShowLoadMoreBtn ? <LoadMoreBtn onClick={handleLoadMore} /> : null }
    </div>
  )
}

export default App
