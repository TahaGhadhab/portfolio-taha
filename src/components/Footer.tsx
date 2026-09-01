import type { Content } from "@/content";

export function Footer({ footer }: { footer: Content["footer"] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-line px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">{footer.builtWith}</p>
        <p className="font-mono text-xs text-muted">
          © {year} — {footer.rights}
        </p>
      </div>
    </footer>
  );
}
