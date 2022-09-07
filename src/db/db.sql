CREATE TABLE users (
	id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	image_url VARCHAR(255) DEFAULT '',
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE reviews (
	id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
	author UUID NOT NULL,
	comment text NOT NULL,
	rating smallint NOT NULL,
	FOREIGN KEY (author) REFERENCES users(id)
);

CREATE TABLE products (
	id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	slug VARCHAR(255) NOT NULL,
	image VARCHAR(255) DEFAULT '',
	category VARCHAR(255) NOT NULL,
	description text NOT NULL,
	brand VARCHAR(255) NOT NULL,
	price integer NOT NULL,
	count_in_stock integer NOT NULL,
	rating numeric NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE table product_review (
	product_id UUID NOT NULL,
	review_id UUID NOT NULL,
	FOREIGN KEY (product_id) REFERENCES products(id),
	FOREIGN KEY (review_id) REFERENCES reviews(id)
);