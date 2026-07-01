"use client";

import { useState, useEffect, useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { listDrafts, saveDraft, deleteDraft, type Draft } from "@/lib/github-cms";
import { LogOut, Plus, Save, Globe, Lock, Trash2, FileText, Loader2 } from "lucide-react";

interface Props {
  pat: string;
  onLogout: () => void;
}

function newDraft(): Draft {
  const slug = `draft-${Date.now()}`;
  const now = new Date().toISOString().split("T")[0];
  return { slug, title: "Untitled", published: false, created: now, updated: now, content: "" };
}

export default function StudioEditor({ pat, onLogout }: Props) {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [active, setActive] = useState<Draft | null>(null);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [loadingDrafts, setLoadingDrafts] = useState(true);
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false, allowBase64: true }),
      Placeholder.configure({ placeholder: "Start writing… paste images, jot ideas, anything." }),
    ],
    editorProps: {
      handlePaste(view, event) {
        const items = event.clipboardData?.items;
        if (!items) return false;
        for (const item of Array.from(items)) {
          if (item.type.startsWith("image/")) {
            event.preventDefault();
            const file = item.getAsFile();
            if (!file) continue;
            const reader = new FileReader();
            reader.onload = (e) => {
              const src = e.target?.result as string;
              view.dispatch(view.state.tr.replaceSelectionWith(
                view.state.schema.nodes.image.create({ src })
              ));
            };
            reader.readAsDataURL(file);
            return true;
          }
        }
        return false;
      },
    },
    content: "",
  });

  useEffect(() => {
    listDrafts(pat).then((d) => {
      setDrafts(d);
      setLoadingDrafts(false);
      // Auto-open the most recent draft if one exists
      if (d.length > 0) {
        openDraft(d[0]);
      }
    });
  }, [pat]);

  const openDraft = useCallback((draft: Draft) => {
    setActive(draft);
    setTitle(draft.title);
    editor?.commands.setContent(draft.content || "");
    setStatus("idle");
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
    saving: <span className="flex items-center gap-1.5 text-ink-muted"><Loader2 size={13} className="animate-spin" /> Saving…</span>,
    saved: <span className="text-brand text-sm">Committed ✓</span>,
    error: <span className="text-red-500 text-sm">Error — check PAT permissions</span>,
  }[status];

  return (
    <div className="flex h-screen overflow-hidden bg-bg">
      {/* Sidebar */}
      <div className="w-64 border-r border-bg-dark flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-bg-dark flex items-center justify-between">
          <span className="font-serif text-sm font-semibold text-ink">Studio</span>
          <button onClick={onLogout} title="Log out" className="text-ink-muted hover:text-ink transition-colors">
            <LogOut size={15} />
          </button>
        </div>

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
                  active?.slug === d.slug
                    ? "bg-brand-100 text-ink"
                    : "hover:bg-bg-dark text-ink-light"
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

      {/* Editor */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {active ? (
          <>
            {/* Toolbar */}
            <div className="border-b border-bg-dark px-6 py-3 flex items-center gap-3 flex-shrink-0">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="flex-1 font-serif text-lg text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/50"
              />
              <div className="flex items-center gap-2 ml-auto">
                {statusLabel}
                <button
                  onClick={handleDelete}
                  className="p-2 text-ink-muted hover:text-red-500 transition-colors"
                  title="Delete"
                >
                  <Trash2 size={15} />
                </button>
                <button
                  onClick={() => handleSave()}
                  disabled={status === "saving"}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-bg-dark text-sm text-ink-light hover:border-brand hover:text-brand transition-colors disabled:opacity-40"
                >
                  <Save size={13} /> Save
                </button>
                <button
                  onClick={() => handleSave(!active.published)}
                  disabled={status === "saving"}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 ${
                    active.published
                      ? "bg-bg-dark text-ink-muted hover:bg-red-50 hover:text-red-600"
                      : "bg-brand text-white hover:bg-brand-dark"
                  }`}
                >
                  {active.published ? <><Lock size={13} /> Unpublish</> : <><Globe size={13} /> Publish</>}
                </button>
              </div>
            </div>

            {/* Editor body */}
            <div className="flex-1 overflow-y-auto px-16 py-10">
              <EditorContent
                editor={editor}
                className="prose prose-sm max-w-3xl mx-auto min-h-[60vh] focus:outline-none"
              />
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
