import PropTypes from 'prop-types'
import styles from './ImageGallery.module.css'

import ImageCard from "./ImageCard";

function ImageGallery({ images = [] }) {
  return (
    <ul className={styles.gallery} >
      { images.map((image) => (
          <li  key={image.id} >
            <ImageCard {...image} />
          </li>
        )
      )}
    </ul>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default ImageGallery