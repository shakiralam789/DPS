import { generateMetadata } from '@/utilities/metaData';
export const metadata = () => generateMetadata({ title: "Update DPS" });
export default function layout({children}) {
  return (
    <>
        {children}
    </>
  )
}
