-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2017 at 07:48 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studentmanagementsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `class_id` int(11) NOT NULL,
  `class_level` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`class_id`, `class_level`) VALUES
(1, '6'),
(2, '7'),
(3, '10'),
(6, '12'),
(7, 'Master'),
(8, 'Bachelors'),
(9, 'phd');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `student_name`) VALUES
(10, 'bishwash'),
(11, 'vikram'),
(12, 'sapana kc'),
(13, 'Sajjan Paudel'),
(14, 'arun');

-- --------------------------------------------------------

--
-- Table structure for table `studentclass`
--

CREATE TABLE `studentclass` (
  `studentclass_id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `studentclass`
--

INSERT INTO `studentclass` (`studentclass_id`, `student_id`, `class_id`) VALUES
(1, 10, 7),
(2, 11, 7),
(3, 12, 8),
(4, 13, 6),
(5, 10, 8),
(6, 14, 9);

-- --------------------------------------------------------

--
-- Table structure for table `studentmarksinfo`
--

CREATE TABLE `studentmarksinfo` (
  `info_id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  `marks` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `studentmarksinfo`
--

INSERT INTO `studentmarksinfo` (`info_id`, `student_id`, `subject_id`, `class_id`, `marks`) VALUES
(3, 10, 3, 7, 50),
(4, 10, 6, 7, 70),
(5, 10, 7, 7, 40),
(6, 10, 5, 8, 10),
(7, 10, 8, 8, 20),
(8, 10, 9, 8, 30),
(9, 10, 10, 8, 40),
(10, 11, 3, 7, 35),
(11, 11, 6, 7, 45),
(12, 11, 7, 7, 55),
(13, 12, 5, 8, 50),
(14, 12, 8, 8, 60),
(15, 12, 9, 8, 70),
(16, 12, 10, 8, 80),
(17, 13, 1, 6, 10),
(18, 13, 2, 6, 20),
(19, 13, 4, 6, 30),
(20, 13, 5, 6, 40),
(21, 14, 11, 9, 87),
(22, 14, 12, 9, 88),
(23, 14, 13, 9, 89);

-- --------------------------------------------------------

--
-- Table structure for table `subjectclass`
--

CREATE TABLE `subjectclass` (
  `subject_class_id` int(11) NOT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjectclass`
--

INSERT INTO `subjectclass` (`subject_class_id`, `subject_id`, `class_id`) VALUES
(1, 3, 7),
(2, 6, 7),
(3, 7, 7),
(4, 5, 8),
(5, 8, 8),
(6, 9, 8),
(7, 10, 8),
(8, 1, 6),
(9, 2, 6),
(10, 4, 6),
(11, 5, 6),
(12, 11, 9),
(13, 12, 9),
(14, 13, 9);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `subject_id` int(11) NOT NULL,
  `subject_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`subject_id`, `subject_name`) VALUES
(1, 'science'),
(2, 'maths'),
(3, 'Java'),
(4, 'English'),
(5, 'Nepali'),
(6, 'PHP'),
(7, 'Javascript'),
(8, 'Account'),
(9, 'Finance'),
(10, 'Marketing'),
(11, 'Biomedical Engineering'),
(12, 'Physics'),
(13, 'Chemisty');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `contact_no` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `location`, `contact_no`) VALUES
(2, 'vikram', 'vikram@gmail.com', '20ram', 'vikram', 'newjersy', '3093303'),
(33, 'Bishwash sharma1', '20wash.sharma@gmail.com', '20wash', 'GhartensionEight8', 'florida miam', '17862236745'),
(36, 'Bishwash sharma', '20wash1.sharma@gmail.com', '20wash1', 'ghartension', 'miami', '7862236745'),
(37, 'Sapana', 'sana@sapana.com', 'sana_sapana', 'bipana', 'pokhara', '9779849419785'),
(38, 'manisa', 'mani@manisa.com', 'man', 'manish', 'koteshwor', '393933939'),
(41, 'bishal sharma', 'shybishwas2047@yahoo.com', 'wash20', 'GhartensionEight8', 'manamaiju', '7862236745'),
(42, 'vkpatel', 'vkpatel@gmail.com', 'vk_patel', 'vkpatel', 'miami', '393034304'),
(43, '', '', '', '', '', ''),
(44, 'sapana kc', 'sana@gmail.com', 'my_sana', 'ghartension', 'pokhara', '7862236745');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`class_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `studentclass`
--
ALTER TABLE `studentclass`
  ADD PRIMARY KEY (`studentclass_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `studentmarksinfo`
--
ALTER TABLE `studentmarksinfo`
  ADD PRIMARY KEY (`info_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `subjectclass`
--
ALTER TABLE `subjectclass`
  ADD PRIMARY KEY (`subject_class_id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`subject_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `studentclass`
--
ALTER TABLE `studentclass`
  MODIFY `studentclass_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `studentmarksinfo`
--
ALTER TABLE `studentmarksinfo`
  MODIFY `info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `subjectclass`
--
ALTER TABLE `subjectclass`
  MODIFY `subject_class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `studentclass`
--
ALTER TABLE `studentclass`
  ADD CONSTRAINT `studentclass_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studentclass_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `studentmarksinfo`
--
ALTER TABLE `studentmarksinfo`
  ADD CONSTRAINT `studentmarksinfo_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`),
  ADD CONSTRAINT `studentmarksinfo_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`),
  ADD CONSTRAINT `studentmarksinfo_ibfk_3` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`);

--
-- Constraints for table `subjectclass`
--
ALTER TABLE `subjectclass`
  ADD CONSTRAINT `subjectclass_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `subjectclass_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
