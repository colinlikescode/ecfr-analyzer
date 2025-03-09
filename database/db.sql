CREATE TABLE IF NOT EXISTS agencies (
  agency_uuid        text PRIMARY KEY,
  name               text,
  short_name         text,
  display_name       text,
  sortable_name      text,
  slug_id            text UNIQUE,
  has_child_agencies boolean,
  child_slug_id      jsonb,
  cfr_references     jsonb,
  parent_slug_id     text,
  word_count         jsonb
);


