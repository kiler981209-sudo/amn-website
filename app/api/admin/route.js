export async function GET(request) {
  try {
    const endpoint = process.env.GOOGLE_SCRIPT_URL;
    const adminKey = process.env.ADMIN_KEY || "amn-admin";
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (key !== adminKey) {
      return Response.json({ ok: false, message: "관리자 키가 올바르지 않습니다." }, { status: 401 });
    }

    if (!endpoint) {
      return Response.json({ ok: false, message: "GOOGLE_SCRIPT_URL 환경변수가 설정되지 않았습니다." }, { status: 500 });
    }

    const url = endpoint + (endpoint.includes("?") ? "&" : "?") + "mode=list";
    const result = await fetch(url, { method: "GET", cache: "no-store" });
    const data = await result.json();

    if (!data.ok) {
      return Response.json({ ok: false, message: "Google Sheets 데이터를 불러오지 못했습니다.", detail: data }, { status: 500 });
    }

    const rows = data.rows || [];
    const todayKey = new Date().toISOString().slice(0, 10);
    const byRole = {};
    const byDate = {};

    rows.forEach((row) => {
      const role = row.role || "미분류";
      byRole[role] = (byRole[role] || 0) + 1;
      const date = String(row.createdAt || row.registeredAt || "").slice(0, 10) || "unknown";
      byDate[date] = (byDate[date] || 0) + 1;
    });

    const todayCount = rows.filter((row) => String(row.createdAt || row.registeredAt || "").slice(0, 10) === todayKey).length;

    return Response.json({
      ok: true,
      total: rows.length,
      todayCount,
      byRole,
      byDate,
      recent: rows.slice(-20).reverse()
    });
  } catch (error) {
    return Response.json({ ok: false, message: "서버 오류가 발생했습니다.", detail: String(error) }, { status: 500 });
  }
}
