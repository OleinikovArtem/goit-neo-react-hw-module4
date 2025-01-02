import PropTypes from 'prop-types'
import styles from './LeadMoreBtn.module.css'
import { Circles } from 'react-loader-spinner'

function LoadMoreBtn({ onClick, loading }) {
  return (
    <div className='center'>
    { loading ? 
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading" 
      />
      : <button className={styles.btn} onClick={onClick} disabled={loading}>
        Load more
      </button>
    }
  </div>
  )
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}


export default LoadMoreBtn