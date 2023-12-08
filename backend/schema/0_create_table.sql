CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE TABLE users
CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email varchar(100) UNIQUE,
    password varchar(100) NOT NULL
)

-- CREATE TABLE cities
CREATE TABLE IF NOT EXISTS cities (
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL
)

-- CREATE TABLE events
CREATE TABLE IF NOT EXISTS events (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name varchar(100) NOT NULL,
    description text NOT NULL,
    city_id int REFERENCES cities(id) NOT NULL,
    image_url text,
    date timestamp NOT NULL
);

-- CREATE TABLE tickets
CREATE TABLE IF NOT EXISTS tickets (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id uuid REFERENCES events(id) NOT NULL,
    category varchar(50) NOT NULL,
    price NUMERIC NOT NULL
);

-- CREATE TABLE transport_services
CREATE TYPE transport_service_enum AS ENUM ('goride', 'gocar');
CREATE TABLE IF NOT EXISTS transport_services (
    id SERIAL PRIMARY KEY,
    type transport_service_enum NOT NULL,
    city_id int REFERENCES cities(id) NOT NULL,
    price NUMERIC NOT NULL
)

-- CREATE TABLE orders
CREATE TABLE IF NOT EXISTS orders (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id uuid REFERENCES events(id) NOT NULL,
    user_id uuid REFERENCES users(id) NOT NULL,
    ticket_id uuid REFERENCES tickets(id) NOT NULL,
    transport_id int REFERENCES transport_services(id)
)

-- CREATE TABLE payments
CREATE TYPE payment_status_enum AS ENUM ('success', 'pending', 'failed');
CREATE TABLE IF NOT EXISTS payments (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id uuid REFERENCES orders(id) NOT NULL,
    status payment_status_enum NOT NULL,
    amount NUMERIC NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp
)