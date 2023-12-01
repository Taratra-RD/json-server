-- Création de la base de donnée
CREATE DATABASE password;

-- Utilisation du base de donnée
USE password;

-- Création de la table Categorie
CREATE TABLE Categorie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    designation VARCHAR(255) NOT NULL
);

-- Création de la table Proprietaire
CREATE TABLE Proprietaire (
    id INT PRIMARY KEY AUTO_INCREMENT,
    designation VARCHAR(255) NOT NULL
);

-- Création de la table Emplacement
CREATE TABLE Emplacement (
    id INT PRIMARY KEY AUTO_INCREMENT,
    services VARCHAR(255) NOT NULL,
    societe VARCHAR(255) NOT NULL
);

-- Création de la table Ordinateur
CREATE TABLE Ordinateur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ip VARCHAR(15) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES Categorie(id)
);

-- Création de la table Wifi
CREATE TABLE Wifi (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    mdp VARCHAR(255) NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES Categorie(id)
);

-- Création de la table Email
CREATE TABLE Email (
    id INT PRIMARY KEY AUTO_INCREMENT,
    adresse VARCHAR(255) NOT NULL,
    mdp VARCHAR(255) NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES Categorie(id)
);

-- Création de la table Autres
CREATE TABLE Autres (
    id INT PRIMARY KEY AUTO_INCREMENT,
    categorie VARCHAR(255) NOT NULL,
    nom VARCHAR(255) NOT NULL,
    mdp VARCHAR(255) NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES Categorie(id)
);


-- Création de la table Employe
CREATE TABLE Employe (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    emplacement_id INT,
    proprietaire_id INT,
    ordi_id INT,
    FOREIGN KEY (emplacement_id) REFERENCES Emplacement(id),
    FOREIGN KEY (proprietaire_id) REFERENCES Proprietaire(id),
    FOREIGN KEY (ordi_id) REFERENCES Ordinateur(id)
);

-- Création de la table Serveurs
CREATE TABLE Serveurs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    emplacement_id INT,
    proprietaire_id INT,
    ordi_id INT,
    FOREIGN KEY (emplacement_id) REFERENCES Emplacement(id),
    FOREIGN KEY (proprietaire_id) REFERENCES Proprietaire(id),
    FOREIGN KEY (ordi_id) REFERENCES Ordinateur(id)
);

-- Création de la table Admin
CREATE TABLE Admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
