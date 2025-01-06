import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import styles from './SearchBar.module.css'
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSubmit }) => {
  
  const handleOnSumbit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const searchValue = data.get('search')

    if (!searchValue.trim()) {
      toast.error('Search can\'t be empty')
      return
    }

    onSubmit(searchValue)

    event.target.reset()
  }

  return (
    <header className={styles.header}>
      <form onSubmit={handleOnSumbit} className={styles.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name='search'
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          <IoIosSearch />
        </button>
      </form>
    </header>
  )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchBar
