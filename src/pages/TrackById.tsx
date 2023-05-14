import { Grid, Button, TextField, CircularProgress } from '@mui/material';
import {useParams, useNavigate} from 'react-router-dom'
import classes from '../styles/layout.module.css'
import { useGetTrackByIdQuery } from '../store/API/tracksAPI.ts';
import { IComment } from '../models/IComment.ts';
import { useInput } from '../hooks/useInput.ts';
import { useAddCommentMutation } from '../store/API/commentAPI.ts';

const TrackById = () => {
    const {id} = useParams()
    const router = useNavigate()
    const {data: track, isError, isLoading, isSuccess} = useGetTrackByIdQuery(id)
    const username = useInput('')
    const text = useInput('')
    const [addComment] = useAddCommentMutation()

    const createComment = () => {
        addComment({track_id: id, username: username.value, text: text.value})
    }

    if(isLoading) {
        return <CircularProgress/>
    }

    if(isError) {
        return <h2>Ошибка</h2>
    }

    return (
        <main className={classes.body}>
            <Button 
                onClick={() => router('/tracks')}
                variant='outlined'
                sx={{fontSize: 32}}
            >
                К списку
            </Button>
            <Grid container sx={{margin: '20px 0'}} display={'flex'}  justifyContent={'center'} gap={2}> 
                <img src={'http://localhost:5000/' + track.picture} width={200} height={200}/>
                <div style={{margin: '20px 0'}}>
                    <h3>Название Трека - {track.name}</h3>
                    <h3>Исполнитель - {track.artist}</h3>
                    <h3>Прослушиваний - {track.listens}</h3>
                </div>
            </Grid>
            <h2>Слова в треке</h2>
            <p>{track.text}</p>
            <h2>Комментарии</h2>
            <Grid container component={'form'} gap={2} p={2}>
                <TextField
                    {...username}
                    label={'Ваше имя'}
                    fullWidth
                />
                <TextField
                    {...text}
                    label={'Комментарий'}
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button onClick={createComment}>
                    Отправить
                </Button>
            </Grid>
            <div>
                {track.comments.map((comment: IComment) => (
                        <div>
                            <p>Автор: {comment.username}</p>
                            <p>Комментарий: {comment.text}</p>
                        </div>
                    ))}
            </div>
        </main>
  )
}

export default TrackById