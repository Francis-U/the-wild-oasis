import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nbcsppxfqeuadulszrvi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iY3NwcHhmcWV1YWR1bHN6cnZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczNzI2ODEsImV4cCI6MjA5Mjk0ODY4MX0.RSRSI8ESgBiJGjIa3vmqc-rRaAU3Oja7Bh9N6SarfSM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
