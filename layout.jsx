import { ArrowRight, Cpu, Database, Gauge, Lock, Network, Sparkles, Wallet } from "lucide-react";

const metrics = [
  ["AI Requests", "12.4K"],
  ["GPU Nodes", "384"],
  ["Uptime", "99.2%"],
  ["Monthly GMV", "₩18.6M"]
];

const problems = [
  {
    num: "01",
    title: "높은 AI 비용",
    desc: "기업과 개인이 고성능 AI를 안정적으로 사용하기 위한 비용 부담이 커지고 있습니다."
  },
  {
    num: "02",
    title: "낭비되는 GPU",
    desc: "전 세계의 유휴 GPU 자원은 AI 연산 수요와 직접 연결되지 못하고 있습니다."
  },
  {
    num: "03",
    title: "부족한 토큰 효용",
    desc: "AMN 토큰은 AI 사용권, 노드 보상, 스테이킹 혜택과 연결됩니다."
  }
];

const steps = [
  ["01", "노드 연결", "GPU 제공자가 AMN 노드 클라이언트를 실행합니다."],
  ["02", "작업 배분", "AI 요청을 적합한 GPU 노드에 분산합니다."],
  ["03", "검증", "결과 품질과 노드 평판을 평가합니다."],
  ["04", "보상", "기여도에 따라 크레딧 또는 토큰을 지급합니다."]
];

const products = [
  {
    icon: Sparkles,
    title: "AI 작업실",
    desc: "문서 작성, 코드 생성, 데이터 분석, 리서치 자동화를 제공하는 초기 수익형 제품입니다."
  },
  {
    icon: Gauge,
    title: "자동매매 전략 AI",
    desc: "시장 분석, 전략 생성, 백테스트 리포트, 리스크 체크를 하나의 워크플로우로 제공합니다."
  },
  {
    icon: Cpu,
    title: "GPU 노드 베타",
    desc: "GPU 제공자가 작업 수행 현황, 보상, 평판 점수를 확인할 수 있는 공급자 대시보드입니다."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen text-slate-950">
      <nav className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3 font-extrabold tracking-tight">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-sm text-white">A</div>
            AI Mining Network
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-500 md:flex">
            <a href="#why" className="hover:text-slate-950">문제</a>
            <a href="#how" className="hover:text-slate-950">구조</a>
            <a href="#mvp" className="hover:text-slate-950">MVP</a>
            <a href="#waitlist" className="rounded-full bg-slate-950 px-4 py-2 font-bold text-white">
              사전등록
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[1.05fr_.95fr] md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-bold text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Useful AI Mining Platform
          </div>
          <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.065em] md:text-7xl">
            AI 연산을
            <br />
            새로운 채굴로.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            AMN은 유휴 GPU 자원을 실제 AI 연산에 연결합니다. 공급자는 보상을 받고, 사용자는 더
            합리적인 비용으로 AI 서비스를 이용합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-extrabold text-white shadow-xl shadow-slate-950/10"
              href="#waitlist"
            >
              베타 사전등록 <ArrowRight size={18} />
            </a>
            <a
              className="rounded-full border border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-700"
              href="#how"
            >
              작동 방식 보기
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            초기 MVP: AI 작업실 · 자동매매 전략 AI · GPU 노드 대시보드
          </p>
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-soft">
          <div className="flex items-start justify-between px-2 pb-5">
            <div>
              <div className="font-black tracking-tight">Network Preview</div>
              <div className="mt-1 text-sm text-slate-400">실시간 운영 화면 예시</div>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
              Online
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5">
                <span className="text-sm text-slate-500">{label}</span>
                <strong className="mt-2 block text-3xl tracking-tight">{value}</strong>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-3xl bg-slate-950 p-5 text-white">
            <div className="mb-2 font-black">Recent Compute Jobs</div>
            {[
              ["Code generation", "completed"],
              ["Trading strategy report", "running"],
              ["Document analysis", "queued"]
            ].map(([job, state]) => (
              <div
                key={job}
                className="flex justify-between border-b border-white/10 py-3 text-sm text-slate-300 last:border-0"
              >
                <span>{job}</span>
                <b className="text-white">{state}</b>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] md:text-5xl">
            AI는 커지고,
            <br />
            컴퓨팅은 부족해집니다.
          </h2>
          <p className="max-w-xl leading-7 text-slate-500">
            우리는 사용처 없는 토큰이 아니라, 실제 AI 사용량과 연결된 컴퓨팅 경제를 만듭니다.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {problems.map((item) => (
            <div key={item.title} className="min-h-48 rounded-3xl border border-slate-200 bg-white/70 p-7">
              <div className="mb-8 font-black text-blue-600">{item.num}</div>
              <h3 className="font-black tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] md:text-5xl">
            작동 방식은
            <br />
            단순합니다.
          </h2>
          <p className="max-w-xl leading-7 text-slate-500">
            GPU 공급자, AI 사용자, 검증 시스템을 하나의 네트워크로 연결합니다.
          </p>
        </div>
        <div className="mt-8 grid gap-3 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-soft md:grid-cols-4">
          {steps.map(([num, title, desc]) => (
            <div key={title} className="rounded-3xl bg-slate-50 p-6">
              <b className="mb-10 block text-blue-600">{num}</b>
              <strong>{title}</strong>
              <small className="mt-2 block leading-6 text-slate-500">{desc}</small>
            </div>
          ))}
        </div>
      </section>

      <section id="mvp" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] md:text-5xl">
            MVP는 수익 검증에
            <br />
            집중합니다.
          </h2>
          <p className="max-w-xl leading-7 text-slate-500">
            먼저 AI 작업실과 결제형 크레딧으로 고객 수요를 검증하고, 이후 토큰 경제를 붙입니다.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-black tracking-tight">{product.title}</h3>
                <p className="mt-3 leading-7 text-slate-500">{product.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-slate-950 p-9 text-white">
            <Network className="mb-8" size={34} />
            <h2 className="text-4xl font-black leading-tight tracking-[-0.045em]">
              토큰보다 먼저
              <br />
              서비스를 검증합니다.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              AMN은 초기부터 코인을 먼저 발행하지 않습니다. 유료 고객, 사용량, 재구매율을 먼저 만들고
              이후 AI 사용권 토큰으로 확장합니다.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4">
            {[
              [Wallet, "크레딧 결제", "토큰 이전에 법정화폐 기반 크레딧으로 수요 검증"],
              [Database, "사용량 데이터", "요청 수, 비용, 재구매율을 기반으로 재무모델 고도화"],
              [Lock, "규제 리스크 관리", "토큰 발행 전 법률 검토와 유틸리티 구조 명확화"]
            ].map(([Icon, title, desc]) => {
              const I = Icon as typeof Wallet;
              return (
                <div key={title as string} className="flex gap-4 border-b border-slate-200 p-5 last:border-0">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100">
                    <I size={20} />
                  </div>
                  <div>
                    <strong>{title as string}</strong>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{desc as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="mx-auto my-20 max-w-6xl rounded-[2.4rem] bg-slate-950 px-6 py-14 text-center text-white md:px-14"
      >
        <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-[-0.045em] md:text-5xl">
          AMN 베타에 먼저 참여하세요.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          초기 파트너, GPU 제공자, 투자자, 개발자를 위한 사전등록을 받고 있습니다.
        </p>
        <form
          className="mt-8 flex flex-wrap justify-center gap-3"
          action="mailto:hello@example.com"
          method="post"
          encType="text/plain"
        >
          <input
            className="h-12 w-80 rounded-full border border-white/15 bg-white/10 px-5 text-white outline-none placeholder:text-slate-400"
            placeholder="이메일 주소"
            name="email"
            type="email"
          />
          <button className="h-12 rounded-full bg-white px-6 font-black text-slate-950" type="submit">
            사전등록
          </button>
        </form>
      </section>

      <footer className="mx-auto max-w-6xl px-5 pb-14 text-sm text-slate-400">
        <div className="border-t border-slate-200 pt-8">© 2026 AMN. Vercel-ready website.</div>
      </footer>
    </main>
  );
}
