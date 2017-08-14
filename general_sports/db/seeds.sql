DROP TABLE IF EXISTS sports;
DROP TABLE IF EXISTS users;




CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  token VARCHAR NOT NULL
);

CREATE TABLE sports(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	state VARCHAR(255),
	img VARCHAR(255)

);


INSERT INTO sports (name, state, img) VALUES
(
	'NFL',
  'New York',
  'https://www.nflregionalcombines.com/Images/NFLShield.png'
),

(
	'NBA',
	'Pennsylvania',
	'http://www.bitcoingambling.net/wp-content/uploads/2015/05/Y9cG2XlxsaTUP1wGMHiOGjpDSGmcczHS3EABEN8s_ORvUk4n57Z_XQwuC0GAYX-O91Aw300.png'

),

(
	'SOCCER',
	'Texas',
	'http://washingtonspirit.com/files/2013/07/nike-soccer-logo-300x157.png'
),
(
	'NHL',
	'NewJersey',
	'https://www.viasat.no/sites/viasat.no/files/styles/page_full/public/nhl_zucca.jpg?itok=QnFzC31-'

);
