import React, { useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
//@ts-ignore
import classes from '../styles/Player.module.css'
import { Grid} from '@mui/material';
import TrackProgress from './TrackProgress'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setPause, setPlay, setActive, setCurrentTime, setDuration, setVolume } from '../store/reducers/PlayerSlice';
import { fancyTimeFormat } from '../utils/timeFormat';

let audio: HTMLAudioElement

const Player = () => {
    const {active, currentTime, duration, pause, volume} = useAppSelector(state => state.PlayerSlice)
    const dispatch = useAppDispatch()
    

    useEffect(() => {
        if(!audio) {
            audio = new Audio()
        }
        else {
            setAudio()
            play()
        }
        
    }, [active])

    const setAudio = () => {
        if(active) {
            audio.src = 'http://localhost:5000/' + active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                dispatch(setDuration(Math.round(+audio.duration)))
            }
            audio.ontimeupdate = () => {
                dispatch(setCurrentTime(Math.round(+audio.currentTime)))
            }
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setVolume(+e.target.value))
        audio.volume = +e.target.value / 100
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCurrentTime(+e.target.value))
        audio.currentTime = +e.target.value
    }

    const play = (e: React.MouseEvent<HTMLButtonElement>) => {
        e?.stopPropagation()
        if(pause) {
            console.log('play')
            dispatch(setPlay())
            audio.play()
        } else {
            console.log('pause')
            dispatch(setPause())
            audio.pause()
        }
    }

    if(!active) {
        return null
    }

    return (
        <div className={classes.player}>
            <IconButton onClick={play}>
                {!pause ? <Pause /> : <PlayArrow />}
            </IconButton>
            <Grid container direction={'column'} sx={{ width: '200px', margin: '0 20px' }}>
                <div>{active?.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{active?.artist}</div>
            </Grid>
            <TrackProgress type='timer' width={800} left={currentTime} right={duration} onChange={changeCurrentTime} />
            <VolumeUp sx={{ml: 'auto'}}/>
            <TrackProgress type='volume' left={volume} right={100} onChange={changeVolume} />
        </div>
    )
}

export default Player
