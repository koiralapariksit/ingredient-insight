import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function POST(request: NextRequest) {
  try {
    // Revert the about page to its previous commit state
    await execAsync('git checkout HEAD -- app/about/page.tsx', {
      cwd: process.cwd(),
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Revert failed:', error)
    return NextResponse.json(
      { error: 'Failed to revert changes' },
      { status: 500 }
    )
  }
}
