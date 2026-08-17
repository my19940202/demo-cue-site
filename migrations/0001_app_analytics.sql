CREATE TABLE IF NOT EXISTS app_installs (
  install_id_hash TEXT PRIMARY KEY,
  first_seen_at TEXT NOT NULL,
  last_seen_at TEXT NOT NULL,
  app_version TEXT NOT NULL,
  platform TEXT NOT NULL,
  locale TEXT
);

CREATE TABLE IF NOT EXISTS app_daily_active (
  date TEXT NOT NULL,
  install_id_hash TEXT NOT NULL,
  app_version TEXT NOT NULL,
  platform TEXT NOT NULL,
  locale TEXT,
  seen_at TEXT NOT NULL,
  PRIMARY KEY (date, install_id_hash)
);

CREATE INDEX IF NOT EXISTS idx_app_installs_last_seen_at
  ON app_installs (last_seen_at);

CREATE INDEX IF NOT EXISTS idx_app_daily_active_date
  ON app_daily_active (date);
