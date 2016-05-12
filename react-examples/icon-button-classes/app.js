import Button from './Button'

const theme = {
  toggle: false,
  classes: {
    button: 'button-df3d4',
    icon: 'icon-j4h4g'
  }
}

export default function App() {
  return (
    <div>
      <Button theme={theme} />
    </div>
  )
}
