import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type SignupFormInputProps = {
  open: boolean
  closePopup: () => void
}

const SignupFormInput = ({ open, closePopup }: SignupFormInputProps) => {
  return (
    <Dialog open={open} onOpenChange={closePopup}>
      <DialogContent className="popup-container">
        <DialogHeader>
          <svg viewBox="0 0 24 24" className='w-8 h-8' aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
          <DialogTitle className="text-[2rem]">Create your account</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-1">
          <Input id="username" placeholder="Email" />
          <Input id="name" placeholder="Name" />
          <Input id="phone" placeholder="Phone" />
        </div>

        <Button className='rounded-3xl w-full'>
          Sign up
        </Button>
        <div className="pb-10"></div>
      </DialogContent>
    </Dialog>
  )
}

export default SignupFormInput