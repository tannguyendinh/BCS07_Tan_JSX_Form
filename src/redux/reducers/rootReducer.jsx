import { combineReducers } from "redux";
import { QlsvReducer } from "./QlsvReducer";






//store tổng ứng dụng

export const rootReducer = combineReducers({
    // nơi đây sẽ chứa các reducer cho nghiệp vụ (store con )
    QlsvReducer,
})
