import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl) throw new Error('Missing VITE_SUPABASE_URL')
if (!supabaseAnonKey) throw new Error('Missing VITE_SUPABASE_ANON_KEY')

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test query
supabase
  .from('posts')
  .select('count', { count: 'exact' })
  .then(({ count, error }) => {
    if (error) {
      console.error('Error connecting to Supabase:', error)
    } else {
      console.log('Successfully connected to Supabase. Number of posts:', count)
    }
  })