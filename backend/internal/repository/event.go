package repository

import (
	"backend/internal/model"

	"github.com/jmoiron/sqlx"
)

type IEventRepo interface {
	GetAll() ([]model.Event, error)
}

type postgreEvent struct {
	db *sqlx.DB
}

func NewPostgreEvent(db *sqlx.DB) postgreEvent {
	return postgreEvent{
		db: db,
	}
}

func (p *postgreEvent) GetAll() ([]model.Event, error) {
	return nil, nil
}
