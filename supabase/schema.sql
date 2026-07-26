-- ALVEA — appointments taken through /programare.
-- The clinic is fictional; the bookings are not: a taken hour really does
-- disappear from everyone else's calendar.

create table if not exists alvea_appointments (
  id           uuid primary key default gen_random_uuid(),
  code         text        not null,
  created_at   timestamptz not null default now(),
  service      text        not null,
  doctor       text        not null,
  day          date        not null,
  start_min    int         not null,      -- minutes from midnight, 08:00 = 480
  minutes      int         not null,      -- how long this service blocks
  name         text        not null,
  phone        text        not null,
  note         text,
  lang         text        not null default 'ro',
  status       text        not null default 'new'   -- new | done | cancelled
);

-- Two people cannot land on the same doctor, day and hour. The database
-- enforces it, so a race between two tabs cannot double-book.
create unique index if not exists alvea_slot_unique
  on alvea_appointments (doctor, day, start_min)
  where status <> 'cancelled';

create index if not exists alvea_day_idx on alvea_appointments (day, doctor);

alter table alvea_appointments enable row level security;

-- No anonymous access at all: everything goes through the API route, which
-- holds the service key. Nothing here is readable from the browser.
drop policy if exists alvea_no_anon on alvea_appointments;
create policy alvea_no_anon on alvea_appointments for select using (false);
