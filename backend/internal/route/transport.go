package route

import (
	"backend/internal/handler"
	"backend/internal/service"

	"github.com/go-chi/chi/v5"
)

func SetupTransportRoutes(r chi.Router) {
	service := service.NewTransportService()
	handler := handler.NewTransportHandler(service)

	r.Route("/v1/transports/recommendation", func(r chi.Router) {
		r.Get("/", handler.GetRecommendations)
	})
}
