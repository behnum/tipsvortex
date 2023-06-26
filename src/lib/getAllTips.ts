import { connect } from '@planetscale/database'
import { config } from '@/db/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { tips, sources, categories } from '@/db/schema'
import { eq } from 'drizzle-orm'

export default async function getAllTips(): Promise<Tip[]> {
  const conn = connect(config)
  const db = drizzle(conn)

  const results: Tip[] = await db.select({
    tip: tips.tip,
    source: sources.source,
    category: categories.category,
  })
  .from(tips)
  .innerJoin(sources, eq(tips.sourceId, sources.id))
  .innerJoin(categories, eq(tips.categoryId, categories.id))

  return results
}
