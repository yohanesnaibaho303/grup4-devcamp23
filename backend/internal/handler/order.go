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
		return
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
		return
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
		return
	}

	resp = model.Response{
		Success: true,
		Data:    event,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}

func (o *Order) Create(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var resp model.Response

	var orderReq model.OrderRequest

	err := json.NewDecoder(r.Body).Decode(&orderReq)
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

	id, err := o.svc.Create(r.Context(), orderReq)
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
		Data: map[string]interface{}{
			"id": id,
		},
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(resp)
}

func (o *Order) ChangeStatusToSuccess(w http.ResponseWriter, r *http.Request) {
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

	err = o.svc.ChangePaymentStatusToSuccess(r.Context(), uuid)
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
		Message: "buy ticket success",
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}
