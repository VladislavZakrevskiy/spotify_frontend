import classes from '../styles/layout.module.css'
import {useState} from 'react'
import StepWrapper from '../components/StepWrapper'
import { Grid, Card, Button, TextField } from '@mui/material';
import FormName from '../components/Forms/FormName'
import FormPicture from '../components/Forms/FormPicture'
import FormAudio from '../components/Forms/FormAudio'
import { useInput } from '../hooks/useInput';
import { useCreateTrackMutation } from '../store/API/tracksAPI';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [picture, setPicture] = useState('')
  const [audio, setAudio] = useState('')
  const name = useInput('')
  const artist = useInput('')
  const text = useInput('')
  const [createTrack] = useCreateTrackMutation()
  const router = useNavigate()

  const next = () => {
    if(activeStep !== 2) {
      setActiveStep(prev => prev + 1)
    } else {
      const formData = new FormData()
      formData.append('name', name.value)
      formData.append('artist', artist.value)
      formData.append('text', text.value)
      formData.append('picture', picture)
      formData.append('audio', audio)
      createTrack(formData)
      router('/')
    }
  }

  const back = () => {
    setActiveStep(prev => prev - 1)
  }

  return (
    <main className={classes.body}>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && <FormName artist={artist} name={name} text={text}/>}
        {activeStep === 1 && <FormPicture setFile={setPicture}/>}
        {activeStep === 2 && <FormAudio setFile={setAudio}/>}
      </StepWrapper>
      <Grid container justifyContent = 'space-between'>
          <Button disabled = {activeStep === 0} onClick={back}>Назад</Button>
          <Button onClick={next}>Далее</Button>
        </Grid>
    </main>
  )
}

export default Create