import fetch from 'node-fetch'

class Users {
    static all() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then(res => res.json())
           // .then(res => console.log(res))
    }
}

export default Users