import { useState, useEffect } from "react";

const INITIAL_DATA = {
  askmedily: {
    label: "AskMedily",
    color: "#0057FF",
    emoji: "💊",
    sections: [
      {
        title: "Completed",
        tasks: [
          { id: "am1", text: "Core app — drug search, condition pages, side effects", done: true },
          { id: "am2", text: "Stripe live payments (Basic £4.99, Premium £9.99)", done: true },
          { id: "am3", text: "Email confirmation flow", done: true },
          { id: "am4", text: "Google OAuth (Continue with Google)", done: true },
          { id: "am5", text: "DOB verification — 18+ enforced", done: true },
          { id: "am6", text: "My Med History (Premium)", done: true },
          { id: "am7", text: "Voice reading — ElevenLabs (Premium)", done: true },
          { id: "am8", text: "AI Condition Agent (Premium)", done: true },
          { id: "am9", text: "Admin dashboard (users, DOB, revenue)", done: true },
          { id: "am10", text: "SEO pages, sitemap.xml, robots.txt", done: true },
          { id: "am11", text: "Email branding — Resend (noreply@askmedily.com)", done: true },
          { id: "am12", text: "Terms & Privacy pages", done: true },
          { id: "am13", text: "Logo across all pages", done: true },
          { id: "am14", text: "Webhook fixed — Stripe live mode confirmed working", done: true },
        ]
      },
      {
        title: "To Do — In Order",
        tasks: [
          { id: "am15", text: "Set up Google Workspace (hello@askmedily.com)", done: false },
          { id: "am16", text: "Create TikTok Business page (@AskMedily)", done: false },
          { id: "am17", text: "Create Instagram Business page (@AskMedily)", done: false },
          { id: "am18", text: "Create Twitter/X page (@AskMedily)", done: false },
          { id: "am19", text: "Build ElevenLabs customer chat agent", done: false },
          { id: "am20", text: "Mailchimp email automation (welcome, trial ending, upgrade)", done: false },
          { id: "am21", text: "Find UK micro-influencers (Heepsy/Collabstr, 1-5k followers)", done: false },
          { id: "am22", text: "Record 60-second promotional video", done: false },
          { id: "am23", text: "Trademark registration — gov.uk (£170)", done: false },
          { id: "am24", text: "Fix browser refresh logout", done: false },
          { id: "am25", text: "Mobile polish — test on iPhone", done: false },
          { id: "am26", text: "Symptom triage system", done: false },
          { id: "am27", text: "Export Med History as PDF", done: false },
          { id: "am28", text: "Animations for dyslexia/accessibility", done: false },
          { id: "am29", text: "Other languages (Urdu, Arabic, Polish, Bengali)", done: false },
          { id: "am30", text: "iOS/Android app", done: false },
          { id: "am31", text: "Tier 3 — pharmacist consultations", done: false },
        ]
      }
    ]
  },
  lifeadj: {
    label: "Life Adjustments",
    color: "#7C3AED",
    emoji: "🎯",
    sections: [
      {
        title: "Completed",
        tasks: [
          { id: "la1", text: "Channel created (@LifeAdjustments)", done: true },
          { id: "la2", text: "Video 1 LIVE — youtu.be/LL36ackgpVs", done: true },
          { id: "la3", text: "Scripts for first 5 videos written", done: true },
        ]
      },
      {
        title: "To Do — In Order",
        tasks: [
          { id: "la4", text: "Record Short 1 — 50/30/20 Budget Rule", done: false },
          { id: "la5", text: "Upload Short 1", done: false },
          { id: "la6", text: "Record Video 2", done: false },
          { id: "la7", text: "Edit and upload Video 2", done: false },
          { id: "la8", text: "Reach 100 subscribers", done: false },
          { id: "la9", text: "Monetisation (1000 subs, 4000 watch hours)", done: false },
        ]
      }
    ],
    scripts: [
      {
        id: "las1",
        title: "Short 1 — 50/30/20 Budget Rule",
        content: `Hook (0-3s): "The one rule that fixed my finances in 30 days."

Body (3-45s):
- 50% goes to needs: rent, bills, food, transport
- 30% goes to wants: eating out, clothes, subscriptions
- 20% goes to savings and debt repayment

Go straight to your online banking right now. Look at last month's spending. Split it into those 3 buckets. If your wants are over 30%, cut one subscription today — not tomorrow, today.

CTA (45-60s): "Follow for more money moves that actually work."`,
        done: false
      },
      {
        id: "las2",
        title: "Video 2 Script",
        content: "Script ready in content studio. Ask Claude to pull it when needed.",
        done: false
      }
    ]
  },
  techadj: {
    label: "Tech Adjustments",
    color: "#059669",
    emoji: "🤖",
    sections: [
      {
        title: "Completed",
        tasks: [
          { id: "ta1", text: "Channel created (@TechAdjustments)", done: true },
          { id: "ta2", text: "Scripts for first 5 videos written", done: true },
        ]
      },
      {
        title: "To Do — In Order",
        tasks: [
          { id: "ta3", text: "Record Video 1 — 10 Free AI Tools (screen recording)", done: false },
          { id: "ta4", text: "Record Short 1 — One AI Prompt That Does Everything", done: false },
          { id: "ta5", text: "Edit and upload Video 1", done: false },
          { id: "ta6", text: "Upload Short 1", done: false },
          { id: "ta7", text: "Reach 100 subscribers", done: false },
          { id: "ta8", text: "Monetisation", done: false },
        ]
      }
    ],
    scripts: [
      {
        id: "tas1",
        title: "Video 1 — 10 Free AI Tools (Intro)",
        content: `Hook (0-10s):
"There are AI tools that cost thousands a year. These 10 are completely free — and most people have never heard of them."

[Screen recording starts]

Tool 1 — Claude.ai
Go to claude.ai. Free tier gives you access to one of the most capable AI models available. Use it for writing, coding, research, analysis. Better than ChatGPT for most tasks.

Tool 2 — Perplexity AI  
Go to perplexity.ai. This is Google but with AI answers and real sources. Stop Googling things — use this instead.

Tool 3 — Gamma.app
Turn any prompt into a full presentation in 30 seconds. Go to gamma.app, type your topic, click generate. Done.

Tool 4 — ElevenLabs (free tier)
Realistic AI voiceover. Go to elevenlabs.io — free tier gives you 10,000 characters per month. Enough for short videos.

Tool 5 — Canva AI
You know Canva. The AI features — Magic Write, background remover, image generator — are all free.

Tool 6 — Otter.ai
Records and transcribes meetings automatically. Free tier gives you 300 minutes per month.

Tool 7 — Notion AI (limited free)
If you use Notion, the AI writing assistant is partially free. Summarise notes, generate content, extract action items.

Tool 8 — Remove.bg
Remove any image background instantly. Free for low-res. Go to remove.bg.

Tool 9 — Runway ML (free tier)
AI video generation. 125 credits free. Go to runwayml.com.

Tool 10 — Google NotebookLM
Upload any document and have a full AI conversation about it. Go to notebooklm.google.com — completely free.

CTA (final 30s):
"Save this video. Pick one tool from this list and use it today — not tomorrow, today. Which one are you trying first? Drop it in the comments."`,
        done: false
      },
      {
        id: "tas2",
        title: "Short 1 — One AI Prompt",
        content: `Hook (0-3s): "One AI prompt that replaces an hour of work."

Body (3-45s):
Open Claude.ai. Paste this exact prompt:

"Act as a [your job title]. I need to [specific task]. The context is [brief background]. Give me [specific output format]. Make it [tone — professional/casual/concise]."

That structure — role, task, context, output, tone — works for any AI tool. Most people just type vague questions and get vague answers. Be specific and you get specific results.

CTA: "Follow for daily AI prompts that save you hours."`,
        done: false
      }
    ]
  },
  informedfeed: {
    label: "Informed Feed",
    color: "#DC2626",
    emoji: "📱",
    sections: [
      {
        title: "Completed",
        tasks: [
          { id: "if1", text: "Channel created (@InformedFeed)", done: true },
          { id: "if2", text: "Scripts written", done: true },
        ]
      },
      {
        title: "To Do — In Order",
        tasks: [
          { id: "if3", text: "Finalise channel name/rebrand decision", done: false },
          { id: "if4", text: "Record first Short", done: false },
          { id: "if5", text: "Upload first Short — test the format", done: false },
          { id: "if6", text: "Record Shorts 2-5", done: false },
          { id: "if7", text: "Reach 100 subscribers", done: false },
        ]
      }
    ],
    scripts: [
      {
        id: "ifs1",
        title: "Short 1 — Format TBC",
        content: "Rebranding to revenge/betrayal storytelling niche under consideration. Confirm direction before recording.",
        done: false
      }
    ]
  }
};

const COLORS = {
  bg: "#F7F8FA",
  card: "#FFFFFF",
  border: "#E5E7EB",
  muted: "#6B7280",
  done: "#059669",
  doneBg: "#ECFDF5",
  todo: "#374151",
  todoBg: "#F9FAFB",
};

export default function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [activeProject, setActiveProject] = useState("askmedily");
  const [activeTab, setActiveTab] = useState("tasks");
  const [activeScript, setActiveScript] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await window.storage.get("farhad_dashboard_v2");
        if (result) {
          setData(JSON.parse(result.value));
        }
      } catch {}
    };
    load();
  }, []);

  const save = async (newData) => {
    try {
      await window.storage.set("farhad_dashboard_v2", JSON.stringify(newData));
    } catch {}
  };

  const toggleTask = (projectKey, sectionIdx, taskId) => {
    const newData = JSON.parse(JSON.stringify(data));
    const task = newData[projectKey].sections[sectionIdx].tasks.find(t => t.id === taskId);
    if (task) task.done = !task.done;
    setData(newData);
    save(newData);
  };

  const toggleScript = (projectKey, scriptId) => {
    const newData = JSON.parse(JSON.stringify(data));
    const script = newData[projectKey].scripts?.find(s => s.id === scriptId);
    if (script) script.done = !script.done;
    setData(newData);
    save(newData);
  };

  const project = data[activeProject];
  const hasScripts = project.scripts && project.scripts.length > 0;

  const totalTasks = Object.values(data).reduce((acc, p) => {
    return acc + p.sections.reduce((a, s) => a + s.tasks.length, 0);
  }, 0);

  const doneTasks = Object.values(data).reduce((acc, p) => {
    return acc + p.sections.reduce((a, s) => a + s.tasks.filter(t => t.done).length, 0);
  }, 0);

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#0057FF", padding: "20px 24px 0", color: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 24 }}>⚡</span>
              <div>
                <h1 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>Farhad's Command Centre</h1>
                <p style={{ fontSize: 12, opacity: 0.8, margin: 0 }}>All projects. All tasks. One place.</p>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 22, fontWeight: 800 }}>{doneTasks}/{totalTasks}</div>
              <div style={{ fontSize: 11, opacity: 0.8 }}>tasks complete</div>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 2, margin: "12px 0 0" }}>
            <div style={{ height: "100%", width: `${(doneTasks / totalTasks) * 100}%`, background: "white", borderRadius: 2, transition: "width 0.3s" }} />
          </div>

          {/* Project tabs */}
          <div style={{ display: "flex", gap: 4, marginTop: 16, overflowX: "auto" }}>
            {Object.entries(data).map(([key, p]) => {
              const pDone = p.sections.reduce((a, s) => a + s.tasks.filter(t => t.done).length, 0);
              const pTotal = p.sections.reduce((a, s) => a + s.tasks.length, 0);
              return (
                <button key={key} onClick={() => { setActiveProject(key); setActiveTab("tasks"); setActiveScript(null); }} style={{
                  background: activeProject === key ? "white" : "rgba(255,255,255,0.15)",
                  color: activeProject === key ? p.color : "white",
                  border: "none", borderRadius: "10px 10px 0 0", padding: "10px 16px",
                  cursor: "pointer", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap",
                  display: "flex", alignItems: "center", gap: 6
                }}>
                  <span>{p.emoji}</span>
                  <span>{p.label}</span>
                  <span style={{ fontSize: 11, opacity: 0.7 }}>{pDone}/{pTotal}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>

        {/* Sub tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <button onClick={() => setActiveTab("tasks")} style={{
            background: activeTab === "tasks" ? project.color : "white",
            color: activeTab === "tasks" ? "white" : COLORS.muted,
            border: `1px solid ${activeTab === "tasks" ? project.color : COLORS.border}`,
            borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontWeight: 600
          }}>
            ✅ Tasks
          </button>
          {hasScripts && (
            <button onClick={() => setActiveTab("scripts")} style={{
              background: activeTab === "scripts" ? project.color : "white",
              color: activeTab === "scripts" ? "white" : COLORS.muted,
              border: `1px solid ${activeTab === "scripts" ? project.color : COLORS.border}`,
              borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontWeight: 600
            }}>
              📝 Scripts
            </button>
          )}
        </div>

        {/* Tasks view */}
        {activeTab === "tasks" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {project.sections.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 style={{ fontSize: 13, fontWeight: 700, color: COLORS.muted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
                  {section.title} ({section.tasks.filter(t => t.done).length}/{section.tasks.length})
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {section.tasks.map((task) => (
                    <div key={task.id} onClick={() => toggleTask(activeProject, sIdx, task.id)} style={{
                      display: "flex", alignItems: "center", gap: 12,
                      background: task.done ? COLORS.doneBg : COLORS.card,
                      border: `1px solid ${task.done ? "#A7F3D0" : COLORS.border}`,
                      borderRadius: 10, padding: "12px 16px", cursor: "pointer",
                      transition: "all 0.15s"
                    }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                        border: `2px solid ${task.done ? COLORS.done : COLORS.border}`,
                        background: task.done ? COLORS.done : "white",
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {task.done && <span style={{ color: "white", fontSize: 13, fontWeight: 700 }}>✓</span>}
                      </div>
                      <span style={{
                        fontSize: 14, color: task.done ? COLORS.done : COLORS.todo,
                        textDecoration: task.done ? "line-through" : "none",
                        opacity: task.done ? 0.7 : 1
                      }}>
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Scripts view */}
        {activeTab === "scripts" && hasScripts && (
          <div>
            {activeScript === null ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {project.scripts.map((script) => (
                  <div key={script.id} style={{
                    background: COLORS.card, border: `1px solid ${COLORS.border}`,
                    borderRadius: 12, padding: "16px 20px",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12
                  }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 15, fontWeight: 600, margin: 0, color: COLORS.todo }}>{script.title}</p>
                      <p style={{ fontSize: 12, color: COLORS.muted, margin: "4px 0 0" }}>
                        {script.done ? "✅ Recorded" : "⏳ Not recorded yet"}
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => setActiveScript(script.id)} style={{
                        background: project.color, color: "white", border: "none",
                        borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600
                      }}>
                        Read Script
                      </button>
                      <button onClick={() => toggleScript(activeProject, script.id)} style={{
                        background: script.done ? COLORS.doneBg : COLORS.todoBg,
                        color: script.done ? COLORS.done : COLORS.muted,
                        border: `1px solid ${script.done ? "#A7F3D0" : COLORS.border}`,
                        borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600
                      }}>
                        {script.done ? "✓ Done" : "Mark Done"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <button onClick={() => setActiveScript(null)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: COLORS.muted, fontSize: 14, display: "flex", alignItems: "center", gap: 6, marginBottom: 16, padding: 0
                }}>
                  ← Back to scripts
                </button>
                {(() => {
                  const script = project.scripts.find(s => s.id === activeScript);
                  return (
                    <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 24 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                        <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{script.title}</h2>
                        <button onClick={() => toggleScript(activeProject, activeScript)} style={{
                          background: script.done ? COLORS.doneBg : project.color,
                          color: script.done ? COLORS.done : "white",
                          border: "none", borderRadius: 8, padding: "8px 16px",
                          cursor: "pointer", fontSize: 13, fontWeight: 600
                        }}>
                          {script.done ? "✓ Recorded" : "Mark as Recorded"}
                        </button>
                      </div>
                      <div style={{
                        background: "#F8F9FF", border: `1px solid ${COLORS.border}`,
                        borderRadius: 12, padding: 20,
                        fontSize: 14, lineHeight: 1.8, color: COLORS.todo,
                        whiteSpace: "pre-wrap", fontFamily: "inherit"
                      }}>
                        {script.content}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
