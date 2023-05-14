
import FileUpload from '../FileUpload'
import { Button } from '@mui/material'

//@ts-ignore
const FormPicture = ({setFile}) => {
  return (
    <div>
        <FileUpload setFile = {setFile} accept={'image/*'}>
            <Button>Загрузить обложку</Button>
        </FileUpload>
    </div>
  )
}

export default FormPicture