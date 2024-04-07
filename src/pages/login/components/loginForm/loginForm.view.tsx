import { Button } from '@/components/ui'

type LoginFormViewProps = {
  openPopup: (typePopup: string) => void
}

const LoginFormView = ({ openPopup }: LoginFormViewProps) => {
  return (
    <div className='h-full login-side-container'>
      <div className='w-full h-full flex flex-col items-start text-left'>
        <div className='login-form-head-container'>
          <div className="login-head-text" style={{ textOverflow: "unset" }}>Happening now</div>
          <div className='text-[1.5rem] font-bold'>Join today.</div>
        </div>
        <div className='login-form-container'>
          <Button variant="outline" className='flex items-center bg-transparent text-black border border-gray-400 rounded-3xl w-full'>
            <svg viewBox="0 0 24 24" aria-hidden="true" className='w-4 h-4 mr-1'><g><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" fill='#000000'></path></g></svg>
            <span>Sign up with Apple</span>
          </Button>
          <div className='w-[100%] flex items-center justify-evenly py-2'>
            <hr className='w-[45%] bg-gray-400' />
            <span className='w-[10%] text-center'>or</span>
            <hr className='w-[45%] bg-gray-400' />
          </div>
          <Button className='bg-blue-500 rounded-3xl w-full' onClick={() => openPopup("signup")}>
            Create account
          </Button>
          <div className='text-xs mt-2'>By signing up, you agree to the <a href='#' className='text-blue-500'>Terms of Service</a> and <a href='#' className='text-blue-500'>Privacy Policy</a>, including <a href='#' className='text-blue-500'>Cookie Use.</a></div>
        </div>
        <div className='login-form-container'>
          <div className='text-lg font-bold'>Already have an account?</div>
          <Button onClick={() => openPopup("login")} variant="outline" className='flex items-center bg-transparent text-blue-500 border border-gray-400 rounded-3xl w-full mt-4'>
            <span>Sign in</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LoginFormView