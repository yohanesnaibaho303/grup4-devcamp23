package handler

import (
	"encoding/json"
	"log"
	"net/http"

	"backend/internal/service"

	"github.com/go-chi/chi/v5"
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
	// TODO: implement
	type response struct {
		Status  bool   `json:"status"`
		Message string `json:"message"`
	}
	resp := response{
		Status:  true,
		Message: "api get orders list",
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}

func (o *Order) GetByID(w http.ResponseWriter, r *http.Request) {
	// TODO: implement
	type response struct {
		Status  bool   `json:"status"`
		Message string `json:"message"`
	}
	resp := response{
		Status:  true,
		Message: "api get order detail by id",
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
