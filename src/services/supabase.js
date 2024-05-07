import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://owtixiraeqjkzpjmmwfr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93dGl4aXJhZXFqa3pwam1td2ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NzcxNTEsImV4cCI6MjAyNzA1MzE1MX0.LUE3uDmOtjEchLXF1FAfwWecqynnbxRFUejFpogdZ6Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
