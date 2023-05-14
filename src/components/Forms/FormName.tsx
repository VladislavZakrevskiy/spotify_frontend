import { Grid, TextField } from '@mui/material';

interface stateChanger {
  value: string
  onChange: Function
}

interface FormNameProps {
  name: stateChanger
  text: stateChanger
  artist: stateChanger
}

const FormName = ({name, text, artist}: FormNameProps) => {
  return (
    <Grid container direction='column' sx={{padding: 3}}>
        <TextField
            {...name}
            sx={{marginTop: '10px'}}
            label='Название трека'
        />
        <TextField
            {...artist}
            sx={{marginTop: '10px'}}
            label='Имя исполнителя'
        />
        <TextField
            {...text}
            sx={{marginTop: '10px'}}
            label='Слова к треку'
            multiline
        />
    </Grid>
  )
}

export default FormName