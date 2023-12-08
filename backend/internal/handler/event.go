package handler

import (
	"encoding/json"
	"log"
	"net/http"

	"backend/internal/model"
	"backend/internal/service"

	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"
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
	w.Header().Set("Content-Type", "application/json")
	var resp model.Response

	events, err := e.svc.GetAll(r.Context())
	if err != nil {
		resp = model.Response{
			Success: false,
			Message: err.Error(),
		}

		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(resp)
		return
	}

	resp = model.Response{
		Success: true,
		Data:    events,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}

func (e *Event) GetByID(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var resp model.Response

	id := chi.URLParam(r, "id")
	uuid, err := uuid.Parse(id)
	if err != nil {
		log.Println(err.Error())
		resp = model.Response{
			Success: false,
			Message: err.Error(),
		}
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(resp)
		return
	}

	event, err := e.svc.GetByID(r.Context(), uuid)
	if err != nil {
		log.Println(err.Error())
		resp = model.Response{
			Success: false,
			Message: err.Error(),
		}
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(resp)
		return
	}

	resp = model.Response{
		Success: true,
		Data:    event,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}

func (e *Event) GetTicketCategoriesByEventID(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var resp model.Response

	eventID := chi.URLParam(r, "id")
	eventUUID, err := uuid.Parse(eventID)
	if err != nil {
		log.Println(err.Error())
		resp = model.Response{
			Success: false,
			Message: err.Error(),
		}
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(resp)
		return
	}

	tickets, err := e.svc.GetTicketCategoriesByEventID(r.Context(), eventUUID)
	if err != nil {
		log.Println(err.Error())
		resp = model.Response{
			Success: false,
			Message: err.Error(),
		}
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(resp)
		return
	}

	resp = model.Response{
		Success: true,
		Data:    tickets,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}
