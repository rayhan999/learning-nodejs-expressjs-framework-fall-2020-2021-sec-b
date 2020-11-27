-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 06:45 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carrent`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `name`, `email`, `mobile`, `address`, `image`) VALUES
(1, 'rayhan', 'mahi', 'asdf@fdddfsdf.csd', '3333333333333', 'sdgdfhghgh', '/assets/uploads/Screenshot (519).png');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `created_by` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `date`, `created_by`, `description`, `image`) VALUES
(2, 'eeeeeeeee', '2020-11-27 22:53:58', 'rayhan', 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', '/assets/uploads/Screenshot (532).png'),
(3, 'ttttttttt', '2020-11-27 23:22:30', 'rayhan', 'ttttttttttttttttttttttttttttttttttttttttttttttttttttttt', '/assets/uploads/za.PNG');

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `rentprice` double NOT NULL,
  `type` varchar(20) NOT NULL,
  `isFeatured` varchar(255) DEFAULT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `name`, `description`, `rentprice`, `type`, `isFeatured`, `image`) VALUES
(1, 'ttttttttttttttt', 'This is a very delightful car where you will be available to enjoy a beautiful ride.', 5000, 'Private Car', 'No', '/assets/uploads/lab2Sijan.PNG'),
(3, 'aaaaaaaaaaaaaaaaaaaaaaa', 'dddddddddddddddddddddddddd', 1500, 'Private Car', 'No', '/assets/uploads/node.PNG'),
(4, 'Toyota Noah', 'tttttttttttttttttttttttttttttttttttt', 2500, 'Microbus', 'Yes', '/assets/uploads/Screenshot (540).png'),
(6, 'wdfsdf', 'sdgsgvxcbcb', 234, 'PickUp', 'undefined', '/assets/uploads/a.PNG');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `username`, `name`, `email`, `mobile`, `address`, `gender`, `image`) VALUES
(2, 'mahi', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `rentalhistory`
--

CREATE TABLE `rentalhistory` (
  `id` int(11) NOT NULL,
  `model` varchar(255) NOT NULL,
  `member` varchar(255) NOT NULL,
  `cost` double NOT NULL,
  `date` datetime NOT NULL,
  `fromdate` datetime NOT NULL,
  `todate` datetime NOT NULL,
  `fromdestination` varchar(255) NOT NULL,
  `todestination` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `membername` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `fromdate` datetime NOT NULL,
  `todate` datetime NOT NULL,
  `fromdestination` varchar(255) NOT NULL,
  `todestination` varchar(255) NOT NULL,
  `carname` varchar(255) NOT NULL,
  `cost` double NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `type`) VALUES
(1, 'rayhan', '1234', 'Admin'),
(2, 'mahi', '1234', 'Member'),
(3, 'sadek', 'og2i0', 'Admin'),
(11, 'qqq', '1234', 'Member'),
(12, 'aaa', '1234', 'Member'),
(13, 'vvv', '1224', 'Member'),
(14, 'eee', '1234', 'Member');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rentalhistory`
--
ALTER TABLE `rentalhistory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rentalhistory`
--
ALTER TABLE `rentalhistory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
