import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { getImages } from './services/unsplash'

import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'
import Loader from './components/Loader'
import LoadMoreBtn from './components/LoadMoreBtn'
import ImageModal from './components/ImageModal'
import ErrorMessage from './components/ErrorMessage'

const ERROR_MESSAGE = 'Something went wrong. Please try again later. If the error is repeated, check your internet connection or contact the developer.'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [withLoadingMore, setWithLoadingMore] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  const handleSearch = async (value) => {
    setSearch(value)
  }

  const handleLoadMore = async () => {
    setPage(page => page + 1)
  }

  const handleSelectImage = (image) => {
    setSelectedImage(image)
  }

  const handleCloseModal = () => {
    handleSelectImage(null)
  }

  useEffect(() => {
    const searchValue = search.trim();
    if (!searchValue) return

    const getData = async (search, page) => {
      try {
        setError(null)
        const { results, total_pages } = await getImages(search, page)
  
        setImages(images => page === 1 ? results || [] : images.concat(results))
        setWithLoadingMore(total_pages > page)
      } catch (error) {
        console.error(error)
        setError('Something went wrong...')
      } finally {
        setIsLoading(false)
      }
    }

    setIsLoading(true)
    getData(search, page)
  }, [search, page])

  const isShowLoadMoreBtn = !isLoading && withLoadingMore

  return (
    <div className='app'>
      <SearchBar onSubmit={handleSearch} />
      { error && <ErrorMessage message={ERROR_MESSAGE}  /> }
      { !error && <ImageGallery images={images} selectImage={handleSelectImage} /> }
      { isLoading && <Loader /> }
      { isShowLoadMoreBtn && <LoadMoreBtn onClick={handleLoadMore} loading={isLoading} /> }
      <ImageModal image={selectedImage} closeModal={handleCloseModal} />
      <ToastContainer />
    </div>
  )
}

export default App
