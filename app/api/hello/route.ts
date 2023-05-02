import projects from "../projects/data.json"
import { NextResponse } from "next/server"

export async function GET(req:Request,res:Response) {
  return NextResponse.json(projects)
}
