package route

import (
	"backend/internal/handler"
	"backend/internal/service"

	dbRepo "backend/internal/repository/db"

	"github.com/go-chi/chi/v5"
	"github.com/jmoiron/sqlx"
)

func SetupTransportRoutes(r chi.Router, db *sqlx.DB) {
	repo := dbRepo.NewTransportRepo(db)
	service := service.NewTransportService(repo)
	handler := handler.NewTransportHandler(service)

	r.Route("/v1/transports/recommendation", func(r chi.Router) {
		r.Get("/", handler.GetRecommendations)
	})
}
