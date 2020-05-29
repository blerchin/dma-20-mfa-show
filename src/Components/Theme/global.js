import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.50s linear;
}
.title {
  color: ${({ theme }) => theme.title};
}
.app {
  color: ${({ theme }) => theme.app};
}
li a {
  color: ${({ theme }) => theme.alink};
}
button {
  background: ${({ theme }) => theme.buttonbg};
  color: ${({ theme }) => theme.buttontext};
}
`