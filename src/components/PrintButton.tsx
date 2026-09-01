"use client";

/** Déclenche l'impression navigateur — c'est aussi la voie « Enregistrer en PDF ». */
export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="push-button push-button--primary no-print px-5 py-3"
    >
      {label}
    </button>
  );
}
