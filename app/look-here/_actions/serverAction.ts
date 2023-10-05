"use server";

import { auth } from "@clerk/nextjs";

export async function serverAction() {
  const authObject = auth();

  console.log({ authObject });
}
