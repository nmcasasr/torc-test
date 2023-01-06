import React, { useState } from 'react';
import { getBooks } from '../../adapters/api';
import { BookCardComponent, SearchBarComponent } from '../../components';
import './LandingPage.css';

function LandingPage() {

  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("title");

  const getBooksBySearch = async (category:string, searchValue:string) =>{
    let result = await getBooks(category,searchValue);
    if(result.data){
      console.log("<<< result", result)
      setBooks(result.data);
    }
  }

  const searchBooks = (inputResult:string) => {
    getBooksBySearch(category, inputResult);
  }

  const updateCategory = (category:string) => {
    setCategory(category);
  }

  const renderBooks = () =>{
    return books?.map( (book:any) =>{
      return <BookCardComponent key={book.book_id} {...book}/>
    })
  }
  return (
    <div>
      <SearchBarComponent updateBooks={searchBooks} updateCategory={updateCategory}></SearchBarComponent>
      <div className='book-cards-wrapper'>
      {books && renderBooks()}
      </div>
    </div>
  );
}

export default LandingPage;
