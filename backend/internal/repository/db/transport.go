package db

import (
	"context"
	"log"

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

func (r *transportImpl) GetRecommendations(ctx context.Context, city string) ([]model.Transport, error) {
	query := `SELECT transport_services.type as type, transport_services.price as price FROM transport_services
			 JOIN cities ON transport_services.city_id=cities.id 
			 WHERE cities.name=$1`

	rows, err := r.db.QueryContext(ctx, query, city)
	if err != nil {
		log.Println(err.Error())
		return nil, err
	}

	defer rows.Close()

	transports := make([]model.Transport, 0)
	for rows.Next() {
		var output model.Transport
		if err := rows.Scan(&output.Type, &output.Price); err != nil {
			log.Println(err.Error())
			return nil, err
		}

		transports = append(transports, output)
	}

	if err := rows.Err(); err != nil {
		log.Println(err.Error())
		return nil, err
	}

	return transports, nil
}
