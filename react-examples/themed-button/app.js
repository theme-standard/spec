import useTheme from './useTheme'
import Button from './Button'
import theme from './theme.json'

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
