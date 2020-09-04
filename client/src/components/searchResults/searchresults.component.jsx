import React from "react";
import "./searchresults.css";
import BookCart from "../images/librarian.png";
import BookCard from "../bookcard/bookcard.component";

export default function SearchResults(props) {

  const tempBooks = [
    {
      title: "Harry Potter",
      subtitle:
        "Harry Potter and the Sorcerer's Stone; Harry Potter and the Chamber of Secrets; Harry Potter and the Prisoner of Azkaban; Harry Potter and the Goblet of Fire; Harry Potter and the Order of the Phoenix; Harry Potter and the Half-Blood Prince; Harry Potter and the Deathly Hallows",
      authors: ["J. K. Rowling"],
      description:
        "A fabulous opportunity to own all seven Harry Potter titles - Harry Potter and the Philosopher's Stone, Harry Potter and the Chamber of Secrets, Harry Potter and the Prisoner of Azkaban, Harry Potter and the Goblet of Fire, Harry Potter and the Order of the Phoenix, Harry Potter and the Half-Blood Prince and Harry Potter and the Deathly Hallows- in a fantastic boxed set",
      image: {
        smallThumbnail:
          "http://books.google.com/books/content?id=p0mLvgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=p0mLvgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      link:
        "http://books.google.com/books?id=p0mLvgEACAAJ&dq=harry_potter&hl=&source=gbs_api",
      categories: ["Fantasy fiction, English"],
      pageCount: 607,
    },
    {
      title: "Harry Potter",
      subtitle: "The Deathly Hallows",
      authors: ["British"],
      description:
        "Harry Potter and the Deathly Hallows is the seventh and final novel of the Harry Potter series, written by British author J. K. Rowling. The book was released on 21 July 2007 by Bloomsbury Publishing in the United Kingdom, in the United States by Scholastic, and in Canada by Raincoast Books, ending the series that began in 1997 with the publication of Harry Potter and the Philosopher's Stone. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005), and the final confrontation between the wizards Harry Potter and Lord Voldemort. Rowling finished writing Harry Potter and the Deathly Hallows in January 2007. Before its release, Bloomsbury reportedly spent 10 million to keep the book's contents safe before its release date. American publisher Arthur Levine refused any copies of the novel to be released in advance for press review, although two reviews were submitted early. Shortly before release, photos of all 759 pages of the U.S. edition were leaked and transcribed, leading Scholastic to look for the source that had leaked it. Released globally in 93 countries, Deathly Hallows broke sales records as the fastest-selling book ever, a record it still held in 2012.[3] It sold 15 million copies in the first 24 hours following its release, including more than 11 million in the U.S. and UK alone. The previous record, 9 million in its first day, had been held by Harry Potter and the Half-Blood Prince. The novel has also been translated into over 120 languages.\"",
      image: {
        smallThumbnail:
          "http://books.google.com/books/content?id=KXyNjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=KXyNjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      link:
        "http://books.google.com/books?id=KXyNjwEACAAJ&dq=harry_potter&hl=&source=gbs_api",
      pageCount: 260,
    },
    {
      title: "Harry Potter",
      subtitle: "A Sticker Collection",
      authors: [". Warner Bros. Consumer Products Inc."],
      description:
        "Covering all eight films Harry Potter: The Sticker Collection is the exhaustive must have-sticker omnibus for true Harry Potter fans. More than 400 unique stickers from the Harry Potter™ film series! Harry Potter: A Sticker Collection is the first sticker book to include reusable stickers of characters, creatures, and magical items from all eight movies in the Harry Potte film series! Also included are photographs from Years 1 through 7 at Hogwarts and artwork depicting important wizarding locations such as Hogwarts, Hogsmeade, and the Ministry of Magic. This sticker collection can be used to relive your favorite Harry Potter moments and to decorate your locker, room, or notebook with Harry Potter movie magic. Included are stickers of: Harry, Ron, and Hermione VoldemortTM and the Death Eaters Magical Transportation Order of the PhoenixTM Weasleys’ Wizard Wheezes Magical Beasts, Creatures, and Beings Triwizard TournamentTM QuidditchTM . . . and much, much more!",
      image: {
        smallThumbnail:
          "http://books.google.com/books/content?id=EKeduAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=EKeduAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      link:
        "http://books.google.com/books?id=EKeduAAACAAJ&dq=harry_potter&hl=&source=gbs_api",
      categories: ["Juvenile Nonfiction"],
      pageCount: 27,
    },
    {
      title: "Harry Potter",
      image: {
        smallThumbnail:
          "http://books.google.com/books/content?id=XiPkPQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=XiPkPQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      link:
        "http://books.google.com/books?id=XiPkPQAACAAJ&dq=harry_potter&hl=&source=gbs_api",
    },
    {
      title: "Harry Potter",
      subtitle: "A Guide Book (Questions and Answers 2016)",
      authors: ["Maryann"],
      description:
        "Harry Potter: A Guide Book (Questions & Answers 2016) Well, well, well! We have read all the Harry Potter books, watched all the movies (or not!) and theorized a lot about the Golden Trio, their friends and associations and of course, the Ministry of Magic and Hogwarts School of Witchcraft and Wizardry! But what lies beyond the magical confines of Great Britain? What happens after the next generation of wizards catch the train to their destiny for the first time? This book will give you some interesting possibilities of what could or could not be the answers to some burning questions! Want to know more? Read along, Potterheads! ******************************* QUESTION 1: The synopsis of 'Harry Potter and the Cursed Child' says that 'Harry grapples with a past that refuses to stay where it belongs'. Now it could have something to do with the Dark Lord's horcruxes, but what could be another possible theory?....... READ MORE? BUY THIS BOOK RIGHT NOW!",
      image: {
        smallThumbnail:
          "http://books.google.com/books/content?id=d75cjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=d75cjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      link:
        "http://books.google.com/books?id=d75cjwEACAAJ&dq=harry_potter&hl=&source=gbs_api",
      pageCount: 52,
    },
    {
      title: "Harry Potter",
      subtitle:
        "Fandom de Harry Potter, Traducciones de Harry Potter, Debates Religiosos Sobre la Serie Harry Potter, Muggle, Mirror of Erised, Reliquia",
      authors: ["Fuente Wikipedia"],
      description:
        "Fuente: Wikipedia. Paginas: 41. Capitulos: Fandom de Harry Potter, Traducciones de Harry Potter, Debates religiosos sobre la serie Harry Potter, Muggle, Mirror of Erised, Reliquias de la Muerte, Patronus, Quidditch, Torneo de los tres magos, MuggleNet, Harry Potter and the Prisoner of Azkaban, Pureza de sangre, Titulo Indispensable de Magia Ordinaria, Snitch, La Batalla de Hogwarts, Expreso de Hogwarts, Auror, EXTASIS, Oclumancia, Marca tenebrosa de Voldemort, Parsel, Ministro de Magia, The Wizarding World of Harry Potter, Squib, Animago, Los mundos magicos de Harry Potter, Segunda batalla de Hogwarts, El Quisquilloso, Eleanor Columbus, Legilimancia, Pequeno Hangleton, Orden de Merlin, Sangre mestiza, Sangre sucia. Extracto: Harry Potter es una heptalogia de novelas fantasticas escrita por la autora britanica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de mago Harry Potter y sus amigos Ron Weasley y Hermione Granger, durante los siete anos que pasan en el Colegio Hogwarts de Magia y Hechiceria. El argumento se centra en la lucha entre Harry Potter y el malvado mago lord Voldemort, quien mato a los padres de Harry en su afan de conquistar el mundo magico. Desde el lanzamiento de la primera novela, Harry Potter y la piedra filosofal en 1997, la serie logro una inmensa popularidad, criticas favorables y exito comercial alrededor del mundo. Para diciembre de 2007, se habian vendido mas de 400 millones de copias de los siete libros, los cuales han sido traducidos a mas de 65 idiomas, entre los que se incluyen el latin y el griego antiguo. El septimo y ultimo libro, Harry Potter y las Reliquias de la Muerte fue lanzado mundialmente en ingles el 21 de julio de 2007, mientras que en espanol se publico el 21 de febrero de 2008. La editora Bloomsbury Publishing tiene los derechos de publicacion en ingles para el Reino Unido y el resto de Europa, mientras que la editorial Scholastic los tiene para Estados Unidos y la...",
      image: {
        smallThumbnail:
          "http://books.google.com/books/content?id=k7T_ngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=k7T_ngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      link:
        "http://books.google.com/books?id=k7T_ngEACAAJ&dq=harry_potter&hl=&source=gbs_api",
      pageCount: 42,
    },
    {
      title: "Harry Potter",
      subtitle:
        "Heptalogy, J. K. Rowling, Harry Potter (character), Ron Weasley, Hermione Granger, Hogwarts, Lord Voldemort, Harry Potter Universe",
      authors: ["Frederic P. Miller", "Agnes F. Vandome", "John McBrewster"],
      link:
        "http://books.google.com/books?id=4KU4QwAACAAJ&dq=harry_potter&hl=&source=gbs_api",
      pageCount: 296,
    },
    {
      title: "Harry Potter",
      authors: ["Emma Huddleston"],
      description:
        "Wands ready! Readers will learn about J.K. Rowling's bewitching series, its franchises and products, and the worldwide impact. The title features engaging infographics, informative sidebars, vivid photos, and a glossary.",
      image: {
        smallThumbnail:
          "http://books.google.com/books/content?id=C_r4wAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=C_r4wAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      link:
        "http://books.google.com/books?id=C_r4wAEACAAJ&dq=harry_potter&hl=&source=gbs_api",
      categories: ["Branding (Marketing)"],
      pageCount: 32,
    },
    {
      title: "Harry Potter: A History of Magic",
      authors: ["British Library"],
      description:
        "The official companion book to the special exhibition Harry Potter: A History of Magic, featuring an extraordinary treasure trove of magical artifacts, original drafts and drawings by J.K. Rowling, and additional material exclusive to the US run of this unforgettable exhibition! As we celebrate the 20th anniversary of Harry Potter and the Sorcerer's Stone in the US, readers everywhere are invited to explore the extraordinary subjects of the Hogwarts curriculum - Potions & Alchemy, Divination, Care of Magical Creatures, and more - and examine incredible historical artifacts, items from J.K. Rowling's personal archive, and stunning original artwork from Harry Potter series artists Mary GrandPré, Jim Kay, and Brian Selznick. Published in conjunction with the special exhibition Harry Potter: A History of Magic (coming to the New-York Historical Society after a record-breaking sold-out run at the British Library), this complete catalogue of the over 150 artifacts on display gives readers an up-close look at magical treasures from all over the world. Exclusive to the New York run are amazing artifacts from American institutions -- including an original Audubon illustration, a narwhal's tusk (or is it a unicorn's horn?), an ancient Iranian astrolabe, and more -- as well as never-before-seen original artwork by Mary GrandPré and early correspondence between J.K. Rowling and her American editor, Arthur Levine. This special publication is an essential volume for Harry Potter fans, history buffs, and bibliophiles, and a fascinating exploration of the history of the magic at the heart of the Harry Potter stories.",
      image: {
        smallThumbnail:
          "http://books.google.com/books/content?id=0rOWtgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=0rOWtgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      link:
        "http://books.google.com/books?id=0rOWtgEACAAJ&dq=harry_potter&hl=&source=gbs_api",
      categories: ["Juvenile Nonfiction"],
      pageCount: 272,
    },
    {
      title: "Harry Potter",
      subtitle: "Page to Screen",
      authors: ["Bob McCabe"],
      description:
        "Bob McCabe offers an in-depth look at the craftsmanship, artistry, technology, and more than ten-year journey that took the world's bestselling fiction from page to screen. From elaborate sets and luxurious costumes to advanced special effects and film making techniques, this title chronicles all eight Harry Potter films.",
      image: {
        smallThumbnail:
          "http://books.google.com/books/content?id=70WIZwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=70WIZwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      link:
        "http://books.google.com/books?id=70WIZwEACAAJ&dq=harry_potter&hl=&source=gbs_api",
      categories: ["Harry Potter films"],
      pageCount: 528,
    },
  ];
  
  return (
    <div className="SearchResults">
      <h3 style={{ textAlign: "left", marginLeft: "2rem" }}>Search results</h3>
      {/* {props.results&&props.results[0]? (
                props.results[0].map(item => <BookCard data={item}/>)
            ) : <img  style={{height:"200px"}} src={BookCart}></img>} */}
      {tempBooks.map((item) => {
        if (item.authors && item.description && item.subtitle) {
          return <BookCard data={item} />;
        }
      })}
    </div>
  );
}
