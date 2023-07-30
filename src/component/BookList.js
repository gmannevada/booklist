import React, {useState} from 'react';
import Book from './Book';
import EventExample from './EventExample';
import img5 from '../images/atomic_habbits.jpg'; 


function BookList() {
    const [books, setBooks] = useState([
        {id:1, img:'/images/american_promethius.jpg', title:'American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer', author:'Kai Bird,Martin J. Sherwin'},
        {id:2, img:'/images/fourth_wing.jpg', title:'Fourth Wing (The Empyrean, 1)', author:'Rebecca Yarros'},
        {id:3, img:'/images/a_little_life.jpg', title:'A Little Life Paperback – January 26, 2016', author:'Hanya Yanagihara'},
        {id:4, img:'/images/iron_flame.jpg', title:'Iron Flame (The Empyrean, 2)', author:'Rebecca Yarros'}, 
        // {id:5, img: img5, title:'Atomic Habits', author:'James Clear'}
    ]);
        

  return (
    <>
     <h1>amazon best sellers</h1>
     <section className='booklist'>
        {/* <EventExample / > */}
            {books.map((book,index)=>{
            return <Book {...book} key={book.id} number={index} />
      })}
     </section>
    </>
  );
}

export default BookList;