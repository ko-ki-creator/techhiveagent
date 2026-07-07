import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "ポートフォリオ | TechHiveAgent",
  description: "TechHiveAgentのサービスページ",
};

export default function layout({ children }) {
  return (
    <html
      lang="en"
    >
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
