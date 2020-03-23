/***CREATING ALL TABLES*/
CREATE TABLE USERS (
  UserId   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  FirstName    VARCHAR(40)                    NULL,
  LastName     VARCHAR(40)                    NULL,
  Email        VARCHAR(100)                   NULL,
  CreationDate DATETIME                       NULL
)
  ENGINE = INNODB;

/* INSERT DATA */
INSERT INTO USERS (FirstName, LastName, Email, CreationDate)
VALUES ('SYSADMIN', 'SYSADMIN', 'sysadmin@gmail.com',
        1, '2011-12-18 13:17:17');

DROP PROCEDURE IF EXISTS sp_GetUser;
DELIMITER //
CREATE PROCEDURE sp_GetUser()
  BEGIN
    SELECT * FROM USERS;
  END //
DELIMITER ;
/**Drop StoreProcedure**/
CALL sp_GetUser();
/******************************************************************/






