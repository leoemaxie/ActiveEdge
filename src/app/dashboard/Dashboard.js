import { redirect } from "next/navigation";

export default function Dashboard() {
  const session = getSession();
  const userRole = session?.user?.role; // Assuming 'role' is part of the session object

  if (userRole === "admin") {
    return <AdminDashboard />; // Component for admin users
  } else if (userRole === "user") {
    return <UserDashboard />; // Component for regular users
  } else {
    return <AccessDenied />; // Component shown for unauthorized access
  }
}

import { cookies } from "next/headers";

export async function getSessionData(req) {
  const encryptedSessionData = cookies().get("session")?.value;
  return encryptedSessionData
    ? JSON.parse(decrypt(encryptedSessionData))
    : null;
}
