const { useState, useEffect } = React;

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
        content: "Hook (0-3s):\n\"The one rule that fixed my finances in 30 days.\"\n\nBody (3-45s):\n- 50% goes to needs: rent, bills, food, transport\n- 30% goes to wants: eating out, clothes, subscriptions\n- 20% goes to savings and debt repayment\n\nGo straight to your online banking right now. Look at last month's spending. Split it into those 3 buckets. If your wants are over 30%, cut one subscription today — not tomorrow, today.\n\nCTA (45-60s):\n\"Follow for more money moves that actually work.\"",
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
        title: "Video 1 — 10 Free AI Tools",
        content: "Hook (0-10s):\n\"There are AI tools that cost thousands a year. These 10 are completely free — and most people have never heard of them.\"\n\nTool 1 — Claude.ai\nGo to claude.ai. Free tier gives you access to one of the most capable AI models available. Use it for writing, coding, research, analysis.\n\nTool 2 — Perplexity AI\nGo to perplexity.ai. This is Google but with AI answers and real sources.\n\nTool 3 — Gamma.app\nTurn any prompt into a full presentation in 30 seconds.\n\nTool 4 — ElevenLabs (free tier)\nRealistic AI voiceover. Free tier gives you 10,000 characters per month.\n\nTool 5 — Canva AI\nMagic Write, background remover, image generator — all free.\n\nTool 6 — Otter.ai\nRecords and transcribes meetings automatically. Free tier: 300 minutes/month.\n\nTool 7 — Notion AI (limited free)\nSummarise notes, generate content, extract action items.\n\nTool 8 — Remove.bg\nRemove any image background instantly.\n\nTool 9 — Runway ML (free tier)\nAI video generation. 125 credits free.\n\nTool 10 — Google NotebookLM\nUpload any document and have a full AI conversation about it. Completely free.\n\nCTA:\n\"Save this video. Pick one tool and use it today. Which one are you trying first? Drop it in the comments.\"",
        done: false
      },
      {
        id: "tas2",
        title: "Short 1 — One AI Prompt",
        content: "Hook (0-3s):\n\"One AI prompt that replaces an hour of work.\"\n\nBody (3-45s):\nOpen Claude.ai. Paste this exact prompt:\n\n\"Act as a [your job title]. I need to [specific task]. The context is [brief background]. Give me [specific output format]. Make it [tone].\"\n\nThat structure — role, task, context, output, tone — works for any AI tool. Be specific and you get specific results.\n\nCTA:\n\"Follow for daily AI prompts that save you hours.\"",
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
        content: "Rebranding to revenge/betrayal storytelling niche under consideration.\nConfirm direction before recording.",
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

function App() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem("farhad_hub_v1");
      return saved ? JSON.parse(saved) : INITIAL_DATA;
    } catch { return INITIAL_DATA; }
  });
  const [activeProject, setActiveProject] = useState("askmedily");
  const [activeTab, setActiveTab] = useState("tasks");
  const [activeScript, setActiveScript] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("farhad_hub_v1", JSON.stringify(data));
    } catch {}
  }, [data]);

  const toggleTask = (projectKey, sectionIdx, taskId) => {
    const newData = JSON.parse(JSON.stringify(data));
    const task = newData[projectKey].sections[sectionIdx].tasks.find(t => t.id === taskId);
    if (task) task.done = !task.done;
    setData(newData);
  };

  const toggleScript = (projectKey, scriptId) => {
    const newData = JSON.parse(JSON.stringify(data));
    const script = newData[projectKey].scripts?.find(s => s.id === scriptId);
    if (script) script.done = !script.done;
    setData(newData);
  };

  const project = data[activeProject];
  const hasScripts = project.scripts && project.scripts.length > 0;

  const totalTasks = Object.values(data).reduce((acc, p) =>
    acc + p.sections.reduce((a, s) => a + s.tasks.length, 0), 0);
  const doneTasks = Object.values(data).reduce((acc, p) =>
    acc + p.sections.reduce((a, s) => a + s.tasks.filter(t => t.done).length, 0), 0);

  return React.createElement('div', { style: { minHeight: "100vh", background: COLORS.bg } },
    // Header
    React.createElement('div', { style: { background: "#0057FF", padding: "20px 24px 0", color: "white" } },
      React.createElement('div', { style: { maxWidth: 900, margin: "0 auto" } },
        React.createElement('div', { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 } },
          React.createElement('div', { style: { display: "flex", alignItems: "center", gap: 10 } },
            React.createElement('span', { style: { fontSize: 24 } }, "⚡"),
            React.createElement('div', null,
              React.createElement('h1', { style: { fontSize: 20, fontWeight: 800, margin: 0 } }, "Farhad's Command Centre"),
              React.createElement('p', { style: { fontSize: 12, opacity: 0.8, margin: 0 } }, "All projects. All tasks. One place.")
            )
          ),
          React.createElement('div', { style: { textAlign: "right" } },
            React.createElement('div', { style: { fontSize: 22, fontWeight: 800 } }, `${doneTasks}/${totalTasks}`),
            React.createElement('div', { style: { fontSize: 11, opacity: 0.8 } }, "tasks complete")
          )
        ),
        React.createElement('div', { style: { height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 2, margin: "12px 0 0" } },
          React.createElement('div', { style: { height: "100%", width: `${(doneTasks/totalTasks)*100}%`, background: "white", borderRadius: 2 } })
        ),
        React.createElement('div', { style: { display: "flex", gap: 4, marginTop: 16, overflowX: "auto" } },
          Object.entries(data).map(([key, p]) => {
            const pDone = p.sections.reduce((a, s) => a + s.tasks.filter(t => t.done).length, 0);
            const pTotal = p.sections.reduce((a, s) => a + s.tasks.length, 0);
            return React.createElement('button', {
              key,
              onClick: () => { setActiveProject(key); setActiveTab("tasks"); setActiveScript(null); },
              style: {
                background: activeProject === key ? "white" : "rgba(255,255,255,0.15)",
                color: activeProject === key ? p.color : "white",
                border: "none", borderRadius: "10px 10px 0 0", padding: "10px 16px",
                cursor: "pointer", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap"
              }
            }, `${p.emoji} ${p.label} ${pDone}/${pTotal}`)
          })
        )
      )
    ),

    // Content
    React.createElement('div', { style: { maxWidth: 900, margin: "0 auto", padding: "24px 16px" } },
      // Sub tabs
      React.createElement('div', { style: { display: "flex", gap: 8, marginBottom: 20 } },
        React.createElement('button', {
          onClick: () => setActiveTab("tasks"),
          style: {
            background: activeTab === "tasks" ? project.color : "white",
            color: activeTab === "tasks" ? "white" : COLORS.muted,
            border: `1px solid ${activeTab === "tasks" ? project.color : COLORS.border}`,
            borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontWeight: 600
          }
        }, "✅ Tasks"),
        hasScripts && React.createElement('button', {
          onClick: () => setActiveTab("scripts"),
          style: {
            background: activeTab === "scripts" ? project.color : "white",
            color: activeTab === "scripts" ? "white" : COLORS.muted,
            border: `1px solid ${activeTab === "scripts" ? project.color : COLORS.border}`,
            borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontWeight: 600
          }
        }, "📝 Scripts")
      ),

      // Tasks
      activeTab === "tasks" && React.createElement('div', { style: { display: "flex", flexDirection: "column", gap: 20 } },
        project.sections.map((section, sIdx) =>
          React.createElement('div', { key: sIdx },
            React.createElement('h2', { style: { fontSize: 13, fontWeight: 700, color: COLORS.muted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 } },
              `${section.title} (${section.tasks.filter(t => t.done).length}/${section.tasks.length})`
            ),
            React.createElement('div', { style: { display: "flex", flexDirection: "column", gap: 6 } },
              section.tasks.map(task =>
                React.createElement('div', {
                  key: task.id,
                  onClick: () => toggleTask(activeProject, sIdx, task.id),
                  style: {
                    display: "flex", alignItems: "center", gap: 12,
                    background: task.done ? COLORS.doneBg : COLORS.card,
                    border: `1px solid ${task.done ? "#A7F3D0" : COLORS.border}`,
                    borderRadius: 10, padding: "12px 16px", cursor: "pointer"
                  }
                },
                  React.createElement('div', {
                    style: {
                      width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                      border: `2px solid ${task.done ? COLORS.done : COLORS.border}`,
                      background: task.done ? COLORS.done : "white",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }
                  }, task.done && React.createElement('span', { style: { color: "white", fontSize: 13, fontWeight: 700 } }, "✓")),
                  React.createElement('span', {
                    style: {
                      fontSize: 14, color: task.done ? COLORS.done : COLORS.todo,
                      textDecoration: task.done ? "line-through" : "none", opacity: task.done ? 0.7 : 1
                    }
                  }, task.text)
                )
              )
            )
          )
        )
      ),

      // Scripts
      activeTab === "scripts" && hasScripts && React.createElement('div', null,
        activeScript === null
          ? React.createElement('div', { style: { display: "flex", flexDirection: "column", gap: 10 } },
              project.scripts.map(script =>
                React.createElement('div', {
                  key: script.id,
                  style: {
                    background: COLORS.card, border: `1px solid ${COLORS.border}`,
                    borderRadius: 12, padding: "16px 20px",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12
                  }
                },
                  React.createElement('div', { style: { flex: 1 } },
                    React.createElement('p', { style: { fontSize: 15, fontWeight: 600, margin: 0 } }, script.title),
                    React.createElement('p', { style: { fontSize: 12, color: COLORS.muted, margin: "4px 0 0" } },
                      script.done ? "✅ Recorded" : "⏳ Not recorded yet"
                    )
                  ),
                  React.createElement('div', { style: { display: "flex", gap: 8 } },
                    React.createElement('button', {
                      onClick: () => setActiveScript(script.id),
                      style: {
                        background: project.color, color: "white", border: "none",
                        borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600
                      }
                    }, "Read Script"),
                    React.createElement('button', {
                      onClick: () => toggleScript(activeProject, script.id),
                      style: {
                        background: script.done ? COLORS.doneBg : COLORS.todoBg,
                        color: script.done ? COLORS.done : COLORS.muted,
                        border: `1px solid ${script.done ? "#A7F3D0" : COLORS.border}`,
                        borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600
                      }
                    }, script.done ? "✓ Done" : "Mark Done")
                  )
                )
              )
            )
          : React.createElement('div', null,
              React.createElement('button', {
                onClick: () => setActiveScript(null),
                style: { background: "none", border: "none", cursor: "pointer", color: COLORS.muted, fontSize: 14, marginBottom: 16, padding: 0 }
              }, "← Back to scripts"),
              (() => {
                const script = project.scripts.find(s => s.id === activeScript);
                return React.createElement('div', {
                  style: { background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 24 }
                },
                  React.createElement('div', { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 } },
                    React.createElement('h2', { style: { fontSize: 18, fontWeight: 700, margin: 0 } }, script.title),
                    React.createElement('button', {
                      onClick: () => toggleScript(activeProject, activeScript),
                      style: {
                        background: script.done ? COLORS.doneBg : project.color,
                        color: script.done ? COLORS.done : "white",
                        border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontWeight: 600
                      }
                    }, script.done ? "✓ Recorded" : "Mark as Recorded")
                  ),
                  React.createElement('div', {
                    style: {
                      background: "#F8F9FF", border: `1px solid ${COLORS.border}`,
                      borderRadius: 12, padding: 20, fontSize: 14, lineHeight: 1.8,
                      color: COLORS.todo, whiteSpace: "pre-wrap", fontFamily: "inherit"
                    }
                  }, script.content)
                );
              })()
            )
      )
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
