import { Container } from "./styles";
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'
import Switch from 'react-switch'

interface HeaderProps{
  toggleTheme: () => void
}

export default function Header({toggleTheme}: HeaderProps){

  const { colors, title } = useContext(ThemeContext)

  return(
    <Container>
      <span>Hello world</span>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={colors.secondary}
        height={10}
        width={40}
        handleDiameter={20}
      />
    </Container>
  )
}