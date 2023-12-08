package db

import (
	"context"
	"log"
	"time"

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
	query := `SELECT 
				orders.id as id,
				payments.created_at as created_at,
				tickets.category as ticket_category,
				events.name as event_name,
				events.date as event_date,
				payments.amount as amount
				FROM orders
				JOIN users ON orders.user_id=users.id
				JOIN payments ON orders.id=payments.order_id
				JOIN events ON orders.event_id=events.id
				JOIN tickets ON orders.ticket_id=tickets.id
				WHERE orders.user_id=$1`

	rows, err := r.db.QueryContext(ctx, query, "4c7dd3d9-f019-4c6d-aec6-82a5da40650f")
	if err != nil {
		log.Println(err.Error())
		return nil, err
	}

	defer rows.Close()

	orders := make([]model.Order, 0)
	for rows.Next() {
		var output model.Order
		if err := rows.Scan(&output.ID, &output.CreatedAt, &output.TicketCategory, &output.EventName, &output.EventDate, &output.Amount); err != nil {
			log.Println(err.Error())
			return nil, err
		}

		orders = append(orders, output)
	}

	if err := rows.Err(); err != nil {
		log.Println(err.Error())
		return nil, err
	}

	return orders, nil
}

func (r *orderImpl) GetByID(ctx context.Context, id uuid.UUID) (model.Order, error) {
	var order model.Order

	query := `SELECT 
				orders.id as id,
				payments.created_at as created_at,
				payments.updated_at as updated_at,
				tickets.category as ticket_category,
				events.name as event_name,
				events.date as event_date,
				payments.amount as amount
			  FROM orders
			  JOIN payments ON orders.id=payments.order_id
			  JOIN events ON orders.event_id=events.id
			  JOIN tickets ON orders.ticket_id=tickets.id
			  WHERE orders.id=$1`

	err := r.db.GetContext(ctx, &order, query, id)
	if err != nil {
		log.Println(err.Error())
		return model.Order{}, err
	}

	return order, nil
}

func (r *orderImpl) ChangePaymentStatusToSuccess(ctx context.Context, orderID uuid.UUID) error {
	query := `UPDATE "payments" SET "status" = $1, "updated_at"=$2 WHERE "order_id" = $3`
	_, err := r.db.QueryContext(ctx, query, "success", time.Now(), orderID)
	if err != nil {
		log.Println(err.Error())
		return err
	}

	return nil
}

func (r *orderImpl) Create(ctx context.Context, orderReq model.OrderRequest) (uuid.UUID, error) {
	query := `INSERT INTO orders
			 (user_id,event_id,ticket_id,transport_id)
			 VALUES ($1,$2,$3,$4) 
			 RETURNING id`

	var orderID uuid.UUID
	err := r.db.QueryRowContext(ctx, query, "4c7dd3d9-f019-4c6d-aec6-82a5da40650f", orderReq.EventID, orderReq.TicketID, orderReq.TransportID).Scan(&orderID)
	if err != nil {
		return uuid.UUID{}, err
	}

	return orderID, nil
}
