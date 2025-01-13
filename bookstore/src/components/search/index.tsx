import {useState} from "react";
import style from './style.module.scss';

const Search = () => {
  const [search, setSearch] = useState('');

  const onSearchHandler = (e) => {
    const word = e.target.value;
    setSearch(word);
  }

  return (
    <input type='text' onChange={onSearchHandler} placeholder='Search...' value={search} className={style.searchContainer}/>
  )
};

export default Search;