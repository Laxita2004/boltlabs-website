create table shiva_messages (
  id serial primary key,
  sender text default 'Shiva',
  created_at timestamp default now()
);
