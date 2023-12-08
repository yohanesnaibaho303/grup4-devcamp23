package db

import (
	"backend/internal/model"
	"backend/internal/repository"

	"github.com/jmoiron/sqlx"
)

type orderImpl struct {
	db *sqlx.DB
}

func NewOrderRepo(db *sqlx.DB) repository.Order {
	return &orderImpl{
		db: db,
	}
}

func (r *orderImpl) GetAll() ([]model.Order, error) {
	// TODO implement
	return make([]model.Order, 0), nil
}
