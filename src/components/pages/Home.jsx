import React, {useState,useEffect} from 'react'
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import Table from '../Table';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [searchedText, setSearchedText] = useState('');
  
    useEffect(() => {
        fetchItems();
    }, [searchedText]);
  
    const fetchItems = async () =>{
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${searchedText}`
      )
      setItems(result.data)
      setIsLoading(false)
    } 
    return (
        <div className="container">
      <div className="header">
        <div>Breaking Bad</div>
      </div>
      <div className="search-bar">
        <input 
        type="text"
        placeholder="Search by name..."
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        />
        <SearchIcon className="search-bar-icon"/>
      </div>
      <div className="table">
        <Table isLoading={isLoading} items={items} />
      </div>
    </div>
    )
}

export default Home;