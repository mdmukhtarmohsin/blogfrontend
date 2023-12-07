import { legacy_createStore } from "redux";
import { blogreducer } from "./action";

export const store = legacy_createStore(blogreducer);
