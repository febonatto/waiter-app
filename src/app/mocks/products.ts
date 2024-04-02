import { Product } from '@app/entities/Product';

export const products: Product[] = [
  {
    _id: 'da95sd52',
    name: 'Suco de Laranja',
    description:
      'Desfrute da pureza e frescor da natureza em cada gole do nosso Suco de Laranja Natural. Feito com as laranjas mais suculentas e maduras, este suco é uma fonte de energia e vitalidade. Uma explosão de sabor cítrico e natural que vai te revitalizar a qualquer hora do dia.',
    imagePath: './suco-de-laranja.png',
    price: 11.9,
    ingredients: [],
  },
  {
    _id: 'd3xc489',
    name: 'Chopp',
    description:
      'Celebre os bons momentos com o nosso Chopp gelado. Feito com os melhores ingredientes e cuidadosamente preparado para garantir uma experiência de sabor única. Cremoso, refrescante e cheio de personalidade, este Chopp é a escolha perfeita para acompanhar seus momentos de descontração e alegria.',
    imagePath: 'cerveja.png',
    price: 11.9,
    ingredients: [],
  },
  {
    _id: '65f8b5e44e2df2ec510fffe1',
    name: 'Coca Cola',
    description:
      'Refresque-se com a clássica e irresistível Coca-Cola. Uma explosão de sabor carbonatado que vai te revigorar a cada gole. O equilíbrio perfeito entre doce e refrescante, para acompanhar seus momentos de prazer e descontração.',
    imagePath: 'coca-cola.png',
    price: 6.9,
    ingredients: [],
  },
  {
    _id: '65f8b4a74e2df2ec510fff59',
    name: 'Moda da Casa',
    description:
      'Este não é apenas um hambúrguer, é uma obra-prima da culinária! Prepare-se para uma explosão de sabores com nosso Burger com Molho Especial. Cada mordida é uma jornada de delícia, com um suculento hambúrguer de carne grelhada, queijo derretido, alface fresca, tomate maduro e cebola crocante, tudo envolto em nosso molho secreto, que eleva o sabor a outro nível. Uma combinação perfeita de texturas e sabores que vai fazer você desejar mais a cada mordida.',
    imagePath: 'burger-molho-especial.png',
    price: 29.9,
    ingredients: [
      {
        name: 'Hambúrguer',
        icon: '🥩',
        _id: '65f8b4a74e2df2ec510fff5a',
      },
      {
        name: 'Prato',
        icon: '🧀',
        _id: '65f8b4a74e2df2ec510fff5b',
      },
      {
        name: 'Alface',
        icon: '🥗',
        _id: '65f8b4a74e2df2ec510fff5c',
      },
      {
        name: 'Tomate',
        icon: '🍅',
        _id: '65f8b4a74e2df2ec510fff5d',
      },
      {
        name: 'Cebola',
        icon: '🧅',
        _id: '65f8b4a74e2df2ec510fff5e',
      },
      {
        name: 'Molho Especial',
        icon: '🥣',
        _id: '65f8b4a74e2df2ec510fff5f',
      },
    ],
  },
  {
    _id: '65f8b3494e2df2ec510ffef1',
    name: 'Quatro Queijos',
    description:
      'Prepare-se para uma explosão de queijos nesta obra-prima! A Quatro Queijos é uma celebração dos mais deliciosos queijos, com cada mordida oferecendo uma nova dimensão de sabor. Desfrute da cremosidade do queijo mussarela, do toque suave do queijo gorgonzola, da intensidade do queijo parmesão e da riqueza do queijo catupiry. Esta pizza é a definição de indulgência que derrete na boca.',
    imagePath: 'quatro-queijos.png',
    price: 38.9,
    ingredients: [
      {
        name: 'Mussarela',
        icon: '🧀',
        _id: '65f8b3494e2df2ec510ffef2',
      },
      {
        name: 'Gorgonzola',
        icon: '🧀',
        _id: '65f8b3494e2df2ec510ffef3',
      },
      {
        name: 'Parmesão',
        icon: '🧀',
        _id: '65f8b3494e2df2ec510ffef4',
      },
      {
        name: 'Catupiry',
        icon: '🧀',
        _id: '65f8b3494e2df2ec510ffef5',
      },
    ],
  },
];
