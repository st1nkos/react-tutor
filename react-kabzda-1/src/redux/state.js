import { rerenderEntireTree } from './../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "It`s my first post!", likesCount: 11 },
            { id: 3, message: "blala", likesCount: 11 },
            { id: 4, message: "dadad", likesCount: 11 }
        ],
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: "Anton" },
            { id: 2, name: "Stepa" },
            { id: 3, name: "Jhon" },
            { id: 4, name: "Sasha" },
            { id: 5, name: "Artur" }
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are u?" },
            { id: 3, message: "YO" },
            { id: 4, message: "YO" },
            { id: 5, message: "YO" }
        ],
    },

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state