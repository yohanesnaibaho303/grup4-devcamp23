package model

import (
	"time"

	"github.com/google/uuid"
)

type Event struct {
	ID          uuid.UUID `db:"id" json:"id,omitempty"`
	Name        string    `db:"name" json:"name,omitempty"`
	Description string    `db:"description" json:"description,omitempty"`
	ImageURL    string    `db:"image_url" json:"image_url"`
	Date        time.Time `db:"date" json:"date"`
	City        string    `db:"city" json:"city"`
}
