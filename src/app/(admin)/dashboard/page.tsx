import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboard from "./dashboard-content";
import { createServerSupabaseClient } from "@/lib/supabaseClient";

export default async function DashboardPage() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("sb-access-token")?.value;

  if (!accessToken) {
    redirect("/authpage"); // if no token, redirect to login
  }

  // verify token validity
  const supabase = createServerSupabaseClient(accessToken);
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/authpage");
  }

  return (
    <AdminDashboard
    // user={user}
    // onLogout={() =>
    //   supabase.auth.signOut().then(() => {
    //     redirect("/auth");
    //   })
    // }
    />
  );
}
