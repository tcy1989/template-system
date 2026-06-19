import { supabase } from '@/lib/supabase.js'

const LOCAL_API = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api'

// ── helpers ───────────────────────────────────────────────────────────────────

function rowToConfig(row) {
  return {
    colors:      row.colors,
    displayMode: row.display_mode,
    sections:    row.sections,
    cloaking:    row.cloaking,
  }
}

async function localRequest(method, path, body = null) {
  const res = await fetch(`${LOCAL_API}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(`API error ${res.status}`)
  return res.json()
}

// ── themeApi ──────────────────────────────────────────────────────────────────

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
    return localRequest('GET', '/theme/config')
  },

  async saveConfig(config) {
    if (supabase) {
      const { error } = await supabase
        .from('site_config')
        .update({
          colors:       config.colors,
          display_mode: config.displayMode,
          sections:     config.sections,
          cloaking:     config.cloaking,
          updated_at:   new Date().toISOString(),
        })
        .eq('id', 1)
      if (error) throw new Error(error.message)
      return { success: true }
    }
    return localRequest('POST', '/theme/config', config)
  },
}

// ── sectionsApi ───────────────────────────────────────────────────────────────

export const sectionsApi = {
  async getSections() {
    const config = await themeApi.getConfig()
    return config.sections
  },

  async updateOrder(sections) {
    if (supabase) {
      const { error } = await supabase
        .from('site_config')
        .update({ sections, updated_at: new Date().toISOString() })
        .eq('id', 1)
      if (error) throw new Error(error.message)
      return { success: true }
    }
    return localRequest('PUT', '/sections/order', { sections })
  },
}
