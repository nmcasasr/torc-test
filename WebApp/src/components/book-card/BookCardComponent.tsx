import './BookCardComponent.css';

const BookCardComponent = (props:any) => {

  return (
    <div className="card">
      <div className='image-wrapper'>
        <img src="https://loremflickr.com/100/100/book" alt="book" className="book-tumbnail"></img>
      </div>
      <div className="book-content">
          <div className="title">
            {props.title}
          </div>
          <div className='information-wrapper'>
            <div className='general-information'>
                <div className="author">
                  Author: {props.first_name} {props.last_name}
                </div>
                <div className="category">
                  Category: {props.category}
                </div>
                <div className="type">
                  Type: {props.type}
                </div>
                <div className="isbn">
                  ISBN: {props.isbn}
                </div>
            </div>
            <div className='copies-wrapper'>
              Books available
              <div className='copies-information'>
              <span className='copies'>
              {props.copies_in_use}/{props.total_copies}
              </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default BookCardComponent;
