package handler

import (
	"encoding/json"
	"log"
	"net/http"

	"backend/internal/service"

	"github.com/go-chi/chi/v5"
)

type Event struct {
	svc service.Event
}

func NewEventHandler(svc service.Event) Event {
	return Event{
		svc: svc,
	}
}

func (e *Event) GetAll(w http.ResponseWriter, r *http.Request) {
	// TODO: implement
	_, err := e.svc.GetAll()
	if err != nil {
		log.Println("Error", err.Error())
	}

	type response struct {
		Status  bool   `json:"status"`
		Message string `json:"message"`
	}
	resp := response{
		Status:  true,
		Message: "api get events list",
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}

func (e *Event) GetByID(w http.ResponseWriter, r *http.Request) {
	// TODO: implement
	id := chi.URLParam(r, "id")
	log.Println(id)
	type response struct {
		Status  bool   `json:"status"`
		Message string `json:"message"`
	}
	resp := response{
		Status:  true,
		Message: "api get event by id",
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}

func (e *Event) GetTicketCategoriesByEventID(w http.ResponseWriter, r *http.Request) {
	// TODO: implement
	id := chi.URLParam(r, "id")
	log.Println(id)

	type response struct {
		Status  bool   `json:"status"`
		Message string `json:"message"`
	}
	resp := response{
		Status:  true,
		Message: "api get ticket categories by event id",
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}
