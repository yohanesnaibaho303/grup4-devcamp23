package repository

import (
	"context"

	"backend/internal/model"

	"github.com/google/uuid"
)

type (
	Event interface {
		GetAll(ctx context.Context) ([]model.Event, error)
		GetByID(ctx context.Context, id uuid.UUID) (model.Event, error)
	}

	Ticket interface {
		GetByEventID(ctx context.Context, eventID uuid.UUID) ([]model.Ticket, error)
	}

	Order interface {
		GetAll() ([]model.Order, error)
	}

	Transport interface {
		GetRecommendations() ([]model.Transport, error)
	}
)
