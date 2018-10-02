
CREATE TABLE ACCOUNT
(
  AccountId VARCHAR(40) PRIMARY KEY NOT NULL,
  Host VARCHAR(40) NULL,
  Name VARCHAR(40) NULL,
  CreationDate VARCHAR(40) NULL,
  Enviroment VARCHAR(40) NULL,
  Contract VARCHAR(40) NULL,
  Status VARCHAR(40) NULL,
  EmailTemplates VARCHAR(40) NULL,
);


CREATE TABLE EmailTemplate
(
  templateId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  content BLOB NULL,
  type VARCHAR(40) NULL,
  CreationDate VARCHAR(40) NULL
);


CREATE TABLE Log
(
  LogId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  EmailsCout INT NULL,
  Emails ARCHAR(40) NULL,
  AccountId VARCHAR(40) NULL,
  SendData VARCHAR(40) NULL
);

/* INSERT DATA */
-- INSERT INTO EMPLOYEE (FirstName, LastName, Phone, Address, City, FullName, Email, Pin, CreationDate, EmployeeCode)
-- VALUES ("SYSADMIN", "SYSADMIN", 945214775, "Av. Alfonso Ugarte", "Lima", "SYSADMIN SYSADMIN", "sysadmin@gmail.com",
--         1, "2011-12-18 13:17:17", "SYSADMIN");

