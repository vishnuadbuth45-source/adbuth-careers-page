export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#7d287e]/20 border-t-[#7d287e]" />

        <p className="text-sm text-[#7d287e]">
          Loading...
        </p>
      </div>
    </div>
  );
}