import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

type MoodEntry = {
  id: number
  user_id: string
  timestamp: string
  mood_score: number
  mood_label?: string
  notes?: string
  tags?: string[]
}

export const useMood = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([])
  const [loading, setLoading] = useState(false)

  const addMood = async (payload: Partial<MoodEntry>) => {
    setLoading(true)
    const { data, error } = await (supabase
      .from<MoodEntry>('mood_entries')
      .insert([{ ...payload, timestamp: payload.timestamp ?? new Date().toISOString(), user_id: payload.user_id ?? 'anon' }]) )
    setLoading(false)
    if (!error) {
      if (data && data[0]) setEntries(prev => [data[0], ...prev])
    }
    return { data, error }
  }

  const fetchMood = async (start?: string, end?: string) => {
    setLoading(true)
    let query = supabase.from<MoodEntry>('mood_entries').select('*')
    if (start) query = (query as any).gte('timestamp', start)
    if (end) query = (query as any).lte('timestamp', end)
    const { data, error } = await query
    setLoading(false)
    if (data) setEntries(data as MoodEntry[])
    return { data, error }
  }

  const exportCSV = (): string => {
    const header = ['id','user_id','timestamp','mood_score','mood_label','notes','tags'].join(',')
    const rows = entries.map(e => [e.id, e.user_id, e.timestamp, e.mood_score, e.mood_label ?? '', e.notes ?? '', (e.tags ?? []).join('|')].join(','))
    return header + '\n' + rows.join('\n')
  }

  return { entries, loading, addMood, fetchMood, exportCSV }
}
