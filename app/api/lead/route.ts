import { NextRequest, NextResponse } from 'next/server'
import { dataSource } from '@/lib/db/data-source'
import { Lead } from '@/lib/entity/Lead'

// Initialize database connection
async function initializeDatabase() {
  if (!dataSource.isInitialized) {
    await dataSource.initialize()
  }
}

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase()
    
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const lead = new Lead()
    lead.name = name
    lead.email = email
    lead.createdAt = new Date()

    const leadRepository = dataSource.getRepository(Lead)
    await leadRepository.save(lead)

    return NextResponse.json(
      { message: 'Lead saved successfully', lead },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving lead:', error)
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await initializeDatabase()
    const leadRepository = dataSource.getRepository(Lead)
    const leads = await leadRepository.find()
    return NextResponse.json(leads)
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}