import React, {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
      fetchItems();
  }, []);

  const fetchItems = async () =>{
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters`
    )
    console.log(result.data)
    setItems(result.data)
    setIsLoading(false)
  } 

 return (
    <div className="container">
      <div className="header">
        <div>Breaking Bad</div>
      </div>
      <div className="search-bar">
        <input type="text"/>
        <SearchIcon className="search-bar-icon"/>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
