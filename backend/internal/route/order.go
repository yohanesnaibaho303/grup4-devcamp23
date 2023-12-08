package route

import (
	"backend/internal/handler"
	dbRepo "backend/internal/repository/db"
	"backend/internal/service"

	"github.com/go-chi/chi/v5"
	"github.com/jmoiron/sqlx"
)

func SetupOrderRoutes(r chi.Router, db *sqlx.DB) {
	repo := dbRepo.NewOrderRepo(db)
	service := service.NewOrderService(repo)
	handler := handler.NewOrderHandler(service)

	r.Route("/v1/orders", func(r chi.Router) {
		r.Get("/", handler.GetAll)
		r.Get("/{id}", handler.GetByID)
		r.Post("/", handler.Create)
		r.Patch("/{id}/pay", handler.ChangeStatusToSuccess)
	})
}
