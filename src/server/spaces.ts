'use server';

import { createClient } from '@/lib/supabase/server';
import { Space } from '@/lib/types/space';

export async function getSpaces(): Promise<Space[] | []> {
  const db = await createClient();

  const { data } = await db.from('spaces').select();

  if (data) return data;

  return [];
}

export async function getSpace(id: string): Promise<Space> {
  const db = await createClient();
  const spaceId = Number(id)

  const { data, error } = await db
    .from('spaces')
    .select()
    .eq('id', spaceId)
    .single();

  if (error) {
    throw error;
  }

  if (data) return data;

  throw new Error('Space not found');
}
