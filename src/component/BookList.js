import React, {useState} from 'react';
import Book from './Book';

function BookList() {
    const [books, setBooks] = useState([
        {id:1, img:'/images/american_promethius.jpg', title:'American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer', author:'Kai Bird,Martin J. Sherwin'},
        {id:2, img:'/images/fourth_wing.jpg', title:'Fourth Wing (The Empyrean, 1)', author:'Rebecca Yarros'},
        {id:3, img:'/images/a_little_life.jpg', title:'A Little Life Paperback – January 26, 2016', author:'Hanya Yanagihara'},
        {id:4, img:'/images/iron_flame.jpg', title:'Iron Flame (The Empyrean, 2)', author:'Rebecca Yarros'}, ]);

  return (
    <section className='booklist'>
      <Book  book={books[0]} />
      <Book  book={books[1]}/>
      <Book  book={books[2]} />
      <Book  book={books[3]}/>
    </section>
  );
}

export default BookList;