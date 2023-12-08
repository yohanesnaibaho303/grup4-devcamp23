package service

import (
	"context"
	"log"

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

func (s Order) GetAll(ctx context.Context) ([]model.Order, error) {
	return s.repo.GetAll(ctx)
}

func (s Order) GetByID(ctx context.Context, id uuid.UUID) (model.Order, error) {
	order, err := s.repo.GetByID(ctx, id)
	if err != nil {
		log.Println(err.Error())
		return model.Order{}, err
	}
	return order, nil
}

func (s Order) Create(ctx context.Context, orderReq model.OrderRequest) (uuid.UUID, error) {
	return s.repo.Create(ctx, orderReq)
}

func (s Order) ChangePaymentStatusToSuccess(ctx context.Context, orderID uuid.UUID) error {
	err := s.repo.ChangePaymentStatusToSuccess(ctx, orderID)
	if err != nil {
		log.Println(err.Error())
		return err
	}
	return nil
}
