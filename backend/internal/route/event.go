package route

import (
	"backend/internal/handler"
	"backend/internal/service"

	"github.com/go-chi/chi/v5"
)

func SetupEventRoutes(r chi.Router) {
	// repo := repository.NewPostgreEvent(db) // FIXME
	service := service.NewEventService()
	handler := handler.NewEventHandler(service)

	r.Route("/v1/events", func(r chi.Router) {
		r.Get("/", handler.GetAll)
		r.Get("/{id}", handler.GetByID)
		r.Get("/{id}/tickets", handler.GetTicketCategoriesByEventID)
	})
}
