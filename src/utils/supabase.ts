import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mjbgcetafmjulpbasqgk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qYmdjZXRhZm1qdWxwYmFzcWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1MDk0MTAsImV4cCI6MjAzNzA4NTQxMH0.OXtOg8BYstQ1DbjD2r_ZdSxxQ4zL7eqcubz4enuicZw'

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