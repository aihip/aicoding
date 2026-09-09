CREATE TABLE page_views (
  page TEXT PRIMARY KEY NOT NULL,
  views INTEGER NOT NULL DEFAULT 0 CHECK (views >= 0),
  updated_at INTEGER NOT NULL
);
