import { generateMetadata } from '@/utilities/metaData';
export const metadata = () => generateMetadata({ title: "Add deposit" });
export default function layout({children}) {
  return (
    <>
        {children}
    </>
  )
}
