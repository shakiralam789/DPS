import { generateMetadata } from "@/utilities/metaData";

export const metadata = () => generateMetadata({ title: "Deposit rule schemes" });

export default function Layout({ children }) {
  return <>{children}</>;
}
