"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { serverAction } from "./_actions/serverAction";

export default function LookHere() {
  const { handleSubmit, register } = useForm();
  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: any) => {
    startTransition(async () => {
      await serverAction();
    });
  };

  return (
    <div className="px-8 py-12 sm:py-16 md:px-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <button type="submit">Click me</button>
      </form>
    </div>
  );
}
