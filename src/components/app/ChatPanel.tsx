export default function ChatPanel() {
  return (
    <div className="h-dvh grow p-2">
      <div className="flex h-full w-full flex-col rounded-3xl border p-4">
        <div>
          <span>header</span>
        </div>
        <div className="grow rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <span>chat panel </span>
        </div>
        <div>
          <span>chat input</span>
        </div>
      </div>
    </div>
  );
}
