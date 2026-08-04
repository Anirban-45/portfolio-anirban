"use client";

import { Lock, X } from "lucide-react";
import { Input } from "./input";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, type FormEvent } from "react";

interface PasswordGateProps {
  password: string;
  storageKey?: string;
  children: React.ReactNode;
}

export function PasswordGate({
  password,
  storageKey = "case-study-unlocked",
  children,
}: PasswordGateProps) {
  const router = useRouter();
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(storageKey);
    if (stored === "true") setUnlocked(true);
    setChecked(true);
  }, [storageKey]);

  useEffect(() => {
    if (checked && !unlocked) {
      requestAnimationFrame(() => setVisible(true));
      inputRef.current?.focus();
    }
  }, [checked, unlocked]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input === password) {
      sessionStorage.setItem(storageKey, "true");
      setVisible(false);
      setTimeout(() => setUnlocked(true), 300);
    } else {
      setError(true);
      setInput("");
      inputRef.current?.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (error) setError(false);
  };

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  if (!checked) return null;

  if (unlocked) return <>{children}</>;

  return (
    <>
      {/* Solid full-page skeleton that sits above header/footer until unlocked */}
      <div className="fixed inset-0 z-[1500] bg-monochrome00">
        <div className="mx-auto flex h-full max-w-[1200px] flex-col gap-6 px-8 py-24 animate-pulse">
          <div className="h-10 w-2/3 rounded-md bg-monochrome20" />
          <div className="h-5 w-1/3 rounded-md bg-monochrome20" />
          <div className="mt-8 h-[420px] w-full rounded-lg bg-monochrome20" />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-32 rounded-md bg-monochrome20" />
            <div className="h-32 rounded-md bg-monochrome20" />
            <div className="h-32 rounded-md bg-monochrome20" />
          </div>
          <div className="h-64 w-full rounded-lg bg-monochrome20" />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[2000] flex items-center justify-center transition-opacity duration-500 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[#0D0D0C]/60 backdrop-blur-xl" />

        <div
          className={`relative w-[90%] max-w-[480px] border border-monochrome110/10 bg-monochrome00 p-8 pt-12 shadow-2xl transition-all duration-500 ease-out ${
            visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"
          } ${error ? "animate-shake" : ""}`}
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label="Go back"
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-monochrome90 transition-colors duration-200 hover:bg-monochrome20 hover:text-monochrome110"
          >
            <X size={18} />
          </button>

          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-matcha20">
              <Lock />
            </div>
            <h2 className="font-plusJakartaSans text-2xl font-semibold text-monochrome110">
              This case study is protected
            </h2>
            <p className="mt-5 text-base text-gray-600">
              Please, enter the password provided to you <br /> for accessing this project.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Input
              ref={inputRef}
              type="password"
              placeholder="Password"
              value={input}
              onChange={handleChange}
              autoComplete="off"
              className="rounded-none px-4 py-3 h-[46px] border-primary focus:border-monochrome90"
            />

            {error && (
              <p className="text-sm font-medium text-red-400">
                Incorrect password. Try again.
              </p>
            )}

            <button
              type="submit"
              className="w-full px-9 py-3 h-11 rounded-none hover:bg-monochrome90 bg-monochrome110 text-monochrome00 font-semibold tracking-[5%] text-base font-plusJakartaSans mt-3"
            >
              UNLOCK
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
