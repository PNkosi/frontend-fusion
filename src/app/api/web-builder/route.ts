import { NextResponse } from 'next/server'
import os from 'node:os'
export function GET() {
    return NextResponse.json({
        platform: os.platform(),
    })
}