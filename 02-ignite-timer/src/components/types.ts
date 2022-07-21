type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

export interface ButtonContainerProps {
  variant: ButtonVariant
}

export interface ButtonProps {
  variant?: ButtonVariant
}
