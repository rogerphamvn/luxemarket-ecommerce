import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import MoodEntryForm from '../components/MoodEntryForm'
import { useMood } from '../hooks/useMood'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
const supabase = createClient(supabaseUrl, supabaseAnonKey)
const anonUserId = 'anon'

export default function Home() {
  const [score, setScore] = useState<number>(5)
  const [notes, setNotes] = useState<string>('')
  const { entries, loading, addMood, fetchMood, exportCSV } = useMood()

  const submitMood = async () => {
  // Use anonymous user id for MVP. Can switch to real user after auth
    await supabase.from('mood_entries').insert({ user_id: anonUserId, timestamp: new Date().toISOString(), mood_score: score, notes })
    // refresh local entries after insert if needed
    fetchMood()
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Mood Quick Entry</h1>
      <input type="range" min={1} max={10} value={score} onChange={e => setScore(parseInt(e.target.value))} />
      <div>Score: {score}</div>
      <textarea placeholder="Notes" value={notes} onChange={e => setNotes(e.target.value)} />
      <button onClick={submitMood}>Submit</button>
      <MoodEntryForm />
      <div>
        <button onClick={() => console.log(exportCSV())}>Export CSV (log)</button>
      </div>
    </div>
  )
}
