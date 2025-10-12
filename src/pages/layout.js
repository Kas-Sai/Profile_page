// app/layout.js
import "@/styles/globals.css";
import ScrollToTop from "@/Components/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollToTop />   {/* <- outside of your main wrapper */}
      </body>
    </html>
  );
}
