import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { fetchMemeReducer, deleteMemeReducer, addURLReducer, uploadMemeReducer } from './reducers/memeReducers'

const reducer = combineReducers({
    fetchMeme: fetchMemeReducer,
    deleteMeme: deleteMemeReducer,
    addURL: addURLReducer,
    uploadMeme: uploadMemeReducer,
  });
  
  const initialState = {
    
  };
  
  const middleware = [thunk];
  
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export type RootState = ReturnType<typeof reducer>

  export default store;