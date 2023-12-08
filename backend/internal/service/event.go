package service

import (
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

func (s Event) GetAll() ([]model.Event, error) {
	// TODO implement
	return make([]model.Event, 0), nil
}

func (s Event) GetByID(id uuid.UUID) (model.Event, error) {
	// TODO implement
	return model.Event{}, nil
}

func (s Event) GetTicketCategoriesByEventID(eventID uuid.UUID) ([]model.Ticket, error) {
	// TODO implement
	return make([]model.Ticket, 0), nil
}
