import PropTypes from 'prop-types'
import styles from './ImageGallery.module.css'

function ImageCard({ urls, alt_description, selectImage, ...rest }) {

  const handleSelectImage = () => {
    selectImage({
      urls, alt_description, ...rest
    })
  }
  
  return (
    <div className={styles.img}>
      <img src={urls.small} alt={alt_description} onClick={handleSelectImage} />
    </div>
  )
}

ImageCard.propTypes = {
  urls: PropTypes.object.isRequired,
  alt_description: PropTypes.string.isRequired,
  selectImage: PropTypes.func.isRequired,
}

export default ImageCard