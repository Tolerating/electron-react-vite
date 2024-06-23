import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./modules/user"
// 定义类型
export type RootState = ReturnType<typeof store.getState>
export type AppDisPatch = typeof store.dispatch
const store = configureStore({
    reducer:{
        user:userReducer
    }
})
export default store;