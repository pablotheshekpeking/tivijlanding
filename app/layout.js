import "./globals.css"

export const metadata = {
  title: "AllMyLinks By Tivij",
  description: "Welcome to my AllMyLinks page. Here you can find all my links in one place. 🔗",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 min-h-screen">{children}</body>
    </html>
  )
}

