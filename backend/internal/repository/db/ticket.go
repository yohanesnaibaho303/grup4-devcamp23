package db

import (
	"context"

	"backend/internal/model"
	"backend/internal/repository"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

type ticketImpl struct {
	db *sqlx.DB
}

func NewTicketRepo(db *sqlx.DB) repository.Ticket {
	return &ticketImpl{
		db: db,
	}
}

func (r *ticketImpl) GetByEventID(ctx context.Context, eventID uuid.UUID) ([]model.Ticket, error) {
	// TODO implement
	return make([]model.Ticket, 0), nil
}
