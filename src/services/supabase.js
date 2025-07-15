import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nevdvobkjzdfsbcliuej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ldmR2b2JranpkZnNiY2xpdWVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxMzY4NTcsImV4cCI6MjA2NzcxMjg1N30.A2L4dDJbHPadURWP7Tfl2qf8fR7-NcVqrmj6ABOsn6k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
