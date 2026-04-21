import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  console.log(supabase)

  return (
    <ul>
      hey
    </ul>
  )
}