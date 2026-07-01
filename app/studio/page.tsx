"use client";

import { useState, useEffect } from "react";
import StudioLogin from "@/components/studio/StudioLogin";
import StudioEditor from "@/components/studio/StudioEditor";

const SESSION_KEY = "studio_auth";
const PAT_KEY = "studio_pat";

export default function StudioPage() {
  const [authed, setAuthed] = useState(false);
  const [pat, setPat] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem(SESSION_KEY);
    const storedPat = localStorage.getItem(PAT_KEY);
    if (session === "1" && storedPat) {
      setAuthed(true);
      setPat(storedPat);
    }
    setReady(true);
  }, []);

  function handleLogin(newPat: string) {
    sessionStorage.setItem(SESSION_KEY, "1");
    localStorage.setItem(PAT_KEY, newPat);
    setPat(newPat);
    setAuthed(true);
  }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setPat("");
  }

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-bg">
      {authed ? (
        <StudioEditor pat={pat} onLogout={handleLogout} />
      ) : (
        <StudioLogin onLogin={handleLogin} />
      )}
    </div>
  );
}
