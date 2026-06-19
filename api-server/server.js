import express from 'express'
import cors from 'cors'
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CONFIG_PATH = resolve(__dirname, 'data/config.json')

const app = express()

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}))

app.use(express.json())

function readConfig() {
  return JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'))
}

function writeConfig(data) {
  writeFileSync(CONFIG_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/theme/config', (_req, res) => {
  try {
    res.json(readConfig())
  } catch {
    res.status(500).json({ error: 'Failed to read config' })
  }
})

app.post('/api/theme/config', (req, res) => {
  try {
    const current = readConfig()
    const updated = { ...current, ...req.body }
    writeConfig(updated)
    res.json({ ok: true, config: updated })
  } catch {
    res.status(500).json({ error: 'Failed to save config' })
  }
})

app.put('/api/sections/order', (req, res) => {
  try {
    const { sections } = req.body
    const current = readConfig()
    current.sections = sections
    writeConfig(current)
    res.json({ ok: true })
  } catch {
    res.status(500).json({ error: 'Failed to update sections' })
  }
})

const PORT = 8000
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`)
  console.log(`  GET  /api/health`)
  console.log(`  GET  /api/theme/config`)
  console.log(`  POST /api/theme/config`)
})
