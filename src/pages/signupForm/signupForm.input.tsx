import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Form, FormField, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useSignupForm } from "./signupForm.hook"

type SignupFormInputProps = {
  open: boolean
  closePopup: () => void
}

const SignupFormInput = ({ open, closePopup }: SignupFormInputProps) => {

  const { form, onSubmit } = useSignupForm();

  return (
    <Dialog open={open} onOpenChange={closePopup}>
      <DialogContent className="popup-container">
        <DialogHeader>
          <svg viewBox="0 0 24 24" className='w-8 h-8' aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
          <DialogTitle className="text-[2rem]">Create your account</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-1">
          <Form {...form}>
            <form className="" onSubmit={onSubmit}>
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <>
                    <Input
                      placeholder="Username or Email"
                      {...field}
                    />
                    <FormMessage className="errorMessage" />
                  </>
                )}
              />
              <div className="mt-4">
                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <>
                      <Input
                        placeholder="Phone"
                        {...field}
                      />
                      <FormMessage className="errorMessage" />
                    </>
                  )}
                />
              </div>
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
                Sign up
              </Button>
            </form>
          </Form>
        </div>

        <div className="pb-10"></div>
      </DialogContent>
    </Dialog>
  )
}

export default SignupFormInput