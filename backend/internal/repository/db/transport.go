package db

import (
	"backend/internal/model"
	"backend/internal/repository"

	"github.com/jmoiron/sqlx"
)

type transportImpl struct {
	db *sqlx.DB
}

func NewTransportRepo(db *sqlx.DB) repository.Transport {
	return &transportImpl{
		db: db,
	}
}

func (r *transportImpl) GetRecommendations() ([]model.Transport, error) {
	return make([]model.Transport, 0), nil
}
