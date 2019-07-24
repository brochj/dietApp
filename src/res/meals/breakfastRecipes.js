import R from 'res/R';
const breakfastRecipes = [
    {
        name: 'Crepioca fitness',
        creator: 'Fulano',
        preparationTime: 30,
        difficulty: 'fácil',
        visibleToAllUsers: true,
        tags: ['breakfast', 'dinner', 'fitness', 'High Protein', 'Low Calorie'],
        content: 'Lorem ipsum...',
        calories: 150,
        image: R.images.crepioca,
        ingredients: [
            '1 ovo inteiro',
            '1 clara de ovo',
            '2 colheres de goma de tapioca',
            '1 colher de requeijão ou parmesão ralado',
            'cheiro-verde a gosto',
        ],
        instructions: [
            'Misture todos os ingredientes em um recipiente, até que fique homogêneo.',
            'Com uma frigideira aquecida, coloque a mistura em fogo baixo, sem mexer.',
            'Deixe, até que comece a virar nas beiradinhas.',
            'Coloque o recheio que desejar em uma metade e dobre a massa.',
            'Desligue o fogo e está pronta a crepioca.',
        ],
        tips: [
            'Dica: se sua frigideira não for antiaderente, unte-a com um pouco de azeite ou manteiga.',
        ]
    },
    {
        name: 'Pão de aveia com manteiga',
        preparationTime: 6,
        difficulty: 'Normal',
        calories: 180,
        image: R.images.paodeaveia,
    },

    {
        name: 'Pão de aveia com manteiga',
        preparationTime: 6,
        difficulty: 'Normal',
        calories: 180,
        image: R.images.paodeaveia,
    },
    {
        name: 'Pão de aveia com manteiga',
        preparationTime: 6,
        difficulty: 'Normal',
        calories: 180,
        image: R.images.paodeaveia,
    },
    {
        name: 'Pão de aveia com manteiga',
        preparationTime: 6,
        difficulty: 'Normal',
        calories: 180,
        image: R.images.paodeaveia,
    }
]

export default breakfastRecipes;