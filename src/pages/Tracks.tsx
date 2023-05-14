import { Grid, Card, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TrackList from '../components/TrackList';
import { ITrack } from '../models/ITrack'
import { useNavigate } from 'react-router-dom';
//@ts-ignore
import classes from '../styles/layout.module.css'
import { useGetTracksQuery } from '../store/API/tracksAPI';

// const tracks: ITrack[] = [
//     {id: '1', artist: 'Трекер 1', audio: 'http://localhost:5000/audio/568c7f07-c5f4-4730-9137-4650683a87bd.mp3', comments: [], listens: 0, name: 'Трек 1', picture: 'картинка 1', text: 'Описание Трека 1'}, 
//     {id: '2', artist: 'Трекер 2', audio: 'http://localhost:5000/audio/568c7f07-c5f4-4730-9137-4650683a87bd.mp3', comments: [], listens: 0, name: 'Трек 2', picture: 'картинка 2', text: 'Описание Трека 2'},
//     {id: '3', artist: 'Трекер 3', audio: 'http://localhost:5000/audio/568c7f07-c5f4-4730-9137-4650683a87bd.mp3', comments: [], listens: 0, name: 'Трек 3', picture: 'картинка 3', text: 'Описание Трека 3'},
// ] 

const Tracks = () => {
    const router = useNavigate()

    return (
        <Grid container justifyContent={'center'} component={'main'} flexDirection={'column'} className={classes.body}>
            <Card sx={{width: '900px'}}>
                <Box p={3}>
                    <Grid container justifyContent={'space-between'}>
                        <h1>Список треков</h1>
                        <Button onClick={() => router('/tracks/create')} variant='contained'>
                            Загрузить
                        </Button>
                    </Grid>
                </Box>
            </Card>
            <TrackList/>
        </Grid>
    )
}

export default Tracks