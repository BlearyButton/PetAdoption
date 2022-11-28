import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zhzrqbcyzqkbyeowkzcm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoenJxYmN5enFrYnllb3dremNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzNzYxOTEsImV4cCI6MTk4NDk1MjE5MX0.SoIL-wGDFThkAvHSz-b_GXTrRIyVoHn2I7pdkHt5m2g";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;