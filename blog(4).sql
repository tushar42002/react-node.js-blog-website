-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2023 at 06:10 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(6) NOT NULL,
  `title` text NOT NULL,
  `descripton` text NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `descripton`, `user_email`, `date`) VALUES
(0, 'undefined', 'undefined', '0', '2023-08-26 15:42:33'),
(1, 'wild life', 'wild life', 'wild', '2023-07-23 23:20:29'),
(4, 'tech', 'tech', 'undefined', '2023-08-25 13:49:56');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(6) NOT NULL,
  `post_title` text NOT NULL,
  `post_contant` longtext NOT NULL,
  `post_image` varchar(255) NOT NULL,
  `category` text NOT NULL,
  `user_id` int(6) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `post_title`, `post_contant`, `post_image`, `category`, `user_id`, `date`) VALUES
(3, 'The standard Lorem Ipsum passage, used since the 1500s', 'During the last ten years, the number and diversity of web portals dedicated to the collection of wildlife observations has increased rapidly. While there is substantial variation in the scope, geographical area, and volumes of data gathered by different portals, the advent of online data collection has produced a vast amount of data that would previously have been impossible to amass. The data contained in these portals and the sheer amplitude of their combined geographical and taxonomic coverage offer great potential for research on the temporal and spatial distribution of animals across large geographical areas. Data sources are very scattered, and several portals have limited access or are available only in the native languages of their host countries.', '1691758383666-7blog1.jpg', '1', 0, '2023-08-11 18:23:03'),
(7, 'Why is realistic data important?', 'When your test database is filled with realistic looking data, you\'ll be more engaged as a tester. When you demonstrate new features to others, they\'ll understand them faster. Real data is varied and will contain characters that may not play nice with your code, such as apostrophes, or unicode characters from other languages. Testing with realistic data will make your app more robust because you\'ll catch errors that are likely to occur in production before release day.', '1692953877847-image.png', '4', 0, '2023-08-19 21:14:10'),
(8, 'Why is test data important?', 'If you\'re developing an application, you\'ll want to make sure you\'re testing it under conditions that closely simulate a production environment. In production, you\'ll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you\'re hand-entering data into a test environment one record at a time using the UI, you\'re never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won\'t match real-world usage, leaving important bugs undiscovered.', '1693042437081-rvice3.jpg', '4', 0, '2023-08-26 15:03:57'),
(9, 'How to generate dummy data in Python', 'Every data science project begins with a set of data.\r\n\r\nIt doesn’t matter if you are a veteran data scientist or simply an aspiring data enthusiast, you would probably be looking for a dataset at some point to jumpstart a data science or machine learning project. But more often than not, looking for a set of suitable data can be a very tedious process. While many well-known data repositories have made hundreds of thousands of datasets readily accessible, they are mostly generic and actually require some tweaks and preparation to tailor for the data projects we are working on.\r\n\r\nWell, that got me thinking — if finding a sample dataset is so complicated, why not just generate my own dummy data? That wild idea kind of put me off at first as I thought coding my own data would actually be equally time-consuming. But after started creating my own data in a few projects, I discovered one powerful Python library that can do just all that in an intuitive way.', '1693043394499-3_0.png', '4', 0, '2023-08-26 15:19:54'),
(10, '130 ML Tricks And Resources Curated Carefully From 3 Years (Plus Free eBook)', 'There are two types of tricks in data science and ML: tricks that are rare and very cool. They are designed to grab your attention but ultimately, you will never use them because their use-cases are too narrow. Think of those Python one-liners that are dreadful in terms of readability.\r\n\r\nIn the second category, there are tricks that are rare, cool and so useful that you will start using them immediately in your work.\r\n\r\nFrom my three-year journey into data, I’ve collected more than 100 tricks and resources that fall under the second category (there might be some small overlap with the first category sometimes) and curated them into an online book — Tricking Data Science.\r\n\r\nWhile there are more than 200 items in the online book and organized neatly, I put the best 130 into one article as Medium offers much better reading experience.\r\n\r\nPlease, enjoy!', '1693044597992-pkpvDg.png', '0', 0, '2023-08-26 15:39:58'),
(11, 'Why we need LLMs', 'The evolution of language has brought us humans incredibly far to this day. It enables us to efficiently share knowledge and collaborate in the form we know today. Consequently, most of our collective knowledge continues to be preserved and communicated through unorganized written texts.\r\n\r\nInitiatives undertaken over the past two decades to digitize information and processes have often focused on accumulating more and more data in relational databases. This approach enables traditional analytical machine learning algorithms to process and understand our data.\r\n\r\nHowever, despite our extensive efforts to store an increasing amount of data in a structured manner, we are still unable to capture and process the entirety of our knowledge.\r\n\r\n', '1693045051138-8bugcw.png', 'undefined', 1, '2023-08-26 15:47:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(6) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `is_admin` tinyint(1) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `avatar`, `is_admin`, `date`) VALUES
(0, 'unknown', 'unknown', 'unknown', '12345678', '1690130315917-822766.jpg', 0, '2023-08-19 22:17:04'),
(1, 'Ram', 'Ram', 'test@gmail.com', '$2a$10$nlqE2KuED/biMgpP4DN1murJt7MRlx6Px8KvITlzhqBLW2vhOyeWW', '1690130315917-822766.jpg', 0, '2023-07-23 22:08:36'),
(3, 'test', 'success', 'admin@gmail.com', '$2a$10$VOW6QNrmu71AvIXVR7KGbOlLzH8yR4zlxN0vJlKPKAsoCMHIVw1yu', '1693152592137--RjTuA.png', 1, '2023-08-27 21:39:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
