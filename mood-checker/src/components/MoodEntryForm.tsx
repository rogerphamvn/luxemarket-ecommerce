import React, { useState } from 'react'
import { useMood } from '../hooks/useMood'

export default function MoodEntryForm(){
  const { addMood } = useMood()
  const [score, setScore] = useState<number>(5)
  const [label, setLabel] = useState<string>('')
  const [notes, setNotes] = useState<string>('')

  const submit = async () => {
    await addMood({ mood_score: score, mood_label: label, notes })
  }

  return (
    <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, display:'inline-block' }}>
      <div>
        <input type="range" min={1} max={10} value={score} onChange={e => setScore(parseInt(e.target.value))} />
        <span> {score}</span>
      </div>
      <div>
        <input placeholder="Label (optional)" value={label} onChange={e => setLabel(e.target.value)} />
      </div>
      <div>
        <textarea placeholder="Notes" value={notes} onChange={e => setNotes(e.target.value)} />
      </div>
      <button onClick={submit}>Add Mood</button>
    </div>
  )
}
