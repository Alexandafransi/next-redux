import type { Metadata } from 'next'

import ReduxProvider from "@/store/provider";
import React from "react";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressContentEditableWarning={true}>

      <ReduxProvider>
        {children}
      </ReduxProvider>


      </body>
    </html>
  )
}
