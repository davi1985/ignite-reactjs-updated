import styles from './button.module.css'
import { ButtonContainer } from './styles'
import { ButtonProps } from './types'

// export function Button({ color = "primary" }: ButtonProps) {
//   return (
//     <button className={`${styles.button} ${styles[color]}`}>Enviar</button>
//   );
// }

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
