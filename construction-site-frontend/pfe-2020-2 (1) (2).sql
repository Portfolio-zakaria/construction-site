-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2020 at 12:18 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pfe-2020-2`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_role`
--

CREATE TABLE `app_role` (
  `id` bigint(20) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `app_role`
--

INSERT INTO `app_role` (`id`, `role_name`) VALUES
(1, 'USER');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` bigint(20) NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `intitule` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `designation`, `intitule`) VALUES
(7, 'Les EPI regroupent un large éventail d\'équipements...', 'Des équipements de protection individuelle'),
(8, 'Matériel de coffrage, étaiements', 'Matériel de coffrage'),
(9, 'Matériel de levage pour les grande matériel', 'Matériel de levage'),
(10, 'MATÉRIEL DE PLOMBERIE BON QUALITE ', 'MATÉRIEL DE PLOMBERIE');

-- --------------------------------------------------------

--
-- Table structure for table `chantier`
--

CREATE TABLE `chantier` (
  `id_chantier` int(11) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `date_creation` date DEFAULT NULL,
  `intitule` varchar(255) DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `chef_chantier_id` bigint(20) DEFAULT NULL,
  `id_clt` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chantier`
--

INSERT INTO `chantier` (`id_chantier`, `adresse`, `date_creation`, `intitule`, `statut`, `ville`, `chef_chantier_id`, `id_clt`) VALUES
(1, 'hay nahda hay nahda CA 4898', '2020-06-25', 'Chantier 1', 'En cours', 'dakhla', NULL, 1),
(2, 'salam Dakhla salam Dakhla CA 1234', '2020-06-25', 'Chantier 2', 'A l\'étude', 'Dakhla', NULL, 1),
(3, 'hay sidi abad hay sidi abad CA 78921', '2020-06-25', 'Chantier 3', 'A l\'étude', 'Marrekch', NULL, 2),
(4, 'Marrakech dawdiyat Marrakech dawdiyat CA 123456', '2019-06-25', 'chantier 4', 'En cours', 'Marrakech', NULL, 2),
(5, '2389  Brown Avenue Seneca 2389  Brown Avenue Seneca CA 123345', '2018-06-25', 'Chantier 5', 'Achevé', 'Casa', NULL, 2),
(6, '2389  Brown Avenue Seneca 2389  Brown Avenue Seneca cc 1545', '2018-06-25', 'Chantier 7', 'Achevé', 'laayoun', NULL, 2),
(7, 'Marrekch sidi yoyssef Marrekch sidi yoyssef CA 12356', '2018-06-25', 'Chantier 7', 'Litige/Contentieux', 'Marrekch', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `chef_chantier`
--

CREATE TABLE `chef_chantier` (
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `id` bigint(20) NOT NULL,
  `id_chef_chantier` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chef_chantier`
--

INSERT INTO `chef_chantier` (`password`, `username`, `id`, `id_chef_chantier`) VALUES
('$2a$10$lm7sWN0aeNdTG9CwtDqZQeaYZhD7v46P5vBOlHA8R08OhEG/Jtbc.', 'user', 1, NULL),
('$2a$10$MmIjxRe51NlIiK8DJcn99.N1zB54faN5W9aEduxVn1xrjpnFhaAgO', 'user1', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `chef_chantier_roles`
--

CREATE TABLE `chef_chantier_roles` (
  `chef_chantier_id` bigint(20) NOT NULL,
  `roles_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chef_chantier_roles`
--

INSERT INTO `chef_chantier_roles` (`chef_chantier_id`, `roles_id`) VALUES
(2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id_clt` bigint(20) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `cp` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `statu_civilite` varchar(255) DEFAULT NULL,
  `suite_adress` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `type_tier` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id_clt`, `adresse`, `cp`, `email`, `etat`, `nom`, `prenom`, `statu_civilite`, `suite_adress`, `tel`, `type`, `type_tier`, `ville`) VALUES
(1, 'Dakhla hay nahda 22356', '12356', 'zakaria@gmail.com', 'CP', 'achaghour', 'zakaria', 'Civilite', 'Appartement', '+212587463215', 'Professionnel', 'Client', 'Dakhla'),
(2, 'Marrakech sidid abad', '78954', 'mohcen@gmail.com', 'CA', 'Motaqi', 'Mohcen', 'Civilite', 'Studio', '0638404045', 'Particulier', 'Client', 'Marrakech');

-- --------------------------------------------------------

--
-- Table structure for table `commande`
--

CREATE TABLE `commande` (
  `id_commande` bigint(20) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `date_commande` datetime DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `total_payment` float NOT NULL,
  `chantier_id_chantier` int(11) DEFAULT NULL,
  `chef_chantier_id` bigint(20) DEFAULT NULL,
  `facture_id_facture` bigint(20) DEFAULT NULL,
  `fournisseur_id_fournisseur` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `commande`
--

INSERT INTO `commande` (`id_commande`, `code`, `date_commande`, `etat`, `total_payment`, `chantier_id_chantier`, `chef_chantier_id`, `facture_id_facture`, `fournisseur_id_fournisseur`) VALUES
(14, 'CF0000-14158', '2020-06-25 17:21:50', 'En Attente', 1350, 1, NULL, NULL, 6),
(17, 'CF0000-36071', '2020-06-25 17:22:34', 'En Attente', 2250, 3, NULL, NULL, 6),
(20, 'CF0000-41654', '2020-06-25 17:23:07', 'En Attente', 3100, 4, NULL, NULL, 6);

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

CREATE TABLE `employe` (
  `dateengagement` date DEFAULT NULL,
  `profil` varchar(255) DEFAULT NULL,
  `salaire` double NOT NULL,
  `id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`dateengagement`, `profil`, `salaire`, `id`) VALUES
('2020-06-25', 'plombier', 200, 3),
('2020-06-16', 'Masson', 150, 4),
('2020-06-27', 'Masson', 100, 5);

-- --------------------------------------------------------

--
-- Table structure for table `employe_taches`
--

CREATE TABLE `employe_taches` (
  `employes_id` bigint(20) NOT NULL,
  `taches_id_tache` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employe_taches`
--

INSERT INTO `employe_taches` (`employes_id`, `taches_id_tache`) VALUES
(3, 1),
(3, 2),
(3, 4),
(4, 2),
(4, 4),
(4, 5),
(5, 4),
(5, 6);

-- --------------------------------------------------------

--
-- Table structure for table `facture`
--

CREATE TABLE `facture` (
  `id_facture` bigint(20) NOT NULL,
  `id_commande` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `fournisseur`
--

CREATE TABLE `fournisseur` (
  `id_fournisseur` bigint(20) NOT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `tel` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `fournisseur`
--

INSERT INTO `fournisseur` (`id_fournisseur`, `adress`, `email`, `nom`, `prenom`, `tel`) VALUES
(6, 'hay nahda', 'mjid@gmail.com', 'abdelmjid', 'jbira', 212587463215);

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(24),
(24),
(24),
(24),
(24),
(24),
(24),
(24),
(24);

-- --------------------------------------------------------

--
-- Table structure for table `ligne_commande`
--

CREATE TABLE `ligne_commande` (
  `id_ligne_commande` bigint(20) NOT NULL,
  `qte_commander` int(11) NOT NULL,
  `id_commande` bigint(20) DEFAULT NULL,
  `id_mat` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ligne_commande`
--

INSERT INTO `ligne_commande` (`id_ligne_commande`, `qte_commander`, `id_commande`, `id_mat`) VALUES
(15, 4, 14, 11),
(16, 3, 14, 12),
(18, 7, 17, 13),
(19, 4, 17, 11),
(21, 6, 20, 11),
(22, 5, 20, 12),
(23, 7, 20, 13);

-- --------------------------------------------------------

--
-- Table structure for table `materiel`
--

CREATE TABLE `materiel` (
  `id_mat` bigint(20) NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prix_ttc` double NOT NULL,
  `prix_unitair` double NOT NULL,
  `ref` varchar(255) DEFAULT NULL,
  `taux_tva` double NOT NULL,
  `category_id_category` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `materiel`
--

INSERT INTO `materiel` (`id_mat`, `designation`, `nom`, `prix_ttc`, `prix_unitair`, `ref`, `taux_tva`, `category_id_category`) VALUES
(11, 'Mini-élévateur à ciseaux compact et maniable.', 'Nacelle électrique ciseaux S', 1800, 300, 'S 3010 E', 5, 9),
(12, '\nTransport et manutention de charges sur sites indu...', 'pose-bordure sans pince', 150, 50, 'S 333 G', 2, 7),
(13, 'Composant pour tuyau d\'évier RS Pro, 1-1/4pouce', 'Captive Plug Basin Waste,1 1/4in Bsp M', 180, 150, 'MP 01', 0.2, 8);

-- --------------------------------------------------------

--
-- Table structure for table `planification`
--

CREATE TABLE `planification` (
  `id_planing` bigint(20) NOT NULL,
  `date_fin` date DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `id_tache` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `planification`
--

INSERT INTO `planification` (`id_planing`, `date_fin`, `date_start`, `id_tache`) VALUES
(1, '2020-06-30', '2020-06-24', 1),
(2, '2020-06-30', '2020-06-24', 2),
(3, '2020-07-09', '2020-06-24', 2),
(4, '2020-07-11', '2020-06-30', 4),
(5, '2020-07-11', '2020-06-30', 4),
(6, '2020-07-03', '2020-07-01', 5),
(7, '2020-07-11', '2020-07-08', 6);

-- --------------------------------------------------------

--
-- Table structure for table `ressource_humanies`
--

CREATE TABLE `ressource_humanies` (
  `type_personne` varchar(31) NOT NULL,
  `id` bigint(20) NOT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `tel` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ressource_humanies`
--

INSERT INTO `ressource_humanies` (`type_personne`, `id`, `adress`, `email`, `nom`, `prenom`, `tel`) VALUES
('chef_chantier', 1, NULL, NULL, NULL, NULL, 0),
('chef_chantier', 2, NULL, NULL, NULL, NULL, 0),
('employe', 3, '2356 New york city', 'Shields@gmail.com', 'Gary', 'Shields', 638404045),
('employe', 4, '2389  Brown Avenue Seneca', 'Andre@gmail.com', 'Andre', 'Jaeger', 212587463215),
('employe', 5, '2389  Brown Avenue Seneca', 'colby@gmail.com', 'Colby', 'colby', 638404045);

-- --------------------------------------------------------

--
-- Table structure for table `ressource_materielles`
--

CREATE TABLE `ressource_materielles` (
  `id_mat` bigint(20) NOT NULL,
  `description_mat` varchar(255) DEFAULT NULL,
  `intitule_mat` varchar(255) DEFAULT NULL,
  `chantier_id_chantier` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sous_tache`
--

CREATE TABLE `sous_tache` (
  `id_sous_tache` bigint(20) NOT NULL,
  `intitule` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sous_traitant`
--

CREATE TABLE `sous_traitant` (
  `specialite` varchar(255) DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tache`
--

CREATE TABLE `tache` (
  `id_tache` int(11) NOT NULL,
  `vh` int(11) NOT NULL,
  `intitule` varchar(255) DEFAULT NULL,
  `id_chantier` int(11) DEFAULT NULL,
  `id_planing` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tache`
--

INSERT INTO `tache` (`id_tache`, `vh`, `intitule`, `id_chantier`, `id_planing`) VALUES
(1, 40, 'Tache 1', 1, 1),
(2, 50, 'Tache 2', 1, 3),
(3, 70, 'Tache 3', 1, NULL),
(4, 100, 'Tache 1', 3, 5),
(5, 30, 'Tache 2', 3, 6),
(6, 20, 'Tache 3', 3, 7),
(7, 60, 'Tache 1', 2, NULL),
(8, 300, 'Tache 2', 2, NULL),
(9, 200, 'Tache 1', 4, NULL),
(10, 78, 'Tache 2', 4, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_role`
--
ALTER TABLE `app_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `chantier`
--
ALTER TABLE `chantier`
  ADD PRIMARY KEY (`id_chantier`),
  ADD KEY `FK6xorpuk7p5wop89winh61hhby` (`chef_chantier_id`),
  ADD KEY `FKnnp9huemofr1od947nbq7e7p6` (`id_clt`);

--
-- Indexes for table `chef_chantier`
--
ALTER TABLE `chef_chantier`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_nrv9r1e5nqcvgee61vy6ra60v` (`username`),
  ADD KEY `FKlasxoxesfqktraj5str4daf8p` (`id_chef_chantier`);

--
-- Indexes for table `chef_chantier_roles`
--
ALTER TABLE `chef_chantier_roles`
  ADD KEY `FK6f47gn6bflt75ah2nw7fi39cr` (`roles_id`),
  ADD KEY `FK2dis4wjpmals0yp49ade4g1gk` (`chef_chantier_id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_clt`);

--
-- Indexes for table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id_commande`),
  ADD KEY `FK6f1ueco0k57w6j5x5uen4i2m8` (`chantier_id_chantier`),
  ADD KEY `FKd9s576tgrl9q5clxua07ts8h3` (`chef_chantier_id`),
  ADD KEY `FKbdrix178v3uunx5usv6k5u5ai` (`facture_id_facture`),
  ADD KEY `FK8f05hqoiujd1as4n20kemkx3g` (`fournisseur_id_fournisseur`);

--
-- Indexes for table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employe_taches`
--
ALTER TABLE `employe_taches`
  ADD KEY `FKrjkn579errrlhxau5trc23sfr` (`taches_id_tache`),
  ADD KEY `FKkivtpf261luh5y8me0aj8vtri` (`employes_id`);

--
-- Indexes for table `facture`
--
ALTER TABLE `facture`
  ADD PRIMARY KEY (`id_facture`),
  ADD KEY `FKfxh5cabn1jfgp5y7u63wc9cxh` (`id_commande`);

--
-- Indexes for table `fournisseur`
--
ALTER TABLE `fournisseur`
  ADD PRIMARY KEY (`id_fournisseur`);

--
-- Indexes for table `ligne_commande`
--
ALTER TABLE `ligne_commande`
  ADD PRIMARY KEY (`id_ligne_commande`),
  ADD KEY `FKf3ttmql7i67fw0oyon0im086n` (`id_commande`),
  ADD KEY `FKev3h1ugg941iwgvs0vdxvsyce` (`id_mat`);

--
-- Indexes for table `materiel`
--
ALTER TABLE `materiel`
  ADD PRIMARY KEY (`id_mat`),
  ADD KEY `FK3anbe09apvp3007f9o67n4mg1` (`category_id_category`);

--
-- Indexes for table `planification`
--
ALTER TABLE `planification`
  ADD PRIMARY KEY (`id_planing`),
  ADD KEY `FK1lqy0civ2iio6op4j8n8l7tkf` (`id_tache`);

--
-- Indexes for table `ressource_humanies`
--
ALTER TABLE `ressource_humanies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ressource_materielles`
--
ALTER TABLE `ressource_materielles`
  ADD PRIMARY KEY (`id_mat`),
  ADD KEY `FK8sr81dultml4k8v7khghdooh1` (`chantier_id_chantier`);

--
-- Indexes for table `sous_tache`
--
ALTER TABLE `sous_tache`
  ADD PRIMARY KEY (`id_sous_tache`);

--
-- Indexes for table `sous_traitant`
--
ALTER TABLE `sous_traitant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tache`
--
ALTER TABLE `tache`
  ADD PRIMARY KEY (`id_tache`),
  ADD KEY `FKtf6yfm90b2oqmpueagye2escy` (`id_chantier`),
  ADD KEY `FKq607hhlxu29emdbbcypc9s2ob` (`id_planing`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_role`
--
ALTER TABLE `app_role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `chantier`
--
ALTER TABLE `chantier`
  MODIFY `id_chantier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id_clt` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `planification`
--
ALTER TABLE `planification`
  MODIFY `id_planing` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tache`
--
ALTER TABLE `tache`
  MODIFY `id_tache` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chantier`
--
ALTER TABLE `chantier`
  ADD CONSTRAINT `FK6xorpuk7p5wop89winh61hhby` FOREIGN KEY (`chef_chantier_id`) REFERENCES `chef_chantier` (`id`),
  ADD CONSTRAINT `FKnnp9huemofr1od947nbq7e7p6` FOREIGN KEY (`id_clt`) REFERENCES `client` (`id_clt`);

--
-- Constraints for table `chef_chantier`
--
ALTER TABLE `chef_chantier`
  ADD CONSTRAINT `FK18kqmfglwp8pl07ycfl09575c` FOREIGN KEY (`id`) REFERENCES `ressource_humanies` (`id`),
  ADD CONSTRAINT `FKlasxoxesfqktraj5str4daf8p` FOREIGN KEY (`id_chef_chantier`) REFERENCES `chef_chantier` (`id`);

--
-- Constraints for table `chef_chantier_roles`
--
ALTER TABLE `chef_chantier_roles`
  ADD CONSTRAINT `FK2dis4wjpmals0yp49ade4g1gk` FOREIGN KEY (`chef_chantier_id`) REFERENCES `chef_chantier` (`id`),
  ADD CONSTRAINT `FK6f47gn6bflt75ah2nw7fi39cr` FOREIGN KEY (`roles_id`) REFERENCES `app_role` (`id`);

--
-- Constraints for table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `FK6f1ueco0k57w6j5x5uen4i2m8` FOREIGN KEY (`chantier_id_chantier`) REFERENCES `chantier` (`id_chantier`),
  ADD CONSTRAINT `FK8f05hqoiujd1as4n20kemkx3g` FOREIGN KEY (`fournisseur_id_fournisseur`) REFERENCES `fournisseur` (`id_fournisseur`),
  ADD CONSTRAINT `FKbdrix178v3uunx5usv6k5u5ai` FOREIGN KEY (`facture_id_facture`) REFERENCES `facture` (`id_facture`),
  ADD CONSTRAINT `FKd9s576tgrl9q5clxua07ts8h3` FOREIGN KEY (`chef_chantier_id`) REFERENCES `chef_chantier` (`id`);

--
-- Constraints for table `employe`
--
ALTER TABLE `employe`
  ADD CONSTRAINT `FKfgi4k2phk47q4bq0npl62s9x2` FOREIGN KEY (`id`) REFERENCES `ressource_humanies` (`id`);

--
-- Constraints for table `employe_taches`
--
ALTER TABLE `employe_taches`
  ADD CONSTRAINT `FKkivtpf261luh5y8me0aj8vtri` FOREIGN KEY (`employes_id`) REFERENCES `employe` (`id`),
  ADD CONSTRAINT `FKrjkn579errrlhxau5trc23sfr` FOREIGN KEY (`taches_id_tache`) REFERENCES `tache` (`id_tache`);

--
-- Constraints for table `facture`
--
ALTER TABLE `facture`
  ADD CONSTRAINT `FKfxh5cabn1jfgp5y7u63wc9cxh` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id_commande`);

--
-- Constraints for table `ligne_commande`
--
ALTER TABLE `ligne_commande`
  ADD CONSTRAINT `FKev3h1ugg941iwgvs0vdxvsyce` FOREIGN KEY (`id_mat`) REFERENCES `materiel` (`id_mat`),
  ADD CONSTRAINT `FKf3ttmql7i67fw0oyon0im086n` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id_commande`);

--
-- Constraints for table `materiel`
--
ALTER TABLE `materiel`
  ADD CONSTRAINT `FK3anbe09apvp3007f9o67n4mg1` FOREIGN KEY (`category_id_category`) REFERENCES `category` (`id_category`);

--
-- Constraints for table `planification`
--
ALTER TABLE `planification`
  ADD CONSTRAINT `FK1lqy0civ2iio6op4j8n8l7tkf` FOREIGN KEY (`id_tache`) REFERENCES `tache` (`id_tache`);

--
-- Constraints for table `ressource_materielles`
--
ALTER TABLE `ressource_materielles`
  ADD CONSTRAINT `FK8sr81dultml4k8v7khghdooh1` FOREIGN KEY (`chantier_id_chantier`) REFERENCES `chantier` (`id_chantier`);

--
-- Constraints for table `sous_traitant`
--
ALTER TABLE `sous_traitant`
  ADD CONSTRAINT `FK432d3vafwpxekopgegnpkbx6i` FOREIGN KEY (`id`) REFERENCES `ressource_humanies` (`id`);

--
-- Constraints for table `tache`
--
ALTER TABLE `tache`
  ADD CONSTRAINT `FKq607hhlxu29emdbbcypc9s2ob` FOREIGN KEY (`id_planing`) REFERENCES `planification` (`id_planing`),
  ADD CONSTRAINT `FKtf6yfm90b2oqmpueagye2escy` FOREIGN KEY (`id_chantier`) REFERENCES `chantier` (`id_chantier`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
