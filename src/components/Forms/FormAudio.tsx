import FileUpload from '../FileUpload'
import { Button } from '@mui/material';

interface FormAudioProps {
  setFile: Function
}

const FormAudio = ({setFile}: FormAudioProps) => {
  return (
    <div>
        <FileUpload setFile = {setFile} accept={'audio/*'}>
            <Button>Загрузить Трек</Button>
        </FileUpload>
    </div>
  )
}

export default FormAudio