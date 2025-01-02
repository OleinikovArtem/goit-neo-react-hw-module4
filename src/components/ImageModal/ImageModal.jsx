import Modal from 'react-modal'
import PropTypes from 'prop-types'

function ImageModal({ image, closeModal }) {
  if (!image) return

  return (
    <Modal 
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={closeModal}
      isOpen={Boolean(image)}
      style={{
        content: {
          padding: 0,
          overflow: 'hidden',
          border: 'none'
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.7)'
        }
      }}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  )
}

ImageModal.propTypes = {
  image: PropTypes.object,
  closeModal: PropTypes.func.isRequired
}


export default ImageModal