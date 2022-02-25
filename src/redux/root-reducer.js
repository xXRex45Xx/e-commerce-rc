import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";

export default combineReducers({
    user: userReducer,
    shop: shopReducer,
    directory: directoryReducer
});