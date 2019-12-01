

export const signup = (user) => {
    return fetch(`/api/signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err)
    })
}

export const signin = (user) => {
    return fetch(`/api/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err)
    })
};

export const authenticate = (data, cb) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        cb();
    }
}

export const signout = (cb) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        cb();
        return fetch(`/api/signout`, {
            method: 'GET'
        }).then(response => {
            console.log('signout', response);
        }).catch(err => console.log(err))
    }
}

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
}