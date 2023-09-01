import "@/styles/globals.css"

export const metadata = {
    title: "shop"
}

const rootLayout = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
    <body>
        { children }
    </body>
    </html>
  )
}

export default rootLayout