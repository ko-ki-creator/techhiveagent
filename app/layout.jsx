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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
