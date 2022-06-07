const books = [
    {
        id: 1,
        name: ' De men phuu luu ky',
        genre: 'Adventure',
        authorId : 1
    },
    {
        id: 2,
        name: ' Lam giau khong kho',
        genre: 'Education',
        authorId: 2

    },
    {
        id: 3,
        name: ' Doi thua',
        genre: 'Education',
        authorId: 2

    },
]
const authors = [
    {
        id: 1,
        name: ' Ngo Tat To',
        age: 127,
        book : [books]
    },
    {
        id: 2,
        name: ' Nam Cao',
        age: 106,
        book : [books]
    },
    {
        id: 3,
        name: ' Vu Trong Phung',
        age: 109,
        book : [books]
    },
]

module.exports = {
    books,
    authors
}