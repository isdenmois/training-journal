CREATE TABLE `logs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`type` text NOT NULL,
	`date` integer NOT NULL,
	`count` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `date_idx` ON `logs` (`date`);--> statement-breakpoint
CREATE INDEX `count_idx` ON `logs` (`type`,`count`);