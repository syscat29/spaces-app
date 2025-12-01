import { createClient } from '@/lib/supabase/server';
import { Space } from '@/lib/types/space';

export async function getSpaces(
  name?: string,
  city?: string
): Promise<Space[] | []> {
  const db = await createClient();
  let query = db.from('spaces').select().order('id', { ascending: true });

  if (name) query = query.ilike('title', `%${name}%`);
  if (city) query = query.ilike('city', `%${city}%`);

  const { data } = await query;

  if (data) return data;

  return [];
}
