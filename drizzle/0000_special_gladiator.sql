-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `categories` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`category` varchar(255) NOT NULL);

CREATE TABLE `sources` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`source` varchar(255) NOT NULL);

CREATE TABLE `tips` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`tip` varchar(255) NOT NULL,
	`source_id` int NOT NULL,
	`category_id` int NOT NULL);

CREATE UNIQUE INDEX `category` ON `categories` (`category`);
CREATE UNIQUE INDEX `source` ON `sources` (`source`);
CREATE INDEX `category_id_idx` ON `tips` (`category_id`);
CREATE INDEX `source_id_idx` ON `tips` (`source_id`);
CREATE UNIQUE INDEX `tip` ON `tips` (`tip`);
*/