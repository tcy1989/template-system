-- ─────────────────────────────────────────────────────────
-- SiteControl — Supabase migration
-- Run this once in: Supabase Dashboard → SQL Editor → Run
-- ─────────────────────────────────────────────────────────

-- 1. Create table
CREATE TABLE IF NOT EXISTS public.site_config (
  id          int PRIMARY KEY DEFAULT 1,
  colors      jsonb NOT NULL DEFAULT '{}',
  display_mode text  NOT NULL DEFAULT 'dark',
  sections    jsonb NOT NULL DEFAULT '[]',
  cloaking    jsonb NOT NULL DEFAULT '{}',
  updated_at  timestamptz DEFAULT now()
);

-- Enforce single-row
ALTER TABLE public.site_config
  ADD CONSTRAINT site_config_single_row CHECK (id = 1);

-- 2. Row Level Security
ALTER TABLE public.site_config ENABLE ROW LEVEL SECURITY;

-- Frontend can read
CREATE POLICY "Allow public read"
  ON public.site_config FOR SELECT
  USING (true);

-- Backoffice can write (tighten with Supabase Auth later if needed)
CREATE POLICY "Allow public update"
  ON public.site_config FOR UPDATE
  USING (true);

-- 3. Seed default config
INSERT INTO public.site_config (id, colors, display_mode, sections, cloaking)
VALUES (
  1,
  '{"primary":"#FF9FAA","secondary":"#FFB5BA","accent":"#FFDAAE","bgTint":"#FFD9F9"}',
  'dark',
  '[
    {"id":"hero",          "visible":true,"order":0},
    {"id":"providers",     "visible":true,"order":1},
    {"id":"game-filters",  "visible":true,"order":2},
    {"id":"inhouse-games", "visible":true,"order":3},
    {"id":"hot-new-games", "visible":true,"order":4},
    {"id":"promo-banners", "visible":true,"order":5},
    {"id":"table-games",   "visible":true,"order":6},
    {"id":"feature-cards", "visible":true,"order":7},
    {"id":"provably-fair", "visible":true,"order":8}
  ]',
  '{"enabled":false,"pageConfigured":true,"pageLabel":"WebTeck Business Site","selectedPage":"webteck","cloakMethod":"template","redirectUrl":""}'
)
ON CONFLICT (id) DO NOTHING;
