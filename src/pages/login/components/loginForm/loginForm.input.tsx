import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useLoginForm } from "./loginForm.hook"
import { FormField, FormMessage, Form } from "@/components/ui/form"

type LoginFormInputProps = {
  open: boolean,
  closePopup: () => void
}

const LoginFormInput = ({ open, closePopup }: LoginFormInputProps) => {

  const { form, onSubmit } = useLoginForm();

  return (
    <Dialog open={open} onOpenChange={closePopup}>
      <DialogContent className="popup-container">
        <DialogHeader>
          <svg viewBox="0 0 24 24" className='w-8 h-8' aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
          <DialogTitle className="text-[2rem]">Sign in to X</DialogTitle>
        </DialogHeader>
        <Button variant="outline" className='flex items-center bg-transparent text-black border border-gray-400 rounded-3xl w-full'>
          <svg viewBox="0 0 24 24" aria-hidden="true" className='w-4 h-4 mr-1'><g><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" fill='#000000'></path></g></svg>
          <span>Sign up with Apple</span>
        </Button>
        <div className='w-[100%] flex items-center justify-evenly'>
          <hr className='w-[45%] bg-gray-400' />
          <span className='w-[10%] text-center'>or</span>
          <hr className='w-[45%] bg-gray-400' />
        </div>

        <div className="grid gap-4 py-1">
          <Form {...form}>
            <form className="" onSubmit={onSubmit}>
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <>
                    <Input
                      placeholder="Phone, email, or username"
                      {...field}
                    />
                    <FormMessage className="errorMessage" />
                  </>
                )}
              />
              <div className="mt-4">
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                      />
                      <FormMessage className="errorMessage" />
                    </>
                  )}
                />
              </div>
              <Button className='rounded-3xl w-full mt-4'>
                Sign in
              </Button>
            </form>
          </Form>
        </div>
        <Button variant="outline" className='flex items-center bg-transparent text-black border border-gray-400 rounded-3xl w-full'>
          Forgot password?
        </Button>
        <div className='text-xs mt-2 pb-10'>Don't have an account? <a href='#' className='text-blue-500'>Sign up</a></div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginFormInput