package db

import (
	"backend/internal/model"
	"backend/internal/repository"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

type eventImpl struct {
	db *sqlx.DB
}

func NewEventRepo(db *sqlx.DB) repository.Event {
	return &eventImpl{
		db: db,
	}
}

func (r *eventImpl) GetAll() ([]model.Event, error) {
	// TODO implement
	return nil, nil
}

func (r *eventImpl) GetByID(id uuid.UUID) (model.Event, error) {
	// TODO implement
	return model.Event{}, nil
}
