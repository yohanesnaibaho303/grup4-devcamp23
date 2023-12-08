package model

type Transport struct {
	Type  string `db:"type" json:"type"`
	Price uint64 `db:"price" json:"price"`
}
