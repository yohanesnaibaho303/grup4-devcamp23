package db

import (
	"context"
	"log"

	"backend/internal/model"
	"backend/internal/repository"

	"github.com/google/uuid"
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

func (r *orderImpl) GetAll(ctx context.Context) ([]model.Order, error) {
	// TODO implement
	return make([]model.Order, 0), nil
}

func (r *orderImpl) GetByID(ctx context.Context, id uuid.UUID) (model.Order, error) {
	// TODO implement
	return model.Order{}, nil
}

func (r *orderImpl) ChangePaymentStatusToSuccess(ctx context.Context, orderID uuid.UUID) error {
	query := `UPDATE "payments" SET "status" = $1 WHERE "order_id" = $2`
	_, err := r.db.QueryContext(ctx, query, "success", orderID)
	if err != nil {
		log.Println(err.Error())
		return err
	}

	return nil
}
