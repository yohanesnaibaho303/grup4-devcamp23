package model

import (
	"database/sql"
	"time"

	"github.com/google/uuid"
)

type Order struct {
	ID             uuid.UUID    `db:"id" json:"id"`
	CreatedAt      time.Time    `db:"created_at" json:"created_at,omitempty"`
	UpdatedAt      sql.NullTime `db:"updated_at" json:"updated_at,omitempty"`
	TicketCategory string       `db:"ticket_category" json:"ticket_category,omitempty"`
	EventName      string       `db:"event_name" json:"event_name,omitempty"`
	EventDate      time.Time    `db:"event_date" json:"event_date,omitempty"`
	Amount         string       `db:"amount" json:"amount,omitempty"`
	TransportType  string       `db:"transport_type" json:"transport_type,omitempty"`
}

type OrderRequest struct {
	EventID     string `json:"event_id"`
	TicketID    string `json:"ticket_id"`
	TransportID string `json:"transport_id"`
}
