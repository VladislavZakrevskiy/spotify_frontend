import { ITrack } from '../models/ITrack'
import TrackItem from './TrackItem'
import classes from '../styles/Tracks.module.css'
import { useGetTracksQuery } from '../store/API/tracksAPI'
import {useEffect} from 'react'

const TrackList = () => {
  const {isError, data, isLoading, } = useGetTracksQuery({})

  useEffect(() => {
    console.log(data)
  }, [data])
  

  if(isLoading) {
    return <h2>Загрузка...</h2>
  }

  if(isError) {
    return <h2>Ошибка</h2>
  }

  if(!data) {
    return null
  }

  return (
    <div className={classes.list}>
        {
          data.map((track: ITrack) => <TrackItem key={track.id} track={track}/>)
        }
    </div>
  )
}

export default TrackList