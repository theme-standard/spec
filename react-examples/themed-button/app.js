import useTheme from './useTheme'
import Button from './Button'

const theme = {
  toggle: false,
  classes: {
    button: 'button-df3d4',
    icon: 'icon-j4h4g'
  }
}


// ThemedButton component has now Theme built in, we don't need to pass it over
// every time we use it.
const ThemedButton = useTheme(Button, theme)

export default function App() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}
