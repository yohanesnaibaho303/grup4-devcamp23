-- INSERT INTO users
INSERT INTO users (email, password) 
VALUES ('sam.marhaendrap@tokopedia.com', 'tokopedia2024');

-- INSERT INTO cities
INSERT INTO cities (name) 
VALUES ('Bandung');

-- INSERT INTO events
INSERT INTO events (name, description, city_id, image_url, date) 
VALUES ('Artic Monkeys Asia Tour 2023', 'Ticket sales for the 2023 In Jakarta Arctic Monkeys Asia Tour concert will start on December 19, 2022 at 14.00 WIB. Arctic Monkeys will hold a solo concert in Jakarta on March 18, 2023. This concert will be held at the Beach City Ancol International Stadium, Jakarta.', 1, 'https://imgsrv2.voi.id/GNyuL4nPhKn-fRQV4AK1Q2gFL1zEmkT2RQhw0e09XE4/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMzcxNDcvMjAyMjEyMTkxNjA1LW1haW4uY3JvcHBlZF8xNjcxNDQwNzQ5LnBuZw.jpg', '2023-03-19 17:30:00-07'),
       ('BNI Java Jazz Festival 2022', 'The wait is finally over. We have plenty more surprises under our sleeves, share the news and buy your #BNIJJF2022 tickets now.', 1, 'https://scontent-cgk1-1.xx.fbcdn.net/v/t39.30808-6/277246208_10159817442659395_2355120040024824290_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=UZpK49xmWOoAX9XvhUH&_nc_ht=scontent-cgk1-1.xx&oh=00_AfDP2OKoBoIIIITVHQy2GUWR8XO7huym8Co0CfVw1pZQ5w&oe=6578204C', '2022-05-27 19:30:00-07'),
       ('BORN PINK World Tour Jakarta', 'Salah satu girlband populer asal Korea Selatan yaitu BLACKPINK akan mengunjungi Jakarta untuk menggelar konser pada tanggal 11-12 Maret 2023 di Gelora Bung Karno. Acara dimulai pada pukul 18:30 dan sudah open gate pada pukul 17:00 WIB. Konser yang bertajuk BLACKPINK WORLD TOUR “BORN PINK” mereka mengadakan konser dalam rangka memperkenalkan album baru mereka. BLACKPINK sendiri merupakan salah sartu Girlgroup yang dinaungi oleh YG Entertaiment dan termasuk girlband yang sangat populer di dunia.', 1, 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/02/20/20230220_200234-2677255663.jpg', '2023-03-1 20:30:00-07'),
       ('Coldplay Concert Jakarta 2023', 'Coldplay bakal menggelar konser perdananya di Jakarta pada 15 November 2023 di Stadion Utama Gelora Bung Karno (SUGBK), Jakarta Pusat. Promotor konser, PK Entertainment dan Third Eye Management, akhirnya merilis secara resmi harga tiket konser Coldplay tersebut.', 1, 'https://akcdn.detik.net.id/community/media/visual/2023/05/09/coldplay_169.jpeg?w=700&q=90', '2022-11-15 20:00:00-07');

-- INSERT INTO tickets
INSERT INTO tickets (event_id, category, price) 
VALUES ('ff1852bd-b7cb-4be4-9b38-04c875647782', 'regular', 150000),
       ('ff1852bd-b7cb-4be4-9b38-04c875647782', 'vip', 350000),
       ('d4a8521c-ab01-4f8e-8e86-80d6dc9fa4e9', 'regular', 50000),
       ('d4a8521c-ab01-4f8e-8e86-80d6dc9fa4e9', 'vip', 250000),
       ('674212c2-329b-4303-a350-1459de846e5d', 'regular', 100000),
       ('674212c2-329b-4303-a350-1459de846e5d', 'premium', 250000),
       ('1929c021-0030-4d0e-8fa4-c24963b8acff', 'regular', 800000),
       ('1929c021-0030-4d0e-8fa4-c24963b8acff', 'vip', 1000000);

-- INSERT INTO transport_services
INSERT INTO transport_services (type, city_id, price) 
VALUES ('goride', 1, 15000),
       ('gocar', 1, 25000);

-- INSERT INTO orders
INSERT INTO orders (event_id, user_id, ticket_id, transport_id) 
VALUES ('1929c021-0030-4d0e-8fa4-c24963b8acff', '4c7dd3d9-f019-4c6d-aec6-82a5da40650f', '9c78a647-9469-4e38-b2a6-5f51b1c98b0b', 1),
       ('674212c2-329b-4303-a350-1459de846e5d', '4c7dd3d9-f019-4c6d-aec6-82a5da40650f', '34361b9d-5e75-429a-8265-0a30a28b1326', 2);

-- INSERT INTO payments
INSERT INTO payments (order_id, status, amount, created_at, updated_at) 
VALUES ('ca6a4911-7ff4-488a-9482-591845a17543', 'success', 1015000, '2023-02-11 11:30:20-07', '2023-02-11 11:30:30-07');       
INSERT INTO payments (order_id, status, amount, created_at) 
VALUES ('ca6a4911-7ff4-488a-9482-591845a17543', 'pending', 125000, '2023-02-12 13:42:10-07');