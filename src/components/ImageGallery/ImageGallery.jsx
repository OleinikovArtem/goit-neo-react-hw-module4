import PropTypes from 'prop-types'
import styles from './ImageGallery.module.css'

import ImageCard from "./ImageCard";

function ImageGallery({ images = [], selectImage }) {  
  return (
    <ul className={styles.gallery} >
      { images.map((image, index) => (
          <li  key={image.id + index} >
            <ImageCard {...image} selectImage={selectImage} />
          </li>
        )
      )}
    </ul>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  selectImage: PropTypes.func.isRequired,
}

export default ImageGallery