import { generateMetadata } from '@/utilities/metaData';
export const metadata = () => generateMetadata({ title: "Profile" });
export default function layout({children}) {
  return (
    <>
        {children}
    </>
  )
}
