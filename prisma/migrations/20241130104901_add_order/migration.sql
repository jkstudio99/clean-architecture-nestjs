-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderPersonId` INTEGER NOT NULL,
    `personAddressId` INTEGER NOT NULL,
    `deliveryNotes` VARCHAR(191) NULL,
    `deliveryTime` VARCHAR(191) NULL,
    `deliveryDay` VARCHAR(191) NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
