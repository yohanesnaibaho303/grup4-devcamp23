package route

import (
	"backend/internal/handler"
	"backend/internal/service"

	"github.com/go-chi/chi/v5"
)

func SetupOrderRoutes(r chi.Router) {
	service := service.NewOrderService()
	handler := handler.NewOrderHandler(service)

	r.Route("/v1/orders", func(r chi.Router) {
		r.Get("/", handler.GetAll)
		r.Get("/{id}", handler.GetByID)
		r.Post("/", handler.Create)
		r.Patch("/{id}/pay", handler.ChangeStatusToPaid)
	})
}
