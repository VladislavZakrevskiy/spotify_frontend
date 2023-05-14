
import { ITrack } from '../models/ITrack'
import classes from '../styles/Tracks.module.css'
import { Card, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {Pause, PlayArrow, Delete} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setActive, setPlay } from '../store/reducers/PlayerSlice';


interface TrackItemProps {
    track: ITrack
    active?: boolean
}

const TrackItem = ({track, active = false}:TrackItemProps) => {
  const router = useNavigate()
  const dispatch = useAppDispatch()

  const play = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(setActive(track))
    dispatch(setPlay())
  }

  return (
    <Card onClick={() => router( track.id)} className={classes.item} sx={{width: '100%'}} component={'div'}>
        <IconButton onClick={play}>
          {active ? <Pause/> : <PlayArrow/>}
        </IconButton>
        <img width={70} height={70} src={'http://localhost:5000/' + track.picture} alt={`Обложка трека ${track.name}`}/>
        <Grid container direction={'column'} sx={{width: '200px', margin: '0 20px'}}>
          <div>{track.name}</div>
          <div style = {{fontSize: 12, color: 'gray'}}>{track.artist}</div>
        </Grid>
        {active && <div>02:42 / 03:22</div>}
        <IconButton onClick={e => e.stopPropagation()} sx={{ml: 'auto'}}>
          <Delete/>
        </IconButton>
    </Card>
  )
}

export default TrackItem