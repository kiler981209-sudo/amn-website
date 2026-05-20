* {
  box-sizing: border-box;
}

:root {
  --bg: #f7f8fb;
  --text: #0f172a;
  --muted: #64748b;
  --line: #e2e8f0;
  --card: rgba(255,255,255,.82);
  --dark: #0f172a;
  --accent: #2563eb;
  --accentSoft: #dbeafe;
  --radius: 28px;
  --shadow: 0 28px 80px rgba(15, 23, 42, .09);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(37,99,235,.13), transparent 34%),
    radial-gradient(circle at 90% 10%, rgba(14,165,233,.10), transparent 30%),
    var(--bg);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: rgba(247, 248, 251, .78);
  border-bottom: 1px solid rgba(226, 232, 240, .78);
}

.navInner {
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  letter-spacing: -.03em;
}

.brandMark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: var(--dark);
  color: white;
  font-size: 14px;
}

.navLinks {
  display: flex;
  gap: 28px;
  font-size: 14px;
  color: var(--muted);
}

.navButton {
  padding: 10px 16px;
  border-radius: 999px;
  color: white;
  background: var(--text);
  font-size: 14px;
  font-weight: 800;
}

.hero {
  padding: 86px 0 64px;
  display: grid;
  grid-template-columns: 1.04fr .96fr;
  gap: 54px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255,255,255,.75);
  color: #334155;
  font-size: 13px;
  font-weight: 800;
}

.liveDot {
  width: 7px;
  height: 7px;
  border-radius: 99px;
  background: #22c55e;
}

.hero h1 {
  margin: 24px 0 22px;
  font-size: clamp(46px, 7vw, 82px);
  line-height: .96;
  letter-spacing: -.07em;
}

.hero h1 span {
  color: var(--accent);
}

.hero p {
  margin: 0;
  max-width: 650px;
  color: var(--muted);
  line-height: 1.82;
  font-size: 18px;
}

.heroActions {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.primaryButton, .secondaryButton {
  height: 50px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 21px;
  border-radius: 999px;
  font-weight: 900;
}

.primaryButton {
  background: var(--text);
  color: white;
  box-shadow: 0 18px 42px rgba(15, 23, 42, .16);
}

.secondaryButton {
  background: white;
  border: 1px solid var(--line);
  color: #334155;
}

.trust {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 20px;
  color: #64748b;
  font-size: 13px;
}

.trust span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.heroPanel {
  padding: 18px;
  border-radius: 34px;
  background: var(--card);
  border: 1px solid rgba(226,232,240,.9);
  box-shadow: var(--shadow);
}

.panelHeader {
  display: flex;
  justify-content: space-between;
  padding: 8px 8px 18px;
}

.panelHeader strong {
  display: block;
  font-weight: 900;
}

.panelHeader small {
  display: block;
  margin-top: 4px;
  color: #94a3b8;
}

.panelHeader span {
  height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  background: #dcfce7;
  color: #166534;
  font-size: 12px;
  font-weight: 900;
}

.metricGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.metric {
  padding: 19px;
  border-radius: 24px;
  border: 1px solid var(--line);
  background: white;
}

.metric small {
  color: var(--muted);
}

.metric strong {
  display: block;
  margin-top: 8px;
  font-size: 30px;
  letter-spacing: -.04em;
}

.jobBox {
  margin-top: 12px;
  padding: 20px;
  border-radius: 26px;
  background: var(--dark);
  color: white;
}

.jobBox strong {
  display: block;
  margin-bottom: 8px;
}

.jobBox div {
  display: flex;
  justify-content: space-between;
  padding: 11px 0;
  border-bottom: 1px solid rgba(255,255,255,.09);
  color: #cbd5e1;
  font-size: 14px;
}

.jobBox div:last-child {
  border-bottom: 0;
}

.jobBox b {
  color: white;
}

.section {
  padding: 74px 0;
}

.sectionHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 38px;
  margin-bottom: 30px;
}

.sectionHeader h2 {
  margin: 0;
  max-width: 560px;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.06;
  letter-spacing: -.055em;
}

.sectionHeader p {
  max-width: 520px;
  margin: 0;
  color: var(--muted);
  line-height: 1.72;
}

.cards3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.card, .feature {
  padding: 28px;
  border-radius: var(--radius);
  background: rgba(255,255,255,.75);
  border: 1px solid var(--line);
}

.cardNum {
  display: block;
  margin-bottom: 34px;
  color: var(--accent);
  font-weight: 900;
}

.card h3, .feature h3 {
  margin: 0 0 12px;
  letter-spacing: -.025em;
}

.card p, .feature p {
  margin: 0;
  color: var(--muted);
  line-height: 1.72;
}

.flow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 11px;
  padding: 11px;
  border-radius: 34px;
  background: white;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.flowItem {
  padding: 25px;
  border-radius: 26px;
  background: #f8fafc;
}

.flowItem b {
  display: block;
  margin-bottom: 38px;
  color: var(--accent);
}

.flowItem strong {
  display: block;
  letter-spacing: -.02em;
}

.flowItem p {
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.62;
  font-size: 14px;
}

.featureGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.iconBox {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  margin-bottom: 24px;
  border-radius: 17px;
  background: var(--accentSoft);
  color: var(--accent);
}

.split {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 18px;
  align-items: stretch;
}

.darkCard {
  padding: 38px;
  border-radius: 34px;
  background: var(--dark);
  color: white;
}

.darkCard h2 {
  margin: 22px 0 16px;
  font-size: 42px;
  line-height: 1.08;
  letter-spacing: -.05em;
}

.darkCard p {
  color: #cbd5e1;
  line-height: 1.8;
}

.roadmapList {
  padding: 14px;
  border-radius: 34px;
  background: white;
  border: 1px solid var(--line);
}

.roadmapList div {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 19px;
  border-bottom: 1px solid var(--line);
  color: #334155;
}

.roadmapList div:last-child {
  border-bottom: 0;
}

.roadmapList svg {
  color: var(--accent);
  flex: 0 0 auto;
}

.cta {
  margin-top: 70px;
  margin-bottom: 70px;
  padding: 56px;
  border-radius: 40px;
  background: var(--dark);
  color: white;
  text-align: center;
  box-shadow: 0 30px 92px rgba(15, 23, 42, .22);
}

.cta h2 {
  margin: 0 auto;
  max-width: 760px;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.08;
  letter-spacing: -.055em;
}

.cta p {
  max-width: 620px;
  margin: 18px auto 30px;
  color: #cbd5e1;
  line-height: 1.75;
}

.cta form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.cta input {
  width: min(360px, 100%);
  height: 50px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.16);
  outline: none;
  background: rgba(255,255,255,.08);
  color: white;
}

.cta input::placeholder {
  color: #94a3b8;
}

.cta button {
  height: 50px;
  padding: 0 22px;
  border: 0;
  border-radius: 999px;
  background: white;
  color: var(--text);
  font-weight: 900;
  cursor: pointer;
}

.footer {
  padding: 0 0 52px;
  display: flex;
  justify-content: space-between;
  color: #94a3b8;
  font-size: 14px;
}

@media (max-width: 920px) {
  .navLinks {
    display: none;
  }

  .navButton {
    display: none;
  }

  .hero,
  .split {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 58px;
  }

  .sectionHeader {
    display: block;
  }

  .sectionHeader p {
    margin-top: 16px;
  }

  .cards3,
  .flow,
  .featureGrid {
    grid-template-columns: 1fr;
  }

  .metricGrid {
    grid-template-columns: 1fr;
  }

  .cta {
    padding: 38px 22px;
    border-radius: 30px;
  }

  .footer {
    display: block;
  }

  .footer span {
    display: block;
    margin-top: 8px;
  }
}
