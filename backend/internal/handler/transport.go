package handler

import (
	"encoding/json"
	"net/http"

	"backend/internal/service"
)

type Transport struct {
	svc service.Transport
}

func NewTransportHandler(svc service.Transport) Transport {
	return Transport{
		svc: svc,
	}
}

func (t *Transport) GetRecommendations(w http.ResponseWriter, r *http.Request) {
	// TODO: implement
	type response struct {
		Status  bool   `json:"status"`
		Message string `json:"message"`
	}
	resp := response{
		Status:  true,
		Message: "api get transports recommendation",
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}
