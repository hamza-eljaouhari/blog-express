

#CREATE DATABSE
DROP DATABASE IF EXISTS `blog`;
CREATE DATABASE blog;
USE blog; 
     
#CREATE USER TABLE
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
 `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`name` varchar (255)   DEFAULT NULL, 
`email` varchar (255)   DEFAULT NULL, 
`password` varchar (255)   DEFAULT NULL, 
`created_at` timestamp    DEFAULT NULL, 
`updated_at` timestamp    DEFAULT NULL, 

PRIMARY KEY (`id`)
 
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8; 
 
     
#CREATE ARTICLE TABLE
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
 `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`title` varchar (255)   DEFAULT NULL, 
`created_at` timestamp    DEFAULT NULL, 
`updated_at` timestamp    DEFAULT NULL, 
`content` varchar (255000)   DEFAULT NULL, 
`user_id` int (255)   DEFAULT NULL, 
`user_id` int (11)  unsigned DEFAULT NULL, 

PRIMARY KEY (`id`),
 CONSTRAINT `user_ibfk_0` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8; 
 
     
#CREATE COMMENT TABLE
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
 `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`content` varchar (1020)   DEFAULT NULL, 
`created_at` timestamp    DEFAULT NULL, 
`updated_at` timestamp    DEFAULT NULL, 
`likes` int (255)   DEFAULT NULL, 
`dislikes` int (255)   DEFAULT NULL, 
`article_id` int (255)   DEFAULT NULL, 
`user_id` int (255)   DEFAULT NULL, 
`article_id` int (11)  unsigned DEFAULT NULL, 
`user_id` int (11)  unsigned DEFAULT NULL, 

PRIMARY KEY (`id`),
 CONSTRAINT `article_ibfk_0` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8; 
 
