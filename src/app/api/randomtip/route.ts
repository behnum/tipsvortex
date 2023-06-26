import { NextResponse } from "next/server"
import getRandomTip from "@/lib/getRandomTip"

export async function GET(request: Request) {
  const tip = await getRandomTip()

  return NextResponse.json(tip)
}