import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrack } from '../../models/ITrack';
import { IPlayer } from '../../models/IPlayer';


const initialState: IPlayer = {
  active: null, 
  currentTime: 0, 
  duration: 0,
  pause: true, 
  volume: 50
};

const PlayerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlay: (state) => {
      state.pause = false
    },

    setPause: (state) => {
      state.pause = true
    },

    setActive: (state, action: PayloadAction<ITrack>) => {
      state.active = action.payload
      state.duration = 0
      state.currentTime = 0
    },

    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    },

    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },

    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },


  }
});

export const {setActive, setCurrentTime, setDuration, setPause, setPlay, setVolume } = PlayerSlice.actions;
export default PlayerSlice.reducer