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
const ThemedButton = useTheme(Button, { classes: theme.classes })

export default function App() {
  return (
    <div>
      <ThemedButton icon="star" />
    </div>
  )
  // compared with using plain components where styling props have to be manually passed in
  // (
  //   <div>
  //     <Button classes={{ button: theme.classes.button, icon: theme.classes.icon }} icon="star" />
  //   </div>
  // )
}
