package handler

import (
	"encoding/json"
	"net/http"

	"backend/internal/service"
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
	type response struct {
		Status  bool   `json:"status"`
		Message string `json:"message"`
	}
	resp := response{
		Status:  true,
		Message: "api get event",
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}
