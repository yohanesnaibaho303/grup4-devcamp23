package service

import (
	"backend/internal/model"
	"backend/internal/repository"

	"github.com/google/uuid"
)

type Order struct {
	repo repository.Order
}

func NewOrderService(repo repository.Order) Order {
	return Order{
		repo: repo,
	}
}

func (s Order) GetAll() ([]model.Order, error) {
	// TODO implement
	return make([]model.Order, 0), nil
}

func (s Order) GetByID(id uuid.UUID) (model.Order, error) {
	// TODO implement
	return model.Order{}, nil
}

func (s Order) Create(order model.Order) (uuid.UUID, error) {
	// TODO implement
	return uuid.New(), nil
}

func (s Order) ChangeStatusToPaid(orderID uuid.UUID) error {
	// TODO implement
	return nil
}
