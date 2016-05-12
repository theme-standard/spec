import Button from './Button'

const theme = {
  toggle: true,
  styles: {
    button: {
      color: 'green'
    },
    icon: {
      verticalAlign: 'baseline'
    }
  }
}

export default function App() {
  return (
    <div>
      <Button theme={theme} />
    </div>
  )
}
