package db

import (
	"context"
	"log"

	"backend/internal/model"
	"backend/internal/repository"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

type ticketImpl struct {
	db *sqlx.DB
}

func NewTicketRepo(db *sqlx.DB) repository.Ticket {
	return &ticketImpl{
		db: db,
	}
}

func (r *ticketImpl) GetByEventID(ctx context.Context, eventID uuid.UUID) ([]model.Ticket, error) {
	query := `SELECT 
				tickets.id as id,
				tickets.category as category,
				tickets.price as price
			FROM tickets
			JOIN events
			ON tickets.event_id=events.id`

	rows, err := r.db.QueryContext(ctx, query)
	if err != nil {
		log.Println(err.Error())
		return nil, err
	}

	defer rows.Close()

	tickets := make([]model.Ticket, 0)
	for rows.Next() {
		var output model.Ticket
		if err := rows.Scan(&output.ID, &output.Category, &output.Price); err != nil {
			log.Println(err.Error())
			return nil, err
		}

		tickets = append(tickets, output)
	}

	if err := rows.Err(); err != nil {
		log.Println(err.Error())
		return nil, err
	}

	return tickets, nil
}
