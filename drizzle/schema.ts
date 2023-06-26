import { mysqlTable, mysqlSchema, AnyMySqlColumn, uniqueIndex, int, varchar, index } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const categories = mysqlTable("categories", {
	id: int("id").autoincrement().primaryKey().notNull(),
	category: varchar("category", { length: 255 }).notNull(),
},
(table) => {
	return {
		category: uniqueIndex("category").on(table.category),
	}
});

export const sources = mysqlTable("sources", {
	id: int("id").autoincrement().primaryKey().notNull(),
	source: varchar("source", { length: 255 }).notNull(),
},
(table) => {
	return {
		source: uniqueIndex("source").on(table.source),
	}
});

export const tips = mysqlTable("tips", {
	id: int("id").autoincrement().primaryKey().notNull(),
	tip: varchar("tip", { length: 255 }).notNull(),
	sourceId: int("source_id").notNull(),
	categoryId: int("category_id").notNull(),
},
(table) => {
	return {
		categoryIdIdx: index("category_id_idx").on(table.categoryId),
		sourceIdIdx: index("source_id_idx").on(table.sourceId),
		tip: uniqueIndex("tip").on(table.tip),
	}
});