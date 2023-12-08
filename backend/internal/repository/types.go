package repository

import (
	"backend/internal/model"

	"github.com/google/uuid"
)

type (
	Event interface {
		GetAll() ([]model.Event, error)
		GetByID(id uuid.UUID) (model.Event, error)
	}

	Ticket interface {
		GetByEventID() ([]model.Ticket, error)
	}

	Order interface {
		GetAll() ([]model.Order, error)
	}

	Transport interface {
		GetRecommendations() ([]model.Transport, error)
	}
)
