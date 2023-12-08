package model

import "github.com/google/uuid"

type Ticket struct {
	ID       uuid.UUID `db:"id" json:"id"`
	Category string    `db:"category" json:"category"`
	Price    uint64    `db:"price" json:"price"`
}
