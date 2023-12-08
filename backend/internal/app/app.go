package app

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"backend/internal/route"
	"backend/pkg/db"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/jmoiron/sqlx"
)

func InitServer(ctx context.Context, config Config) error {
	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	// setup cors
	r.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
		AllowedOrigins: []string{"https://*", "http://*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		type response struct {
			Status  bool   `json:"status"`
			Message string `json:"message"`
		}
		resp := response{
			Status:  true,
			Message: "hello from backend app",
		}

		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(resp)
	})

	db := db.NewDB()
	initRoutes(r, db)

	server := &http.Server{
		Addr:    fmt.Sprintf(":%d", config.ServerPort),
		Handler: r,
	}

	log.Println("Server listening on port", config.ServerPort)

	errCh := make(chan error, 1)

	go func() {
		err := server.ListenAndServe()
		if err != nil {
			errCh <- fmt.Errorf("failed to start server: %w", err)
		}
	}()

	select {
	case err := <-errCh:
		return err
	case <-ctx.Done():
		ctx, cancel := context.WithTimeout(ctx, time.Second*10)
		defer cancel()

		return server.Shutdown(ctx)
	}
}

func initRoutes(r chi.Router, db *sqlx.DB) {
	r.Route("/api", func(r chi.Router) {
		route.SetupEventRoutes(r, db)
		route.SetupOrderRoutes(r, db)
		route.SetupTransportRoutes(r, db)
	})
}
