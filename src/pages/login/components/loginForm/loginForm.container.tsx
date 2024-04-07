import LoginFormView from './loginForm.view'

type LoginFormProps = {
  openPopup: (typePopup: string) => void
}

const LoginForm = ({ openPopup }: LoginFormProps) => {
  return (
    <LoginFormView openPopup={openPopup} />
  )
}

export default LoginForm