import { supabase } from '@/lib/supabase.js'

const LOCAL_API = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api'

function rowToConfig(row) {
  return {
    colors:      row.colors,
    displayMode: row.display_mode,
    sections:    row.sections,
    cloaking:    row.cloaking,
  }
}

export const themeApi = {
  async getConfig() {
    if (supabase) {
      const { data, error } = await supabase
        .from('site_config')
        .select('*')
        .eq('id', 1)
        .single()
      if (error) throw new Error(error.message)
      return rowToConfig(data)
    }
    const res = await fetch(`${LOCAL_API}/theme/config`)
    if (!res.ok) throw new Error('Failed to load config')
    return res.json()
  },
}
