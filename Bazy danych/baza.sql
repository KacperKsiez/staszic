CREATE DATABASE 4eP_matura;
USE 4eP_matura;

CREATE TABLE Klasy
(
    IDKlasy int PRIMARY KEY AUTO_INCREMENT,
    Profil varchar(50)
);

CREATE TABLE Przedmioty
(
    IDPrzedmiotu int PRIMARY KEY AUTO_INCREMENT,
    Nazwa varchar(250)
);

CREATE TABLE Uczniowie
(
    NumerLegitymacji int AUTO_INCREMENT PRIMARY KEY,
    Imie varchar(20),
    Nazwisko varchar(100),
    IDKlasy int
);

ALTER TABLE Uczniowie
ADD FOREIGN KEY (IDKlasy)
REFERENCES Klasy(IDKlasy);