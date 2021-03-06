import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { GlobalStyles } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button />
    </ThemeProvider>
  )
}
