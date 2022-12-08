import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

// CSS
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/51LuOq2b8aL.jpg",
    title: "Let It Snow",
    author: "Beth Moran",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51ghwawugqL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
    title: "The Christmas Lodge",
    author: "Fiona Baker",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51gNNGZBXqL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
    title: "Second Chance Christmas",
    author: "Fiona Baker",
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
