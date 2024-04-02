import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const params = Object.fromEntries(req.nextUrl.searchParams.entries()) as any;

  if (!params.count || !Number(params.count)) {
    return new Response(JSON.stringify({ message: "Invalid params" }), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }
  const url = `https://forplanet-api.singlepagestartup.com/api/sps-billing/invoices/certificate/?count=${params.count}&type=pdf`;

  return fetch(url)
    .catch((err) => {
      console.log(`certificate error`, err.message);

      return fetch(url);
    })
    .then((res) => {
      console.log(`certificate res`, res.status);

      if (res.status !== 200) {
        return fetch(url);
      }

      return res;
    });
}
