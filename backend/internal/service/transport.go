package service

import (
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

func (s Transport) GetRecommendations() ([]model.Transport, error) {
	// TODO implement
	return make([]model.Transport, 0), nil
}
