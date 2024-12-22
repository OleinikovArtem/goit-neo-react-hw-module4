import PropTypes from 'prop-types'
import styles from './LeadMoreBtn.module.css'

function LoadMoreBtn({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>Load more</button>
  )
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
}


export default LoadMoreBtn