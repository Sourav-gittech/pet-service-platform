import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://wcselabrbjnscasoovks.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indjc2VsYWJyYmpuc2Nhc29vdmtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1ODY1ODYsImV4cCI6MjA3NDE2MjU4Nn0.sILjGyjvCoxiNR2T0lPfQWxs7USsLbxKNvy9vqlFKk0';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;