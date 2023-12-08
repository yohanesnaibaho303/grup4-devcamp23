package service

import (
	"context"

	"backend/internal/model"
	"backend/internal/repository"
)

type Transport struct {
	repo repository.Transport
}

func NewTransportService(repo repository.Transport) Transport {
	return Transport{
		repo: repo,
	}
}

func (s Transport) GetRecommendations(ctx context.Context, city string) ([]model.Transport, error) {
	return s.repo.GetRecommendations(ctx, city)
}
