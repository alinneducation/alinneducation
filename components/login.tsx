import { Button } from "./ui/button";
import { AlertDialogFooter, AlertDialogHeader } from "./ui/alert-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function Login() {
  return (
    // <AlertDialog>
    //   <AlertDialogTrigger asChild>
    //     <Button>Open Dialog</Button>
    //   </AlertDialogTrigger>
    //   <AlertDialogContent>
    //     <AlertDialogHeader>
    //       <AlertDialogTitle>Continus With Google</AlertDialogTitle>
    //       <AlertDialogDescription>
    //         For learning to lessons
    //       </AlertDialogDescription>
    //     </AlertDialogHeader>
    //     <AlertDialogFooter>
    //       <AlertDialogAction>Continus with Google</AlertDialogAction>
    //     </AlertDialogFooter>
    //   </AlertDialogContent>
    // </AlertDialog>
    <Dialog>
      <DialogTrigger asChild>
        <Button>Continuc wiht Google</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login with google</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
