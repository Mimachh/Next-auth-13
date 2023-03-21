"use client";
import Link from "next/link";
import Button from '@mui/material/Button';




const UserLoggedIn = () => {

  return (
    <div className="logged_in_form">
      <h2 className="h2_logged_in">Bonjour {} !</h2>
      <div className="logged_buttons">
          <Button variant="outlined" color="primary">
              <Link className="link" href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="outlined" color="primary">
              <Link href="/profile">Profile</Link>
          </Button>
      </div>

      <Button variant="outlined" color="secondary" className="sign_out_button"
        onClick={() => {}}>
          Sign-out
      </Button>
    </div>
  )
}

export default UserLoggedIn