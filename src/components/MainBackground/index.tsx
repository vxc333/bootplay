import React from 'react'

interface props{
  children: React.ReactNode;
}
export default function MainBackgroun({ children}: props) {
  return (
    <main className=" bg-imgBotton bg-no-repeat h-screen bg-cover">
      {children}
    </main>
  )
}
