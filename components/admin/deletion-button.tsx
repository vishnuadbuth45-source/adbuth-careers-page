"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeApplication } from "@/lib/career-actions";

type Props = {
  id: string;
};

export function DeleteApplicationButton({ id }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = () => {
    if (!confirm("Delete this application?")) return;
    console.log("deleyion started")

    startTransition(async () => {
      const result = await removeApplication(id);

      if (result.success) {
        console.log("deletion succes");
        router.refresh();
      } else {
        alert("Failed to delete application.");
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="text-red-600 hover:underline disabled:opacity-50"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}