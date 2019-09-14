import { ACTION_NM_SONG_SELECTED } from '../env';

// Action Creator
export const selectSong = song => {
    // return an action
    return {
        type: ACTION_NM_SONG_SELECTED,
        payload: song
    };
};