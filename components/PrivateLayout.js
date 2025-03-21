import { useLazyGetUserProfileQuery } from "@/src/services/authApi";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function PrivateLayout({ children, requiredRole }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector(selectAuth);
  const [fetchProfile, _] = useLazyGetUserProfileQuery();

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (!token) {
      router.push("/login");
      return;
    }
    if (token && !user) {
      fetchProfile()
        .unwrap()
        .then((data) => {
          dispatch(setUser({ ...data, token }));
        })
        .catch(() => {
          localStorage.removeItem("token");
          router.push("/login");
        });
    }
  }, [user, router, dispatch, fetchProfile]);

  if (isLoading) {
    return <>loading...</>;
  }

  if (requiredRole && user?.role !== requiredRole) {
    router.push("/unauthorized");
    return null;
  }

  return <>{children}</>;
}
