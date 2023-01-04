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

export const popularBooks = [
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

export const quote = {
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

export const articlesData = [
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

export const footerNavLinks = [
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
