import RootLayout from '@/components/root-layout'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  )
}

export default Layout