import { type VercelRequest, type VercelResponse } from "@vercel/node";

const API = "https://cleanuri.com/api/v1/shorten";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const t: string = req.body.t;

    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "url=" + encodeURIComponent(t),
    });

    if (!response.ok) {
      throw new Error("Failed to shorten link");
    }

    const data = await response.json();
    res.status(200).send(data);
  } catch (e: any) {
    res.status(500).send({ error: e.message });
  }
}
