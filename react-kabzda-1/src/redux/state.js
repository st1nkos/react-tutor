import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newMessageBody: ""
        },
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this.state);

    },
};



export default store;
window.store = store;
