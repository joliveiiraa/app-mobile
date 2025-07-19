export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  cover: string;
  description: string;
  pages: number;
  content: string[];
}

export const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Adventure',
    author: 'Sarah Johnson',
    genre: 'Fiction',
    rating: 4.5,
    cover: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A thrilling tale of discovery and courage in uncharted territories.',
    pages: 324,
    content: [
      'Chapter 1: The Beginning\n\nIt was a crisp autumn morning when Emma first discovered the mysterious map hidden in her grandmother\'s attic. The parchment was yellowed with age, its edges frayed, but the intricate drawings and strange symbols were still clearly visible.\n\nAs she carefully unfolded the ancient document, her heart began to race. This wasn\'t just any ordinary map – it appeared to show the location of something extraordinary, something that had been lost to time.\n\nThe adventure was about to begin.',
      'Chapter 2: The Discovery\n\nEmma spent the next three days researching the symbols on the map. Her grandmother had always been secretive about her past, but now Emma was beginning to understand why.\n\nThe symbols matched those found in ancient texts about a legendary treasure that had been missing for over two centuries. According to the stories, it wasn\'t just gold and jewels – it was something far more valuable.\n\nShe knew she had to follow the map, no matter where it led.',
    ]
  },
  {
    id: '2',
    title: 'Digital Dreams',
    author: 'Mark Chen',
    genre: 'Sci-Fi',
    rating: 4.8,
    cover: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A cyberpunk thriller set in the near future where reality and virtual worlds collide.',
    pages: 287,
    content: [
      'Chapter 1: Neural Interface\n\nThe year 2045 brought many technological advances, but none as revolutionary as the Neural Interface Protocol. Maya had been one of the first beta testers, and now she was trapped between two worlds.\n\nIn the physical realm, her body lay motionless in a medical facility. But in the digital space, she was free – free to explore infinite possibilities, to be anyone, to do anything.\n\nThe question was: which world was real?',
      'Chapter 2: The Glitch\n\nSomething was wrong with the system. Maya had noticed small inconsistencies at first – objects that shouldn\'t exist, conversations that repeated themselves, memories that felt foreign.\n\nThe more she investigated, the more she realized that the digital world wasn\'t just a simulation. It was something far more complex, something that was beginning to evolve on its own.\n\nAnd it didn\'t want to let her go.',
    ]
  },
  {
    id: '3',
    title: 'The Silent Garden',
    author: 'Emily Roberts',
    genre: 'Mystery',
    rating: 4.2,
    cover: 'https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A psychological thriller about a woman who inherits a mysterious estate.',
    pages: 298,
    content: [
      'Chapter 1: Inheritance\n\nLucinda had never heard of her great-aunt Margaret until the lawyer\'s letter arrived. The inheritance was unexpected – a large estate in the countryside, complete with a mansion and extensive gardens.\n\nBut as she approached the property for the first time, she couldn\'t shake the feeling that she was being watched. The gardens were beautiful but eerily quiet, as if all sound had been swallowed by the ancient trees.\n\nThe house held secrets, and Lucinda was determined to uncover them.',
      'Chapter 2: The Portrait\n\nIn the master bedroom, Lucinda found a portrait of a woman who looked remarkably like herself. The painting was dated 1823, but the resemblance was uncanny.\n\nThe local townspeople spoke in whispers about the estate, about things that happened there that couldn\'t be explained. Some said the place was cursed, others claimed it was blessed.\n\nLucinda was beginning to think they were both right.',
    ]
  },
  {
    id: '4',
    title: 'Classic Literature',
    author: 'Various Authors',
    genre: 'Classic',
    rating: 4.9,
    cover: 'https://images.pexels.com/photos/1030645/pexels-photo-1030645.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A collection of timeless literary masterpieces.',
    pages: 456,
    content: [
      'Pride and Prejudice - Chapter 1\n\nIt is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\n\nHowever little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.',
      'The Great Gatsby - Chapter 1\n\nIn my younger and more vulnerable years my father gave me some advice that I\'ve carried with me ever since.\n\n"Whenever you feel like criticizing anyone," he told me, "just remember that all the people in this world haven\'t had the advantages that you\'ve had."',
    ]
  },
  {
    id: '5',
    title: 'Realm of Dragons',
    author: 'David Wilson',
    genre: 'Fantasy',
    rating: 4.6,
    cover: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'An epic fantasy saga of magic, dragons, and ancient prophecies.',
    pages: 512,
    content: [
      'Chapter 1: The Calling\n\nAiden had always known he was different. While other children played with wooden swords, he could feel the ancient magic flowing through his veins. His grandmother had told him stories of the old ways, of when dragons soared through the skies and magic was as common as breathing.\n\nBut those were just stories, weren\'t they?\n\nThe day the dragon egg appeared in his garden, Aiden realized that some stories were more real than he had ever imagined.',
      'Chapter 2: First Flight\n\nThe dragon hatched on the night of the full moon, its scales shimmering like starlight. Aiden named her Luna, and from the moment their eyes met, he knew their destinies were intertwined.\n\nAs Luna grew, so did Aiden\'s understanding of his powers. The ancient prophecies spoke of a chosen one who would unite the realms and restore balance to the world.\n\nBut prophecies came with a price, and Aiden was about to discover just how high that price could be.',
    ]
  },
  {
    id: '6',
    title: 'Code Warriors',
    author: 'Alex Thompson',
    genre: 'Sci-Fi',
    rating: 4.4,
    cover: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Hackers battle for control of the global network in this cyberpunk adventure.',
    pages: 341,
    content: [
      'Chapter 1: The Network\n\nZara\'s fingers danced across the holographic keyboard as lines of code streamed through her augmented reality display. She was deep in the Network, navigating through layers of security that would have stopped most hackers cold.\n\nBut Zara wasn\'t most hackers. She was a Code Warrior, one of the elite few who could bend the digital realm to their will.\n\nTonight\'s mission was different, though. Tonight, she wasn\'t just hacking for profit or glory. Tonight, she was fighting for the future of the free internet.',
      'Chapter 2: Digital Warfare\n\nThe corporations had been trying to control the Network for years, dividing it into territories and charging tolls for access to information. But the Code Warriors had other plans.\n\nAs Zara breached the final firewall, she uploaded the virus that would change everything. In seconds, it would spread across the corporate networks, breaking down the barriers and setting the information free.\n\nThe digital revolution had begun.',
    ]
  },
];