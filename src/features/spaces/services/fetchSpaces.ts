import { createClient } from '@/lib/supabase/server';
import { Space } from '@/lib/types/space';

export async function getSpaces(): Promise<Space[] | []> {
  const db = await createClient();

  const { data } = await db.from('spaces').select('*');

  if (data) return data;

  return [];
}
