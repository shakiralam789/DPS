import { generateMetadata } from "@/utilities/metaData";

export const metadata = () => generateMetadata({ title: "DPS" });

export default function Layout({ children }) {
  return <>{children}</>;
}
