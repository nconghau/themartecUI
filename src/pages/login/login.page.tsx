import { useState } from 'react';
import LoginForm from './components/loginForm/loginForm.container'
import LoginFormInput from './components/loginForm/loginForm.input'
import SignupFormInput from '../signupForm/signupForm.input';

type Props = {}

const LoginPage = (props: Props) => {
  const [typePopup, setTypePopup] = useState("");
  const closePopup = () => {
    setTypePopup("");
  }
  const openPopup = (type: string) => {
    setTypePopup(type);
  }
  return (
    <div>
      <div className='login-flex h-[90vh]'>
        {/* Header */}
        <div className='login-header-container'>
          <svg viewBox="0 0 24 24" className='login-logo' aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </div>
        <LoginForm openPopup={openPopup} />
        <LoginFormInput open={typePopup == "login"} closePopup={closePopup} />
        <SignupFormInput open={typePopup == "signup"} closePopup={closePopup} />
      </div>
      {/* Footer */}
      <div className="mb-0 block">
        <nav aria-label="Footer" role="navigation" className="flex flex-wrap justify-center items-center text-gray-500">
          <a href="#" rel="noopener noreferrer nofollow" target="_blank" className="mr-4">
            <span>About</span>
          </a>
          <a href="#" rel="noopener noreferrer nofollow" target="_blank" className="mr-4">
            <span>Download the app</span>
          </a>
          <a href="#" rel="noopener noreferrer nofollow" target="_blank" className="mr-4">
            <span>Help Center</span>
          </a>
          <div className="mr-4">
            <span>© 2024 TheMartech.</span>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default LoginPage