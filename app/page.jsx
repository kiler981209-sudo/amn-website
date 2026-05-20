const metrics = [
  ["AI Requests", "12.4K"],
  ["GPU Nodes", "384"],
  ["Uptime", "99.2%"],
  ["Monthly GMV", "₩18.6M"]
];

const problems = [
  ["01", "높은 AI 비용", "고성능 AI를 안정적으로 사용하기 위한 비용 부담이 커지고 있습니다."],
  ["02", "낭비되는 GPU", "전 세계의 유휴 GPU 자원이 AI 연산 수요와 직접 연결되지 못하고 있습니다."],
  ["03", "부족한 토큰 효용", "AMN 토큰은 AI 사용권, 노드 보상, 스테이킹 혜택과 연결됩니다."]
];

const steps = [
  ["01", "노드 연결", "GPU 제공자가 AMN 노드 클라이언트를 실행합니다."],
  ["02", "작업 배분", "AI 요청을 적합한 GPU 노드에 분산합니다."],
  ["03", "검증", "결과 품질과 노드 평판을 평가합니다."],
  ["04", "보상", "기여도에 따라 크레딧 또는 토큰을 지급합니다."]
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="wrap navInner">
          <a href="#" className="brand"><span>A</span> AI Mining Network</a>
          <div className="links">
            <a href="#why">문제</a>
            <a href="#how">구조</a>
            <a href="#mvp">MVP</a>
            <a className="navCta" href="#waitlist">사전등록</a>
          </div>
        </div>
      </nav>

      <section className="hero wrap">
        <div>
          <div className="eyebrow"><i /> Useful AI Mining Platform</div>
          <h1>AI 연산을<br />새로운 채굴로.</h1>
          <p className="lead">
            AMN은 유휴 GPU 자원을 실제 AI 연산에 연결합니다.
            공급자는 보상을 받고, 사용자는 더 합리적인 비용으로 AI 서비스를 이용합니다.
          </p>
          <div className="actions">
            <a className="btn primary" href="#waitlist">베타 사전등록</a>
            <a className="btn ghost" href="#how">작동 방식 보기</a>
          </div>
          <p className="small">초기 MVP: AI 작업실 · 자동매매 전략 AI · GPU 노드 대시보드</p>
        </div>

        <aside className="dashboard">
          <div className="dashTop">
            <div>
              <b>Network Preview</b>
              <p>실시간 운영 화면 예시</p>
            </div>
            <span>Online</span>
          </div>
          <div className="metrics">
            {metrics.map(([label, value]) => (
              <div className="metric" key={label}>
                <small>{label}</small>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="jobs">
            <b>Recent Compute Jobs</b>
            <div><span>Code generation</span><strong>completed</strong></div>
            <div><span>Trading strategy report</span><strong>running</strong></div>
            <div><span>Document analysis</span><strong>queued</strong></div>
          </div>
        </aside>
      </section>

      <section id="why" className="section wrap">
        <div className="sectionHead">
          <h2>AI는 커지고,<br />컴퓨팅은 부족해집니다.</h2>
          <p>우리는 사용처 없는 토큰이 아니라, 실제 AI 사용량과 연결된 컴퓨팅 경제를 만듭니다.</p>
        </div>
        <div className="cards">
          {problems.map(([num, title, desc]) => (
            <article className="card" key={title}>
              <em>{num}</em>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="section wrap">
        <div className="sectionHead">
          <h2>작동 방식은<br />단순합니다.</h2>
          <p>GPU 공급자, AI 사용자, 검증 시스템을 하나의 네트워크로 연결합니다.</p>
        </div>
        <div className="flow">
          {steps.map(([num, title, desc]) => (
            <article className="flowItem" key={title}>
              <b>{num}</b>
              <strong>{title}</strong>
              <small>{desc}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="mvp" className="section wrap mvp">
        <div className="darkCard">
          <h2>초기 MVP는<br />수익 검증에 집중합니다.</h2>
          <p>
            처음부터 코인을 발행하지 않습니다. 먼저 AI 작업실과 결제형 크레딧으로 고객 수요를 검증하고,
            이후 토큰 경제를 붙입니다.
          </p>
        </div>
        <div className="list">
          <div><strong>AI 작업실</strong><span>문서·코드·데이터 분석</span></div>
          <div><strong>자동매매 전략 AI</strong><span>전략 생성·백테스트 리포트</span></div>
          <div><strong>사용량 대시보드</strong><span>크레딧·비용·결과 관리</span></div>
          <div><strong>GPU 노드 베타</strong><span>작업 수행·보상 확인</span></div>
        </div>
      </section>

      <section id="waitlist" className="cta wrap">
        <h2>AMN 베타에 먼저 참여하세요.</h2>
        <p>초기 파트너, GPU 제공자, 투자자, 개발자를 위한 사전등록을 받고 있습니다.</p>

        <form className="waitlistForm" action="/api/waitlist" method="post">
          <input type="email" name="email" placeholder="이메일 주소" required />
          <select name="role" defaultValue="관심고객">
            <option value="관심고객">관심고객</option>
            <option value="GPU 제공자">GPU 제공자</option>
            <option value="투자자">투자자</option>
            <option value="개발자">개발자</option>
            <option value="기업고객">기업고객</option>
          </select>
          <button type="submit">사전등록</button>
        </form>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              const form = document.querySelector('.waitlistForm');
              if (form) {
                form.addEventListener('submit', async function(e) {
                  e.preventDefault();
                  const button = form.querySelector('button');
                  const original = button.textContent;
                  button.textContent = '저장 중...';
                  button.disabled = true;

                  const formData = new FormData(form);
                  const payload = {
                    email: formData.get('email'),
                    role: formData.get('role')
                  };

                  try {
                    const res = await fetch('/api/waitlist', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload)
                    });
                    const data = await res.json();
                    alert(data.message || (data.ok ? '사전등록 완료' : '저장 실패'));
                    if (data.ok) form.reset();
                  } catch (err) {
                    alert('저장 중 오류가 발생했습니다.');
                  } finally {
                    button.textContent = original;
                    button.disabled = false;
                  }
                });
              }
            `
          }}
        />
      </section>

      <footer className="wrap footer">© 2026 AMN. Google Sheets connected version.</footer>
    </main>
  );
}
