package db

import (
	"log"
	"time"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func NewDB() *sqlx.DB {
	DB_URI := "postgres://user:password@127.0.0.1:5434/gohealing_db?sslmode=disable"

	db, err := sqlx.Open("postgres", DB_URI)
	if err != nil {
		log.Fatalf("error initializing database: %v", err)
	}

	db.SetMaxIdleConns(10)
	db.SetMaxOpenConns(20)
	db.SetConnMaxIdleTime(60 * time.Minute)
	db.SetConnMaxLifetime(10 * time.Minute)

	err = db.Ping()
	if err != nil {
		log.Fatalf("error pinging database: %v", err)
	}
	log.Println("Database Connected")

	return db
}
