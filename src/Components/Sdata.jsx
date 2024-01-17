const Sdata = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
    image:
      "https://screenrant.com/wp-content/uploads/2023/05/the-godfather-poster.jpeg",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
    image:
      "https://kbimages1-a.akamaihd.net/ccb5b77d-1ee3-4600-a689-74c259f7cd06/1200/1200/False/pulp-fiction-4.jpg",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    genre: "Drama",
    image: "https://m.media-amazon.com/images/I/71o1aRN1FJL.jpg",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/707d3da8c5a899ae82416fbec4a26bef3420d95b674bb2093745eecf615a3d47._RI_TTW_.jpg",
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi",
    image:
      "https://musicart.xboxlive.com/7/c96d1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    genre: "Sci-Fi",
    image:
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/12/20/thumbs/800x531/168519.jpg?v=1639985080",
  },
  {
    title: "Goodfellas",
    director: "Martin Scorsese",
    year: 1990,
    genre: "Crime",
    image:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8f91eecb6351cdbc086aa6f5f8e8fab4_55d7937d-040b-44d2-88ba-24ef92a17a28_450x.jpg?v=1573590306",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    year: 2001,
    genre: "Fantasy",
    image:
      "https://images.moviesanywhere.com/198e228b071c60f5ad57e5f62fe60029/ff22cad6-2218-414d-b853-3f95d76905c7.jpg",
  },
  {
    title: "The Lion King",
    director: "Roger Allers, Rob Minkoff",
    year: 1994,
    genre: "Animation",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thelionking_19752_1_0b9de87b.jpeg",
  },
  {
    title: "The Avengers",
    director: "Joss Whedon",
    year: 2012,
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    title: "Schindler's List",
    director: "Steven Spielberg",
    year: 1993,
    genre: "Biography",
    image:
      "https://m.media-amazon.com/images/I/81+H4lZVw+L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Sci-Fi",
    image:
      "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Gladiator",
    director: "Ridley Scott",
    year: 2000,
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/I/51GA6V6VE1L._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Titanic",
    director: "James Cameron",
    year: 1997,
    genre: "Romance",
    image: "https://pbs.twimg.com/media/Fon8-EDXsAEv8T1?format=jpg&name=large",
  },
  {
    title: "Inglourious Basterds",
    director: "Quentin Tarantino",
    year: 2009,
    genre: "War",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Departed",
    director: "Martin Scorsese",
    year: 2006,
    genre: "Crime",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/95e48af6a709c401a3d04171e704832263be6d48d10e7450a98328a7475cbe37._RI_TTW_.jpg",
  },
  {
    title: "Avatar",
    director: "James Cameron",
    year: 2009,
    genre: "Sci-Fi",
    image:
      "https://images.theconversation.com/files/501182/original/file-20221214-14389-tahjkr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
  },
  {
    title: "The Prestige",
    director: "Christopher Nolan",
    year: 2006,
    genre: "Mystery",
    image:
      "https://i0.wp.com/worleygig.com/wp-content/uploads/2006/10/the_prestige-e1445513409117.jpg?ssl=1",
  },
];

export default Sdata;
