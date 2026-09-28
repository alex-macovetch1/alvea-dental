# ALVEA — dental clinic website with online booking

Website for a dental clinic in Chișinău, in Romanian and Russian, with online booking based on real free
time slots. **The clinic is fictional** — names, doctors, prices and reviews are demo data, marked as such on the site.

**Live demo:** https://alvea-taupe.vercel.app

Built with AI-assisted development (Claude Code).

## Problem

Small clinics in Moldova take most appointments by phone. Patients want to see prices and pick a time
themselves; the clinic wants the booked hours to disappear from the calendar without extra work.

## What I built

- Booking in five steps: service → doctor → day → time → contact details
- Free slots are computed on the server from clinic hours, each doctor's working days and the service
  duration, minus the appointments already in the database
- The calendar shows how many free slots each day has; "any available doctor" finds the first free slot
- Server-side re-check of the slot on confirmation, form validation, rate limit of 5 requests per minute per IP
- Admin agenda (`/admin`, password-protected, `noindex`): mark visits as done or cancelled
- Content pages: services with prices, team, before/after cases, blog, contact

## Stack

Next.js 16 (App Router), React 19, TypeScript, CSS Modules, Supabase (PostgreSQL) for appointments.

## The hard part

Keeping the calendar rules identical in the browser and on the server. The slot logic is written as pure
functions (`lib/slots.ts`) used by both, so the client never shows a slot the server would reject.

## Known limitation

The database has a unique index on (doctor, day, start time). It prevents two bookings that **start** at
the same time, but not two bookings of different lengths that **overlap** (for example 09:00–10:00 and
09:30) if they arrive at the same moment. Also, if the database query for taken slots fails, it currently
returns an empty list instead of an error. The planned fix: a PostgreSQL `EXCLUDE USING gist`
constraint on the time range, and failing the booking when the check cannot run.

## Run locally

```bash
npm install
cp .env.example .env.local   # SUPABASE_URL, SUPABASE_SERVICE_KEY, ADMIN_KEY
npm run dev
```

Create the table with `supabase/schema.sql`. Without the keys the site still runs and the booking page
says that online booking is unavailable.

## What I would improve

- The overlap fix above
- Automated tests for the slot rules and the booking API
- SMS or email confirmation for patients

Photos and videos: Unsplash and Pexels (free license).
