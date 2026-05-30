import { auth } from "@/auth";
import { LogoutButton } from "@/components/logout-button";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <div>
        <h1>Please Login</h1>
        

        <a href="/api/auth/signin">
          Login
        </a>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {session.user?.name}</h1>

      <p>{session.user?.email}</p>

      <LogoutButton />
    </div>
  );
}