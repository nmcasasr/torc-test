import React, { useState }  from 'react';
import {search} from '../../images';
import './SearchBarComponent.css';

const SearchBarComponent = (props:any) => {
  const [bookSearchInformation, setbookSearchInformation] = useState("");
  const [category, setCategory] = useState("title");
  const bookCategory = [{
    value: 'title',
    name: "Title",
  },
  {
    value: 'first_name',
    name: "Author First Name",
  },
  {
    value: 'last_name',
    name: "Author Last Name",
  },
  {
    value: 'type',
    name: "Type",
  },
  {
    value: 'category',
    name: "Category",
  },
  {
    value: 'isbn',
    name: "ISBN",
  },
  ]
  const {updateBooks, updateCategory} = props;

  const onchangeInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setbookSearchInformation(event.target.value);
  }

  const handleSubmit = (event:any) =>{
    updateBooks(bookSearchInformation);
  }

  const handleChangeCategory = (event:any) =>{
    setCategory(event.target.value)
    updateCategory(event.target.value)
  }

  const categoryOptions = () => {
    return bookCategory?.map( (category:any) =>{
      return <option value={category.value}>{category.name}</option>
    })
  }

  return (
    <div className="search-bar">
        <div className="bar-content">
            <div className="caregory-selector">
            <select value={category} onChange={handleChangeCategory} className="category-select">
              {categoryOptions()}
            </select>
            </div>
           <input type="text" value={bookSearchInformation} 
           onChange={onchangeInput}
           placeholder="book title, book type, author..." 
           className="input-book"/>
           <button className="search-button" onClick={handleSubmit}>
             <img src={search} alt="search" className="search-icon"/>
           </button> 
        </div>  
    </div>
  );
}

export default SearchBarComponent;
