package route

import (
	"backend/internal/handler"
	repo "backend/internal/repository/db"

	"backend/internal/service"

	"github.com/go-chi/chi/v5"
	"github.com/jmoiron/sqlx"
)

func SetupEventRoutes(r chi.Router, db *sqlx.DB) {
	eventRepo := repo.NewEventRepo(db)
	ticketRepo := repo.NewTicketRepo(db)
	service := service.NewEventService(eventRepo, ticketRepo)
	handler := handler.NewEventHandler(service)

	r.Route("/v1/events", func(r chi.Router) {
		r.Get("/", handler.GetAll)
		r.Get("/{id}", handler.GetByID)
		r.Get("/{id}/tickets", handler.GetTicketCategoriesByEventID)
	})
}
