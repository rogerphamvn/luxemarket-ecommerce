-- Minimal mood_entries table for MVP (anonymous/users optional)
CREATE TABLE IF NOT EXISTS mood_entries (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  mood_score INTEGER CHECK (mood_score >= 1 AND mood_score <= 10),
  mood_label TEXT,
  notes TEXT,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Flavor: ensure you set RLS policies in Supabase console
