export interface IBook {
  id: string
  title: string
  author: string
  price: string
  image: string
  discount?: string
  newPrice?: string
}

export interface IBookSliderData {
  id: string
  books: IBook[]
}

export const features: IBookSliderData[] = [
  {
    id: '1',
    books: [
      {
        id: '1',
        title: 'Simple way of piece life',
        author: 'Armor Ramsey',
        price: '$ 40.00',
        image: 'book5.png',
      },
      {
        id: '2',
        title: 'Great travel at desert',
        author: 'Sanchit Howdy',
        price: '$ 38.00',
        image: 'book3.png',
      },
      {
        id: '3',
        title: 'The lady beauty Scarlett',
        author: 'Arthur Doyle',
        price: '$ 45.00',
        image: 'book16.png',
      },
      {
        id: '4',
        title: 'Once upon a time',
        author: 'Klien Marry',
        price: '$ 35.00',
        image: 'book4.png',
      },
    ],
  },
  {
    id: '2',
    books: [
      {
        id: '1',
        title: 'Simple way of piece life',
        author: 'Armor Ramsey',
        price: '$ 40.00',
        image: 'book5.png',
      },
      {
        id: '2',
        title: 'Great travel at desert',
        author: 'Sanchit Howdy',
        price: '$ 38.00',
        image: 'book3.png',
      },
      {
        id: '3',
        title: 'The lady beauty Scarlett',
        author: 'Arthur Doyle',
        price: '$ 45.00',
        image: 'book16.png',
      },
      {
        id: '4',
        title: 'Once upon a time',
        author: 'Klien Marry',
        price: '$ 35.00',
        image: 'book4.png',
      },
    ],
  },
  {
    id: '3',
    books: [
      {
        id: '1',
        title: 'Simple way of piece life',
        author: 'Armor Ramsey',
        price: '$ 40.00',
        image: 'book5.png',
      },
      {
        id: '2',
        title: 'Great travel at desert',
        author: 'Sanchit Howdy',
        price: '$ 38.00',
        image: 'book3.png',
      },
      {
        id: '3',
        title: 'The lady beauty Scarlett',
        author: 'Arthur Doyle',
        price: '$ 45.00',
        image: 'book16.png',
      },
      {
        id: '4',
        title: 'Once upon a time',
        author: 'Klien Marry',
        price: '$ 35.00',
        image: 'book4.png',
      },
    ],
  },
]

export interface IPopularBook {
  id: string
  title: string
}

export const popularBooks: IPopularBook[] = [
  {
    id: '1',
    title: 'All Genre',
  },
  {
    id: '2',
    title: 'Business',
  },
  {
    id: '3',
    title: 'Technology',
  },
  {
    id: '4',
    title: 'Adventure',
  },
  {
    id: '5',
    title: 'Romantic',
  },
  {
    id: '6',
    title: 'Fictional',
  },
]

export const books: IBook[] = [
  {
    id: '1',
    title: 'Simple way of piece life',
    author: 'Armor Ramsey',
    price: '$ 40.00',
    image: 'book5.png',
  },
  {
    id: '2',
    title: 'Great travel at desert',
    author: 'Sanchit Howdy',
    price: '$ 38.00',
    image: 'book3.png',
  },
  {
    id: '3',
    title: 'The lady beauty Scarlett',
    author: 'Arthur Doyle',
    price: '$ 45.00',
    image: 'book16.png',
  },
  {
    id: '4',
    title: 'Once upon a time',
    author: 'Klien Marry',
    price: '$ 35.00',
    image: 'book4.png',
  },
  {
    id: '5',
    title: 'Great travel at desert',
    author: 'Sanchit Howdy',
    price: '$ 38.00',
    image: 'book3.png',
  },
  {
    id: '6',
    title: 'The lady beauty Scarlett',
    author: 'Arthur Doyle',
    price: '$ 45.00',
    image: 'book16.png',
  },
  {
    id: '7',
    title: 'Once upon a time',
    author: 'Klien Marry',
    price: '$ 35.00',
    image: 'book4.png',
  },
  {
    id: '8',
    title: 'Simple way of piece life',
    author: 'Armor Ramsey',
    price: '$ 40.00',
    image: 'book5.png',
  },
]

export interface IQuote {
  comment: string
  author: string
}

export const quote: IQuote = {
  comment: `“The more that you read, the more things you will know. The more that
  you learn, the more places you’ll go.”`,
  author: 'Dr. Seuss',
}

export const booksWithOffer: IBookSliderData[] = [
  {
    id: '1',
    books: [
      {
        id: '1',
        title: 'Fashion System',
        author: 'Kevin Spear',
        price: '$ 40.00',
        image: 'book94.png',
        newPrice: '$ 35.00',
        discount: '15% off',
      },
      {
        id: '2',
        title: 'Way Of Happiness',
        author: 'Ananda Kumar',
        price: '$ 50.00',
        image: 'book93.png',
        newPrice: '$ 40.00',
        discount: '10% off',
      },
      {
        id: '3',
        title: 'Musical',
        author: 'Karim Achard',
        price: '$ 45.00',
        image: 'book92.png',
        newPrice: '$ 36.00',
        discount: '20% off',
      },
      {
        id: '4',
        title: 'Life Of Seacrits',
        author: 'Galista Marie',
        price: '$ 45.00',
        image: 'book91.png',
        newPrice: '$ 32.00',
        discount: '25% off',
      },
    ],
  },
  {
    id: '2',
    books: [
      {
        id: '1',
        title: 'Fashion System',
        author: 'Kevin Spear',
        price: '$ 40.00',
        image: 'book94.png',
        newPrice: '$ 35.00',
        discount: '15% off',
      },
      {
        id: '2',
        title: 'Way Of Happiness',
        author: 'Ananda Kumar',
        price: '$ 50.00',
        image: 'book93.png',
        newPrice: '$ 40.00',
        discount: '10% off',
      },
      {
        id: '3',
        title: 'Musical',
        author: 'Karim Achard',
        price: '$ 45.00',
        image: 'book92.png',
        newPrice: '$ 36.00',
        discount: '20% off',
      },
      {
        id: '4',
        title: 'Life Of Seacrits',
        author: 'Galista Marie',
        price: '$ 45.00',
        image: 'book91.png',
        newPrice: '$ 32.00',
        discount: '25% off',
      },
    ],
  },
  {
    id: '3',
    books: [
      {
        id: '1',
        title: 'Fashion System',
        author: 'Kevin Spear',
        price: '$ 40.00',
        image: 'book94.png',
        newPrice: '$ 35.00',
        discount: '15% off',
      },
      {
        id: '2',
        title: 'Way Of Happiness',
        author: 'Ananda Kumar',
        price: '$ 50.00',
        image: 'book93.png',
        newPrice: '$ 40.00',
        discount: '10% off',
      },
      {
        id: '3',
        title: 'Musical',
        author: 'Karim Achard',
        price: '$ 45.00',
        image: 'book92.png',
        newPrice: '$ 36.00',
        discount: '20% off',
      },
      {
        id: '4',
        title: 'Life Of Seacrits',
        author: 'Galista Marie',
        price: '$ 45.00',
        image: 'book91.png',
        newPrice: '$ 32.00',
        discount: '25% off',
      },
    ],
  },
]

export interface IArticle {
  id: string
  image: string
  title: string
  tag: string
  date: string
}

export const articlesData: IArticle[] = [
  {
    id: '1',
    image: 'articles3.png',
    title: 'Reading books always makes the moments happy',
    tag: 'inspiration',
    date: '2 Aug, 2021',
  },
  {
    id: '2',
    image: 'articles2.png',
    title: 'Reading books always makes the moments happy',
    tag: 'inspiration',
    date: '2 Aug, 2021',
  },
  {
    id: '3',
    image: 'articles1.png',
    title: 'Reading books always makes the moments happy',
    tag: 'inspiration',
    date: '2 Aug, 2021',
  },
]

export interface IFooterLink {
  id: string
  title: string
  links: string[]
}

export const footerNavLinks: IFooterLink[] = [
  {
    id: '1',
    title: 'About Us',
    links: ['vision', 'articles', 'careers', 'service', 'terms', 'donate'],
  },
  {
    id: '2',
    title: 'Discover',
    links: ['Home', 'Books', 'Authors', 'Subjects', 'advanced search'],
  },
  {
    id: '3',
    title: 'My Account',
    links: ['Sign In', 'View Cart', 'My Wishtlist', 'Track My Order'],
  },
  {
    id: '4',
    title: 'Help',
    links: [
      'Help center',
      'Report a problem',
      'Suggesting edits ',
      'Contact us',
    ],
  },
]

export interface IItem {
  id: string
  title: string
  desc: string
  image: string
}

export const items: IItem[] = [
  {
    id: '1',
    title: 'Life of seacrits',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: 'book14.png',
  },
  {
    id: '2',
    title: 'Portrait photography',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: 'book8.png',
  },
  {
    id: '3',
    title: 'Peaceful Enlightment',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: 'book15.png',
  },
]

export interface IBestBook {
  title: string
  author: string
  price: string
  image: string
  desc: string
}

export const bestBook: IBestBook = {
  image: 'book2.png',
  author: 'By Timbur Hood',
  title: 'Birds gonna be happy',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.',
  price: '$ 45.00',
}
