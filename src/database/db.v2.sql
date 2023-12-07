-- Création de la base de donnée
CREATE DATABASE passwordv2;

-- Utilisation du base de donnée
USE passwordv2;

-- Création de la table Categorie
CREATE TABLE Categorie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    designation VARCHAR(255) NOT NULL
);

-- Création de la table Service
CREATE TABLE Service (
    id INT PRIMARY KEY AUTO_INCREMENT,
    designation VARCHAR(255) NOT NULL
);

-- Création de la table Societe
CREATE TABLE Societe (
    id INT PRIMARY KEY AUTO_INCREMENT,
    designation VARCHAR(255) NOT NULL
);

-- Création de la table Proprietaire
CREATE TABLE Proprietaire (
    id INT PRIMARY KEY AUTO_INCREMENT,
    designation VARCHAR(255) NOT NULL
);


-- Création de la table Autres
CREATE TABLE Autres (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    mdp VARCHAR(255) NOT NULL,
    categorie_id INT,
    proprietaire_id INT,
    service_id INT NOT NULL,
    societe_id INT NOT NULL,
    FOREIGN KEY (categorie_id) REFERENCES Categorie(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (proprietaire_id) REFERENCES Proprietaire(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (service_id) REFERENCES Service(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (societe_id) REFERENCES Societe(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Création de la table Admin
CREATE TABLE Admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
