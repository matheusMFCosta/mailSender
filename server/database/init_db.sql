/***CREATING ALL TABLES*/
CREATE USER root;
-- CREATE DATABASE docker;

CREATE DATABASE mybooks;

-- CREATE USER "foo"@"localhost" IDENTIFIED WITH mysql_native_password BY "bar";
GRANT ALL PRIVILEGES ON DATABASE mybooks TO root;
-- GRANT ALL PRIVILEGES on mybooks.*
-- TO 'root'@'%' IDENTIFIED BY 'root'
-- WITH GRANT OPTION;

CREATE TABLE EMPLOYEE (
  EmployeeId   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  FirstName    VARCHAR(40)                    NULL,
  LastName     VARCHAR(40)                    NULL,
  Phone        VARCHAR(20)                    NULL,
  Address      VARCHAR(100)                   NULL,
  City         VARCHAR(30)                    NULL,
  FullName     VARCHAR(100)                   NULL,
  Email        VARCHAR(100)                   NULL,
  Pin          VARCHAR(100)                   NULL,
  CreationDate DATETIME                       NULL,
  EmployeeCode VARCHAR(10) UNIQUE             NOT NULL
);

/* INSERT DATA */
INSERT INTO EMPLOYEE (FirstName, LastName, Phone, Address, City, FullName, Email, Pin, CreationDate, EmployeeCode)
VALUES ("SYSADMIN", "SYSADMIN", 945214775, "Av. Alfonso Ugarte", "Lima", "SYSADMIN SYSADMIN", "sysadmin@gmail.com",
        1, "2011-12-18 13:17:17", "SYSADMIN");

