import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  try {
    const body = await request.json();
    const res = await axios.post(
      `https://backend.magnateshop.uz/api/auth/login
`,
      body,
    );
    const token =
      res.data?.token ||
      res.data?.accessToken ||
      res.data?.data?.token ||
      res.data?.data?.accessToken;
    console.log(token);

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { message: error.response?.data?.message || "Login xato!" },
      { status: 400 },
    );
  }
}
