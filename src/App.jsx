import { useEffect, useState } from 'react'
import { getImages } from './services/unsplash'

import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'
import Loader from './components/Loader'
import LoadMoreBtn from './components/LoadMoreBtn'
import ImageModla from './components/ImageModal'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMode, setIsLoadingMore] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  const handleSearch = (value) => setSearch(value)

  const handleLoadMore = async () => {
    setIsLoadingMore(true)
    const _page = page + 1
    const { results: newImages, total_pages } = await getImages(search, _page)

    setPage(_page)
    setImages(prev => prev.concat(newImages))
    setTotalPages(total_pages)
    setIsLoadingMore(false)
  }

  const handleSelectImage = (image) => {
    setSelectedImage(image)
  }

  const handleCloseModal = () => {
    handleSelectImage(null)
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
      <ImageGallery images={images} selectImage={handleSelectImage} />
      { isLoading ? <Loader /> : null }
      { isShowLoadMoreBtn ? <LoadMoreBtn onClick={handleLoadMore} loading={isLoadingMode} /> : null }
      <ImageModla image={selectedImage} closeModal={handleCloseModal} />
    </div>
  )
}

export default App

// https://www.npmjs.com/package/react-modal