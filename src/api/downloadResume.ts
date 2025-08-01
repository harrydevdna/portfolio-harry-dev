import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    // Log the download (optional)
    console.log("Resume downloaded at:", new Date().toISOString())

    // Read the resume file
    const resumePath = path.join(process.cwd(), "public", "resume", "Harry_Dev_Resume.pdf")
    const fileBuffer = fs.readFileSync(resumePath)

    // Return the file
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Harry_Dev_Resume.pdf"',
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 })
  }
}
