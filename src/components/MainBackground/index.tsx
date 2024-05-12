import React from 'react'

interface Props{
  children: React.ReactNode;
}
export default function MainBackgroun({ children}: Props) {
  return (
    <main className=" bg-imgBotton bg-no-repeat h-screen bg-cover">
      {children}
    </main>
  )
}
