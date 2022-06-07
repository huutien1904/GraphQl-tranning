const resolvers = {
    Query : {
        books : () => [
            {
                id: 1,
                name: ' De men phuu luu ky',
                genre: 'Adventure'
            },
            {
                id: 2,
                name: ' Lam giau khong kho',
                genre: 'Education'
            },
        ],
        authors : () => [
            {
                id: 1,
                name: ' Ngo Tat To',
                age: 127
            },
            {
                id: 2,
                name: ' Nam Cao',
                age: 106
            },
            {
                id: 3,
                name: ' Vu Trong Phung',
                age: 109
            },
        ]
    }
}

module.exports = resolvers