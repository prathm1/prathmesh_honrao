"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { listDrafts, saveDraft, deleteDraft, triggerLinkedInGeneration, type Draft, type DraftSection } from "@/lib/github-cms";
import Link from "next/link";
import { LogOut, Plus, Save, Globe, Lock, Trash2, FileText, Loader2, ArrowLeft, Eye, Pencil, KeyRound, Linkedin } from "lucide-react";

interface Props {
  pat: string;
  onLogout: () => void;
}

const SECTIONS: { value: DraftSection; label: string }[] = [
  { value: "writing", label: "Writing" },
  { value: "now", label: "Currently" },
  { value: "beyond", label: "Beyond Work" },
];

function newDraft(): Draft {
  const slug = `draft-${Date.now()}`;
  const now = new Date().toISOString().split("T")[0];
  return { slug, title: "Untitled", published: false, section: "writing", created: now, updated: now, content: "" };
}

export default function StudioEditor({ pat, onLogout }: Props) {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [active, setActive] = useState<Draft | null>(null);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [loadingDrafts, setLoadingDrafts] = useState(true);
  const [title, setTitle] = useState("");
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [showPatEdit, setShowPatEdit] = useState(false);
  const [newPat, setNewPat] = useState("");
  const [linkedinToast, setLinkedinToast] = useState(false);
  const editorRef = useRef<ReturnType<typeof useEditor>>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false, allowBase64: true }),
      Placeholder.configure({ placeholder: "Start writing… paste images, jot ideas, anything." }),
    ],
    content: "",
  });

  // Store editor ref for use in paste handler
  useEffect(() => {
    (editorRef as any).current = editor;
  }, [editor]);

  // Image paste via document-level listener (more reliable than editorProps)
  useEffect(() => {
    function onPaste(e: ClipboardEvent) {
      const ed = (editorRef as any).current;
      if (!ed || !ed.isFocused) return;

      const items = Array.from(e.clipboardData?.items ?? []);
      const files = Array.from(e.clipboardData?.files ?? []);

      const imageItem = items.find((i) => i.type.startsWith("image/"));
      const imageFile = files.find((f) => f.type.startsWith("image/"));
      const source = imageItem?.getAsFile() ?? imageFile ?? null;

      if (!source) return;
      e.preventDefault();

      const reader = new FileReader();
      reader.onload = (ev) => {
        const src = ev.target?.result as string;
        ed.chain().focus().setImage({ src }).run();
      };
      reader.readAsDataURL(source);
    }

    document.addEventListener("paste", onPaste);
    return () => document.removeEventListener("paste", onPaste);
  }, []);

  useEffect(() => {
    listDrafts(pat).then((d) => {
      setDrafts(d);
      setLoadingDrafts(false);
      if (d.length > 0) openDraft(d[0]);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pat]);

  const openDraft = useCallback((draft: Draft) => {
    setActive(draft);
    setTitle(draft.title);
    editor?.commands.setContent(draft.content || "");
    setStatus("idle");
    setMode("edit");
  }, [editor]);

  function handleNew() {
    const draft = newDraft();
    setDrafts((prev) => [draft, ...prev]);
    openDraft(draft);
  }

  async function handleSave(publish?: boolean) {
    if (!active || !editor) return;
    setStatus("saving");
    const updated: Draft = {
      ...active,
      title: title || "Untitled",
      content: editor.getHTML(),
      published: publish !== undefined ? publish : active.published,
      updated: new Date().toISOString().split("T")[0],
    };
    const ok = await saveDraft(pat, updated);
    if (ok) {
      setActive(updated);
      setDrafts((prev) => prev.map((d) => d.slug === updated.slug ? updated : d));
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2500);
      // Trigger LinkedIn generation when publishing for the first time
      if (publish === true && !active.published) {
        triggerLinkedInGeneration(pat, updated.slug);
        setLinkedinToast(true);
        setTimeout(() => setLinkedinToast(false), 6000);
      }
    } else {
      setStatus("error");
    }
  }

  async function handleDelete() {
    if (!active) return;
    if (!confirm(`Delete "${active.title}"?`)) return;
    await deleteDraft(pat, active.slug);
    setDrafts((prev) => prev.filter((d) => d.slug !== active.slug));
    setActive(null);
    editor?.commands.setContent("");
    setTitle("");
  }

  const statusLabel = {
    idle: null,
    saving: <span className="flex items-center gap-1.5 text-ink-muted text-sm"><Loader2 size={13} className="animate-spin" /> Saving…</span>,
    saved: <span className="text-brand text-sm">Committed ✓</span>,
    error: <span className="text-red-500 text-sm">Error — check PAT</span>,
  }[status];

  return (
    <div className="flex h-screen overflow-hidden bg-bg relative">
      {/* Sidebar */}
      <div className="w-64 border-r border-bg-dark flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-bg-dark flex items-center justify-between">
          <span className="font-serif text-sm font-semibold text-ink">Studio</span>
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1 text-xs text-ink-muted hover:text-brand transition-colors">
              <ArrowLeft size={12} /> Site
            </Link>
            <button onClick={() => setShowPatEdit(!showPatEdit)} className="flex items-center gap-1 text-xs text-ink-muted hover:text-brand transition-colors" title="Update GitHub token">
              <KeyRound size={12} />
            </button>
            <button onClick={onLogout} className="flex items-center gap-1 text-xs text-ink-muted hover:text-red-500 transition-colors">
              <LogOut size={12} /> Out
            </button>
          </div>
        </div>

        {showPatEdit && (
          <div className="p-3 border-b border-bg-dark bg-bg-dark/40">
            <p className="text-[10px] text-ink-muted mb-2 uppercase tracking-wider font-semibold">Update GitHub Token</p>
            <input
              type="password"
              value={newPat}
              onChange={(e) => setNewPat(e.target.value)}
              placeholder="github_pat_..."
              className="w-full px-2.5 py-1.5 rounded-lg border border-bg-dark bg-bg text-ink-light font-mono text-xs focus:outline-none focus:border-brand mb-2"
            />
            <button
              onClick={() => {
                if (!newPat) return;
                localStorage.setItem("studio_pat", newPat);
                setNewPat("");
                setShowPatEdit(false);
                window.location.reload();
              }}
              disabled={!newPat}
              className="w-full py-1.5 rounded-lg bg-brand text-white text-xs font-medium disabled:opacity-40 hover:bg-brand-dark transition-colors"
            >
              Save & reload
            </button>
          </div>
        )}

        <div className="p-3">
          <button
            onClick={handleNew}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            <Plus size={15} /> New draft
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {loadingDrafts ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 size={18} className="animate-spin text-ink-muted" />
            </div>
          ) : drafts.length === 0 ? (
            <p className="text-xs text-ink-muted text-center py-8">No drafts yet</p>
          ) : (
            drafts.map((d) => (
              <button
                key={d.slug}
                onClick={() => openDraft(d)}
                className={`w-full text-left px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                  active?.slug === d.slug ? "bg-brand-100 text-ink" : "hover:bg-bg-dark text-ink-light"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <FileText size={12} className="text-ink-muted flex-shrink-0" />
                  <span className="text-sm font-medium truncate">{d.title}</span>
                </div>
                <div className="flex items-center gap-1.5 ml-[18px]">
                  {d.published
                    ? <Globe size={10} className="text-brand" />
                    : <Lock size={10} className="text-ink-muted" />}
                  <span className="text-[10px] text-ink-muted">
                    {d.published ? "Public" : "Draft"} · {d.updated}
                  </span>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* LinkedIn toast */}
      {linkedinToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#0a66c2] text-white rounded-xl shadow-lg text-sm font-medium animate-in slide-in-from-bottom-2">
          <Linkedin size={16} />
          LinkedIn post generating — check your email in ~1 min
        </div>
      )}

      {/* Editor area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {active ? (
          <>
            {/* Toolbar */}
            <div className="border-b border-bg-dark px-6 py-3 flex-shrink-0">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  className="flex-1 font-serif text-lg text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/50"
                />
                <div className="flex items-center gap-2">
                  {statusLabel}
                  {/* Edit / Preview toggle */}
                  <div className="flex items-center border border-bg-dark rounded-lg overflow-hidden text-xs">
                    <button
                      onClick={() => setMode("edit")}
                      className={`flex items-center gap-1 px-2.5 py-1.5 transition-colors ${mode === "edit" ? "bg-brand text-white" : "text-ink-muted hover:text-ink"}`}
                    >
                      <Pencil size={11} /> Edit
                    </button>
                    <button
                      onClick={() => setMode("preview")}
                      className={`flex items-center gap-1 px-2.5 py-1.5 transition-colors ${mode === "preview" ? "bg-brand text-white" : "text-ink-muted hover:text-ink"}`}
                    >
                      <Eye size={11} /> Preview
                    </button>
                  </div>
                  <button onClick={handleDelete} className="p-1.5 text-ink-muted hover:text-red-500 transition-colors" title="Delete">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-ink-muted">Publish to:</span>
                <select
                  value={active.section}
                  onChange={(e) => setActive({ ...active, section: e.target.value as DraftSection })}
                  className="text-xs border border-bg-dark rounded-lg px-2 py-1.5 bg-bg text-ink-light focus:outline-none focus:border-brand"
                >
                  {SECTIONS.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
                <div className="ml-auto flex items-center gap-2">
                  <button
                    onClick={() => handleSave()}
                    disabled={status === "saving"}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-bg-dark text-sm font-medium text-ink-light hover:border-brand hover:text-brand transition-colors disabled:opacity-40"
                  >
                    <Save size={13} /> Save draft
                  </button>
                  <button
                    onClick={() => handleSave(!active.published)}
                    disabled={status === "saving"}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors disabled:opacity-40 ${
                      active.published
                        ? "bg-bg-dark text-ink-muted hover:bg-red-50 hover:text-red-600 border border-bg-dark"
                        : "bg-brand text-white hover:bg-brand-dark shadow-sm"
                    }`}
                  >
                    {active.published ? <><Lock size={13} /> Unpublish</> : <><Globe size={13} /> Publish</>}
                  </button>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto px-16 py-10">
              {mode === "edit" ? (
                <EditorContent
                  editor={editor}
                  className="prose prose-sm max-w-3xl mx-auto min-h-[60vh] focus:outline-none"
                />
              ) : (
                <div className="max-w-3xl mx-auto">
                  <h1 className="font-serif text-3xl text-ink font-semibold mb-6">{title || "Untitled"}</h1>
                  <div
                    className="prose prose-sm max-w-none text-ink-light"
                    dangerouslySetInnerHTML={{ __html: editor?.getHTML() ?? "" }}
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <FileText size={40} className="mx-auto mb-3 text-ink-muted opacity-30" />
              <p className="text-sm text-ink-muted mb-4">Nothing open yet</p>
              <button
                onClick={handleNew}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors mx-auto"
              >
                <Plus size={15} /> New draft
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
