"use client" 
 
 import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

function Header() {
    const session = useSession()
  return (
  <header>
  <div>
    {session.data ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
  ):(
    
    <Button onClick={() => signIn("google")}>Sign In</Button>
  )}

{session.data?.user?.name}
    <ModeToggle />
  </div>
  </header>
  )
}

export default Header
