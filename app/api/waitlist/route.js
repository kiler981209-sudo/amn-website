export async function POST(request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim();
    const role = String(body.role || "관심고객").trim();

    if (!email || !email.includes("@")) {
      return Response.json({ ok: false, message: "올바른 이메일 주소를 입력해주세요." }, { status: 400 });
    }

    const endpoint = process.env.GOOGLE_SCRIPT_URL;
    if (!endpoint) {
      return Response.json({ ok: false, message: "GOOGLE_SCRIPT_URL 환경변수가 설정되지 않았습니다." }, { status: 500 });
    }

    const result = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        email,
        role,
        source: "AMN Landing Page",
        createdAt: new Date().toISOString()
      })
    });

    if (!result.ok) {
      return Response.json({ ok: false, message: "Google Sheets 저장에 실패했습니다." }, { status: 500 });
    }

    return Response.json({ ok: true, message: "사전등록이 완료되었습니다." });
  } catch (error) {
    return Response.json({ ok: false, message: "서버 오류가 발생했습니다.", detail: String(error) }, { status: 500 });
  }
}
