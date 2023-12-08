package db

import (
	"context"
	"log"

	"backend/internal/model"
	"backend/internal/repository"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

type eventImpl struct {
	db *sqlx.DB
}

func NewEventRepo(db *sqlx.DB) repository.Event {
	return &eventImpl{
		db: db,
	}
}

func (r *eventImpl) GetAll(ctx context.Context) ([]model.Event, error) {
	query := `SELECT 
				events.id, 
				events.name, 
				events.image_url, 
				cities.name as city,
				events.date,
			FROM events JOIN cities 
			ON events.city_id = cities.id`
	rows, err := r.db.QueryContext(ctx, query)
	if err != nil {
		log.Println(err.Error())
		return nil, err
	}

	defer rows.Close()

	events := make([]model.Event, 0)
	for rows.Next() {
		var output model.Event
		if err := rows.Scan(&output.ID, &output.Name, &output.ImageURL, &output.City, &output.Date); err != nil {
			log.Println(err.Error())
			return nil, err
		}

		events = append(events, output)
	}

	if err := rows.Err(); err != nil {
		log.Println(err.Error())
		return nil, err
	}

	return events, nil
}

func (r *eventImpl) GetByID(ctx context.Context, id uuid.UUID) (model.Event, error) {
	var event model.Event

	query := `SELECT 
				events.id, 
				events.name, 
				events.description,
				events.image_url, 
				cities.name as city,
				events.date
			FROM events JOIN cities 
			ON events.city_id = cities.id
			WHERE events.id=$1`

	err := r.db.GetContext(ctx, &event, query, id)
	if err != nil {
		log.Println(err.Error())
		return model.Event{}, err
	}

	return event, nil
}
