import { generateMetadata } from '@/utilities/metaData';
export const metadata = () => generateMetadata({ title: "Edit deposit rule" });
export default function layout({children}) {
  return (
    <>
        {children}
    </>
  )
}
