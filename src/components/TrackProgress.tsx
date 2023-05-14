import { fancyTimeFormat } from "../utils/timeFormat"

interface TrackProgressProps {
    left: number
    right: number
    onChange: (e: any) => void
    width?: number
    type: 'volume' | 'timer'
}

const TrackProgress = ({left, right, onChange, width, type}: TrackProgressProps) => {
  return (
    <div style={{display: 'flex'}}>
        <input type="range" 
            min={0}
            max={right}
            value={left}
            onChange={onChange}
            style={{width:width}}
        />
        {
          type === 'timer'
          ? <div>{fancyTimeFormat(left)}/{fancyTimeFormat(right)}</div>
          : <div>{left}/{right}</div>
        }
    </div>
  )
}

export default TrackProgress

{/* <div>{fancyTimeFormat(left)}/{fancyTimeFormat(right)}</div> */}
