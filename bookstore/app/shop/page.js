import React from "react";
import styles from "./shop.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Product from "../Components/Product.js";
// import Book from '../components/Book/Book.js';

const bookData = [
  {
    id: 1,
    title: "Infinite Powers",
    image: "/images/book1.jpeg",
    description:
      'In the Land of Eldoria: The Crystal Kingdom" is a captivating fantasy book set in a magical realm where the fate of the world rests on the shoulders of a young protagonist named Aria.',
    catogory: "classic",
    price: 75,
    rate: 4.5,
  },
  {
    id: 2,
    title: "When Do Hippos Play?",
    image: "/images/book9.jpeg",
    description:
      "Along the way, she forms alliances with elves, dwarves, and dragons, each offering unique strengths to aid her on her journey.",
    catogory: "poety",
    price: 55,
    rate: 3.5,
  },
  {
    id: 3,
    title: "Story Thieves",
    image: "/images/book7.jpeg",
    description:
      'In the Land of Eldoria: The Crystal Kingdom" is a captivating fantasy book set in a magical realm where the fate of the world rests on the shoulders of a young protagonist named Aria.',
    catogory: "short story ",
    price: 38,
    rate: 2.5,
  },
  {
    id: 4,
    title: "Data Science",
    image: "/images/book2.jpeg",
    description:
      "Data science books cover a wide range of topics, from algorithms and data structures to artificial intelligence and machine learning.",
    catogory: "classic",
    price: 79,
    rate: 4.5,
  },
  {
    id: 5,
    title: "The Complete Software Developer`s",
    image: "/images/book16.jpeg",
    description:
      "A software developer`s book typically explores various scientific concepts, theories, and discoveries in a structured and informative manner",
    catogory: "classic",
    price: 85,
    rate: 4.5,
  },
  {
    id: 6,
    title: "JavaScript",
    image: "/images/book3.jpeg",
    description:
      "These books can be targeted towards beginners, intermediate learners, or advanced practitioners, catering to various levels of expertise.",
    catogory: "classic",
    price: 150,
    rate: 5.0,
  },
  {
    id: 7,
    title: "Jungle",
    image: "/images/book8.jpeg",
    description:
      "Filled with mythical creatures, ancient prophecies, and epic battles, Aria embarks on a quest to retrieve the lost Crystal of Power before it falls into the hands of the dark sorcerer, Zephyr.",
    catogory: "short story",
    price: 30,
    rate: 1.5,
  },
  {
    id: 8,
    title: "System Analysis",
    image: "/images/book4.jpeg",
    description:
      "A system analysis book typically explores various scientific concepts, theories, and discoveries in a structured and informative manner",
    catogory: "classic",
    price: 79,
    rate: 4.5,
  },
  {
    id: 9,
    title: "Guide To Graphic Design",
    image: "/images/book1.jpeg",
    description:
      "It may cover topics such as graphic designing , presenting complex ideas in a clear and accessible way for readers of different levels of expertise",
    catogory: "graphics",
    price: 20,
    rate: 1.0,
  },
  {
    id: 10,
    title: "Computer Science",
    image: "/images/book15.jpeg",
    description:
      "It may cover topics such as physics,Elective Mathematics ,  IT-science, presenting complex ideas in a clear and accessible way for readers of different levels of expertise.",
    catogory: "science fiction",
    price: 70,
    rate: 4.5,
  },
  {
    id: 11,
    title: "Take My Hand",
    image: "/images/book10.jpeg",
    description:
      "As Aria confronts her own doubts and fears, she discovers her true destiny and the power within herself to save Eldoria from darkness.",
    catogory: "poety",
    price: 50,
    rate: 3.5,
  },
  {
    id: 12,
    title: "The Big Oyster",
    image: "/images/book11.jpeg",
    description:
      "In the heart of a mystical land lies an ancient forest shrouded in mystery and magic. ",
    catogory: "short story",
    price: 48,
    rate: 3.0,
  },
  {
    id: 13,
    title: "Computer System Design",
    image: "/images/book5.jpeg",
    description:
      "Computer science books cover a wide range of topics, from algorithms and data structures to artificial intelligence and machine learning. ",
    catogory: "science fiction",
    price: 69,
    rate: 4.55,
  },
  {
    id: 14,
    title: "CODING",
    image: "/images/book13.jpeg",
    description:
      "They often provide comprehensive explanations, code examples, and exercises to help readers understand and apply concepts.",
    catogory: "science fiction",
    price: 78,
    rate: 4.75,
  },
  {
    id: 15,
    title: "Start Your Own Business",
    image: "/images/book17.jpeg",
    description:
      "As Lily delves deeper into the forest, she encounters a diverse cast of characters, from mischievous fairies to wise old wizards. Along the way, she must solve riddles, overcome challenges, and confront her fears as she unravels the forest.",
    catogory: "fantasy",
    price: 87,
    rate: 4.85,
  },
  {
    id: 16,
    title: "Small Business Big Money",
    image: "/images/book18.jpeg",
    description:
      " Join Lily on her epic quest through a world where anything is possible and magic lurks around every corner.",
    catogory: "fantasy",
    price: 99,
    rate: 4.8,
  },
  {
    id: 17,
    title: "CCSE-IV",
    image: "/images/book12.jpeg",
    description:
      "The Enchanted Forest is a timeless tale of courage, friendship, and the power of imagination.",
    catogory: "fantasy",
    price: 60,
    rate: 3.8,
  },
  {
    id: 18,
    title: "How Big Things Get Done",
    image: "/images/book1.jpeg",
    description:
      "As Aria confronts her own doubts and fears, she discovers her true destiny and the power within herself to save Eldoria from darkness.",
    catogory: "poety",
    price: 50,
    rate: 3.2,
  },
  {
    id: 19,
    title: "Programming Languages",
    image: "/images/book14.jpeg",
    description:
      "These books often include illustrations, diagrams, and real-world examples to enhance understanding and engage the reader in the wonders of the natural world and the principles that govern it.",
    catogory: "science fiction",
    price: 80,
    rate: 4.2,
  },
  {
    id: 20,
    title: "Machine Learning",
    image: "/images/book6.jpeg",
    description:
      "These books often include illustrations, diagrams, and real-world examples to enhance understanding and engage the reader in the wonders of the natural world and the principles that govern it.",
    catogory: "science fiction",
    price: 100,
    rate: 4.9,
  },
];

export default function page() {
  //   console.log(bookData);
  return (
    <>
      <div className={styles.shop__container}>
        <div className={styles.navigations}>
          <div className={styles.logo}>
            <h1 className={styles.logo}>BookHaven 📖</h1>
          </div>
          <div className={styles.nav}>
            <nav>
              <ul>
                <li>
                  <a href="/">
                    {" "}
                    <HomeIcon className={styles.icons} />
                    Home
                  </a>
                </li>
                <li></li>
                <li>
                  <a href="about">
                    {" "}
                    <InfoIcon className={styles.icons} />
                    About
                  </a>
                </li>
                <li>
                  <a href="contact">
                    <ContactsIcon className={styles.icons} />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="Backet">
                    <ShoppingBasketIcon className={styles.icons} />
                    <span>0</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.search}>
          <input
            type="search"
            name="search "
            id={styles.searchInput}
            placeholder="Search Books "
          />
          <button type="search" id={styles.searchbtn}>
            Search
          </button>
        </div>
        {/* <div className={styles.shopmargin}>
      <div>
        {bookData.map((book)=> <Book book={book} key={book.id} />)}
      </div>
      </div> */}
        <div className={styles.shop__image}>
          <img
            className={styles.shop__bg}
            src="/images/book.bg1.jpeg"
            alt="shop"
          />
        </div>
        <div className={styles.product__container}>
          <div className={styles.product__row}>
            <Product
              title="Infinite Powers"
              price={29.99}
              image="/images/book1.jpeg"
              rating={4}
            />
            <Product
              title="Javascript for beginners"
              price={39.99}
              image="/images/book3.jpeg"
              rating={5}
            />
            <Product
              title="Systems analysis and design"
              price={33.99}
              image="/images/book4.jpeg"
              rating={5}
            />
          </div>
          <div className={styles.product__row}>
            <Product
              title="Machine Learning system design interview for developers "
              price={41.99}
              image="/images/book6.jpeg"
              rating={5}
            />
            <Product
              title="Story Thieves"
              price={12.99}
              image="/images/book7.jpeg"
              rating={2}
            />
          </div>
          <div className={styles.product__row}>
            <Product
              title="Take my hand"
              price={15.99}
              image="/images/book10.jpeg"
              rating={3}
            />
            <Product
              title="Coding basics for beginners"
              price={23.99}
              image="/images/book13.jpeg"
              rating={5}
            />
            <Product
              title="programming languages for Machine Learning"
              price={45.99}
              image="/images/book14.jpeg"
              rating={5}
            />
            <Product
              title="The complete software developer`s career guide"
              price={30.99}
              image="/images/book16.jpeg"
              rating={5}
            />
          </div>
          <div className={styles.product__row}>
            <Product
              title="Small business ideas for beginners"
              price={25.99}
              image="/images/book18.jpeg"
              rating={4}
            />
            <Product
              title="How to do thing in a smart way"
              price={13.99}
              image="/images/book19.jpeg"
              rating={4}
            />
          </div>
          <div className={styles.product__row}>
            <Product
              title="Guide to Graphic design"
              price={28.99}
              image="/images/book20.jpeg"
              rating={5}
            />
            {/* <Product /> */}
          </div>
        </div>
      </div>
    </>
  );
}
