import {useState} from "react";
import style from './style.module.scss';
import {useDispatch} from "react-redux";
import {setSearchBooks} from "../../store/books";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const onSearchHandler = (e) => {
    const word = e.target.value;
    setSearch(word);
    dispatch(setSearchBooks(word));
  }

  return (
    <input type='text' onChange={onSearchHandler} placeholder='Search...' value={search} className={style.searchContainer}/>
  )
};

export default Search;