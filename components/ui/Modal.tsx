"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getLenis } from "@/components/LenisScroll";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  /** id of the element that titles the dialog, for screen readers */
  labelledBy?: string;
  /** when false, Escape and backdrop clicks are ignored (e.g. mid-request) */
  dismissible?: boolean;
  children: React.ReactNode;
};

/**
 * Dependency-free accessible dialog: portalled to <body>, focus-trapped,
 * Escape/backdrop to close, restores focus to the trigger on unmount.
 */
const Modal = ({
  open,
  onClose,
  labelledBy,
  dismissible = true,
  children,
}: ModalProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const requestClose = useCallback(() => {
    if (dismissible) onClose();
  }, [dismissible, onClose]);

  // Focus management + scroll lock while open.
  useEffect(() => {
    if (!open) return;

    returnFocusRef.current = document.activeElement as HTMLElement | null;

    const lenis = getLenis();
    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the panel itself so the dialog is announced from its start.
    const focusTimer = window.setTimeout(() => panelRef.current?.focus(), 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        requestClose();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || active === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
      returnFocusRef.current?.focus?.();
    };
  }, [open, requestClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-6"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={requestClose}
        className="absolute inset-0 bg-monochrome110/40 backdrop-blur-[2px] animate-modalFade motion-reduce:animate-none"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className="relative w-full max-w-[480px] bg-monochrome00 text-monochrome90 border border-monochrome110/10 shadow-xl outline-none animate-modalIn motion-reduce:animate-none"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
