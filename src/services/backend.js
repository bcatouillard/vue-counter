const users = [
    { id: 1, username: "toto", name: "toto" },
    { id: 2, username: "tata", name: "tata" },
    { id: 3, username: "titi", name: "titi" }
];

export default {
    getUsers(){
        return new Promise(resolve => {
            resolve(users);
        });
    },
};