package db

import (
	"context"

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

func (r *transportImpl) GetRecommendations(ctx context.Context) ([]model.Transport, error) {
	// TODO implement
	return make([]model.Transport, 0), nil
}
