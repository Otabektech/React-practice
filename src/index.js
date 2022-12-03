import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

// CSS
import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/51LuOq2b8aL.jpg",
  title: "Let It Snow",
  author: "Beth Moran",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/51ghwawugqL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
  title: "The Christmas Lodge",
  author: "Fiona Baker",
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste
          nam, molestias sunt consectetur quaerat minima ipsa labore tempora
          nobis eveniet eius. Exercitationem consectetur at suscipit ipsum
          corporis necessitatibus aliquam!
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
