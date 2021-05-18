import {configureStore} from "@reduxjs/toolkit";
import myReducer from "./Store/reducer";

export default configureStore({reducer:{myReducer}})