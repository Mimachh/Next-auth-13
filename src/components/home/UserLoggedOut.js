"use client";
import Link from "next/link";
import Button from '@mui/material/Button';

const UserLoggedOut = () => {
  return (
    <div className="logged_buttons">
        <Button variant="outlined" color="primary">
            <Link href="/signin">Login</Link>
        </Button>
        <Button variant="outlined">
          <Link href="/signup">Register</Link>
        </Button>
    </div>

  )
}

export default UserLoggedOut