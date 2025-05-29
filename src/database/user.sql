DROP USER IF EXISTS webdataviz;
CREATE USER 'webdataviz'@'%' IDENTIFIED BY '#xbU0$VkM5';
GRANT ALL PRIVILEGES ON appLerSaber.* TO 'webdataviz'@'%';
FLUSH PRIVILEGES;
