import "./globals.css"

export const metadata = {
  title: "AllMyLinks Clone",
  description: "A modern landing page for all your important links",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 min-h-screen">{children}</body>
    </html>
  )
}

