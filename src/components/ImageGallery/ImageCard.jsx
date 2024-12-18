import PropTypes from 'prop-types'
import styles from './ImageGallery.module.css'

function ImageCard({ urls, alt_description }) {
  return (
    <div className={styles.img}>
      <img src={urls.small} alt={alt_description} />
    </div>
  )
}

ImageCard.propTypes = {
  urls: PropTypes.object.isRequired,
  alt_description: PropTypes.string.isRequired,
}

export default ImageCard