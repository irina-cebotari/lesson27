// const condition = true

// let p = new Promise((resolve, reject) => {
//     if(condition) {
//         resolve('success')
//     }else {
//         reject('failed')
//     }
// })

// p.then((message) => console.log('This is in the then ' + message))
// .catch(err => console.log('This is in the catch ' + err))

// const root = document.getElementById('root')

// const getData = (url) => {
//     return fetch(url).then((res) => res.json())
// }

// const p1 = new Promise((res, rej) => rej('promise1'))
// const p2 = new Promise((res, rej) => rej('promise2'))
// const p3 = new Promise((res, rej) => rej('promise3'))
// const p4 = new Promise((res, rej) => rej('promise4'))

// const usersUrl = 'https://jsonplaceholder.typicode.com/users'
// const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
// const todosUrl = 'https://jsonplaceholder.typicode.com/todos'

// const renderList = (list, name) => {
//     const parent = document.createElement('div')
//     const listWrapper = document.createElement('ul')
//     const title = document.createElement('p')

//     title.innerText = name

//     list.forEach((post) => {
//         const li = document.createElement('li')
//         li.innerText = post.title
//         listWrapper.appendChild(li)
//     });

// parent.appendChild(title)
// parent.appendChild(listWrapper)

// root.appendChild(parent)

// }

// Promise.all([
//     getData(usersUrl),
//     getData(postsUrl),

// ]).then(([users, posts]) => {

//     users.forEach((user) => {
//         const postList = posts.filter((post) => post.userId === user.id)

//         renderList(postList, user.name)
//     })

// }).catch(err => console.log(err))

// const arr = [3, 2, 1, 4, 5, 6, 7]

// function findElem(arr) {
//     const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
//     const expectedSum = (arr.length + 1) * (arr.length + 2) / 2;
//     return expectedSum - actualSum;
// }

// console.log(findElem(arr));


// const func = (list) => {
//     return list.sort((a, b) => a - b).reduce((acc, curr, index) => {
//         if(index === 0) return acc
//         if (acc !== list[list.length - 1] + 1) {
//             return acc
//         }
//         return curr - arr[index - 1] === 1 ? acc : curr - 1

//     }, arr[list.length - 1] + 1)
// }

// console.log(func(arr))


// const func = (list) => {
//     const sortedList = list.sort((a, b) => a - b)

//     let result = sortedList[list.length - 1] + 1

//     for (let i = 1; i < list.length; i++) {
//         if (result !== sortedList[list.length - 1] + 1) return result

//         result = sortedList[i] - sortedList[i - 1] === 1 ? result : sortedList[i] - 1

//     }

//     return result

// }

// console.log(func(arr))



// const str = 'Hello World!';
// let reversedStr = '';

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }

// console.log(reversedStr);



// const func = (str) => {
//     return str.split('').reverse().join('')
// }

// console.log(func('Hello World!'))



// const list = [
//     {
//         name: true,
//         city: false,
//         age: true,
//         hobby: false
//     },
//     {
//         name: true,
//         city: true,
//         age: true,
//         hobby: false
//     },
//     {
//         name: false,
//         city: false,
//         age: true,
//         hobby: false
//     },
//     {
//         name: true,
//         city: true,
//         age: true,
//         hobby: true
//     },
//     {
//         name: false,
//         city: false,
//         age: false,
//         hobby: false
//     }
// ]

// const func = (arr) => {
//     return arr.reduce((acc, curr) => {
//         const accLength = Object.values(acc).filter(item => item).length
//         const currLength = Object.values(curr).filter(item => item).length

//         return accLength > currLength ? acc : curr
//     })
// }

// console.log(func(list))