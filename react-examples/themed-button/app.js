import useTheme from './useTheme'
import Button from './Button'
import theme from './theme.json'

// ThemedButton component has a Theme already built in, we don't need to pass it
// every time.
const ThemedButton = useTheme(Button, theme)

export default function App() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}
