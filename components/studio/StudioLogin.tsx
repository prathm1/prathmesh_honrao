"use client";

import { useState } from "react";
import { verifyTOTP } from "@/lib/totp";

interface Props {
  onLogin: (pat: string) => void;
}

export default function StudioLogin({ onLogin }: Props) {
  const [code, setCode] = useState("");
  const [pat, setPat] = useState("");
  const [step, setStep] = useState<"totp" | "pat">("totp");
  const [error, setError] = useState("");
function handleTOTP(e: React.FormEvent) {
    e.preventDefault();
    if (verifyTOTP(code.replace(/\s/g, ""))) {
      const storedPat = localStorage.getItem("studio_pat");
      if (storedPat) {
        onLogin(storedPat);
      } else {
        setStep("pat");
      }
    } else {
      setError("Invalid code — check your authenticator app.");
      setCode("");
    }
  }

  function handlePAT(e: React.FormEvent) {
    e.preventDefault();
    if (!pat.startsWith("github_pat_") && !pat.startsWith("ghp_")) {
      setError("That doesn't look like a GitHub PAT. It should start with github_pat_ or ghp_");
      return;
    }
    onLogin(pat);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-brand text-white flex items-center justify-center font-serif font-bold text-xl mx-auto mb-4">
            PH
          </div>
          <h1 className="font-serif text-2xl text-ink">Studio</h1>
          <p className="text-sm text-ink-muted mt-1">
            {step === "totp" ? "Enter your authenticator code" : "Connect GitHub to save drafts"}
          </p>
        </div>

        {step === "totp" && (
          <form onSubmit={handleTOTP} className="card flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2 block">
                6-digit code
              </label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={code}
                onChange={(e) => { setCode(e.target.value); setError(""); }}
                placeholder="000000"
                autoFocus
                className="w-full px-4 py-3 rounded-xl border border-bg-dark bg-bg text-ink text-center text-2xl font-mono tracking-widest focus:outline-none focus:border-brand transition-colors"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              disabled={code.length < 6}
              className="w-full py-3 rounded-xl bg-brand text-white font-semibold text-sm disabled:opacity-40 hover:bg-brand-dark transition-colors"
            >
              Enter Studio
            </button>
          </form>
        )}

        {step === "pat" && (
          <form onSubmit={handlePAT} className="card flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2 block">
                GitHub Personal Access Token
              </label>
              <input
                type="password"
                value={pat}
                onChange={(e) => { setPat(e.target.value); setError(""); }}
                placeholder="github_pat_..."
                autoFocus
                className="w-full px-4 py-3 rounded-xl border border-bg-dark bg-bg text-ink font-mono text-sm focus:outline-none focus:border-brand transition-colors"
              />
              <p className="text-[10px] text-ink-muted mt-2">
                Generate at GitHub → Settings → Developer Settings → Fine-grained tokens.
                Scope: repository <strong>prathmesh_honrao</strong> → Contents: Read & Write.
              </p>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={!pat}
              className="w-full py-3 rounded-xl bg-brand text-white font-semibold text-sm disabled:opacity-40 hover:bg-brand-dark transition-colors"
            >
              Save & Enter Studio
            </button>
            <p className="text-[10px] text-ink-muted text-center">
              Stored locally in your browser. Never sent anywhere except GitHub API.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
