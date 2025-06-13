-- Example schema
create table profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  created_at timestamp default now()
);
