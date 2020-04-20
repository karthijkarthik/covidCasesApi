-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2020 at 03:26 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

-- -----------------------------------------------------
-- Database corona_case
-- -----------------------------------------------------
DROP DATABASE IF EXISTS `corona_case`;

-- Database: `corona_case`
--
CREATE DATABASE `corona_case` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `corona_case`;

-- --------------------------------------------------------

--
-- Table structure for table `covidcases`
--
DROP TABLE IF EXISTS `covidcases` ;

CREATE TABLE IF NOT EXISTS `covidcases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(256) NOT NULL,
  `totalaffectedcount` int(11) NOT NULL DEFAULT '0',
  `todaysCount` int(11) NOT NULL DEFAULT '0',
  `recoveredCount` int(11) NOT NULL DEFAULT '0',
  `deathCount` int(11) NOT NULL DEFAULT '0',
  `updated_on` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `covidcases`
--

INSERT INTO `covidcases` (`id`, `state`, `totalaffectedcount`, `todaysCount`, `recoveredCount`, `deathCount`, `updated_on`) VALUES
(1, 'Tamilnadu', 1173, 0, 58, 12, '2020-04-20 05:20:19');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
