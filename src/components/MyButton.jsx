import { Button } from "@mui/material";


export default function MyButton() {
  return (
    <Button 
      sx={{
        backgroundColor: 'violet', '&:hover': {
          backgroundColor: 'white',
        }
      }}
    >
      Submit
    </Button>
  )
}