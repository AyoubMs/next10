import './globals.css'
import Navbar from "@/app/components/Navbar";
import MyProfilePic from "@/app/components/MyProfilePic";

export const metadata = {
  title: "Ayoub's Blog",
  description: 'Created by Ayoub Chahir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
