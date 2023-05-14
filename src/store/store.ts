import { configureStore, combineReducers } from '@reduxjs/toolkit';
import PlayerSlice from './reducers/PlayerSlice';
import { trackAPI } from './API/tracksAPI';


const reducers = combineReducers({
    PlayerSlice,
    [trackAPI.reducerPath]: trackAPI.reducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (gDM) => gDM().concat([trackAPI.middleware])
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch