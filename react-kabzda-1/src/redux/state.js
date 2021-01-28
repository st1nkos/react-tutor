const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "It`s my first post!", likesCount: 11 },
                { id: 3, message: "blala", likesCount: 11 },
                { id: 4, message: "dadad", likesCount: 11 },
            ],
            newPostText: "blabla",
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: "Anton" },
                { id: 2, name: "Stepa" },
                { id: 3, name: "Jhon" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Artur" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are u?" },
                { id: 3, message: "YO" },
                { id: 4, message: "YO" },
                { id: 5, message: "YO" },
            ],
        },
    },

    _callSubscriber() {
        console.log("State changed");
    },
    getState() {
        return this._state;
    },
    subscibe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.state);
        }
    },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,

})

export default store;
window.store = store;
