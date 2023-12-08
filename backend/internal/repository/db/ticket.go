package db

import (
	"backend/internal/model"
	"backend/internal/repository"

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

func (r *ticketImpl) GetByEventID() ([]model.Ticket, error) {
	// TODO implement
	return make([]model.Ticket, 0), nil
}
