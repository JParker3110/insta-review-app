import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://aucceckgazqbhvegetkd.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1Y2NlY2tnYXpxYmh2ZWdldGtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0ODkzNTYsImV4cCI6MjA0MzA2NTM1Nn0.tv4lhPdfC3uFcznW-g5Xu6i8EP-2RLDNldPJsir2BMY';

export const supabase = createClient(supabaseUrl, supabaseKey);
