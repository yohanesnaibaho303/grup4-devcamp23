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

type Order struct {
	svc service.Order
}

func NewOrderHandler(svc service.Order) Order {
	return Order{
		svc: svc,
	}
}

func (o *Order) GetAll(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var resp model.Response

	orders, err := o.svc.GetAll(r.Context())
	if err != nil {
		resp = model.Response{
			Success: false,
			Message: err.Error(),
		}

		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(resp)
	}

	resp = model.Response{
		Success: true,
		Data:    orders,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}

func (o *Order) GetByID(w http.ResponseWriter, r *http.Request) {
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
	}

	event, err := o.svc.GetByID(r.Context(), uuid)
	if err != nil {
		log.Println(err.Error())
		resp = model.Response{
			Success: false,
			Message: err.Error(),
		}
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(resp)
	}

	resp = model.Response{
		Success: true,
		Data:    event,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}

func (o *Order) Create(w http.ResponseWriter, r *http.Request) {
	// TODO: implement
	type response struct {
		Status  bool   `json:"status"`
		Message string `json:"message"`
	}
	resp := response{
		Status:  true,
		Message: "api create order",
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(resp)
}

func (o *Order) ChangeStatusToPaid(w http.ResponseWriter, r *http.Request) {
	// TODO: implement
	id := chi.URLParam(r, "id")
	log.Println(id)
	type response struct {
		Status  bool   `json:"status"`
		Message string `json:"message"`
	}
	resp := response{
		Status:  true,
		Message: "api pay order",
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}
