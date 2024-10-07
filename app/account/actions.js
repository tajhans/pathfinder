"use server";

import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import { validateRequest } from "@/lib/validate-request";
import { redirect } from "next/navigation";

export async function logout() {
  const { session } = await validateRequest();

  if (!session) {
    return { error: 401 };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return redirect("/");
}
