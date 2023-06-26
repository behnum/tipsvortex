import { NextResponse } from "next/server"
import getAllTips from "@/lib/getAllTips"

export async function GET(request: Request) {
  const tips = await getAllTips()

  return NextResponse.json(tips)
}