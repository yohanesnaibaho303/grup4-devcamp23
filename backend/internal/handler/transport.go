package handler

import (
	"encoding/json"
	"net/http"

	"backend/internal/model"
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
	w.Header().Set("Content-Type", "application/json")
	var resp model.Response

	city := r.URL.Query().Get("city")

	transports, err := t.svc.GetRecommendations(r.Context(), city)
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
		Data:    transports,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}
