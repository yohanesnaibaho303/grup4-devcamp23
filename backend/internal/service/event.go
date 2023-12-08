package service

import (
	"context"
	"log"

	"backend/internal/model"
	"backend/internal/repository"

	"github.com/google/uuid"
)

type Event struct {
	repoEvent  repository.Event
	repoTicket repository.Ticket
}

func NewEventService(repoEvent repository.Event, repoTicket repository.Ticket) Event {
	return Event{
		repoEvent:  repoEvent,
		repoTicket: repoTicket,
	}
}

func (s Event) GetAll(ctx context.Context) ([]model.Event, error) {
	return s.repoEvent.GetAll(ctx)
}

func (s Event) GetByID(ctx context.Context, id uuid.UUID) (model.Event, error) {
	event, err := s.repoEvent.GetByID(ctx, id)
	if err != nil {
		log.Println(err.Error())
		return model.Event{}, err
	}
	return event, nil
}

func (s Event) GetTicketCategoriesByEventID(eventID uuid.UUID) ([]model.Ticket, error) {
	// TODO implement
	return make([]model.Ticket, 0), nil
}
