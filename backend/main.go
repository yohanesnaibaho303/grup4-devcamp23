package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"

	"backend/internal/app"
)

func main() {
	appConfig := app.LoadConfig()

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM, syscall.SIGINT)
	defer stop()

	if err := app.InitServer(ctx, appConfig); err != nil {
		log.Fatalln("failed to start app", err)
	}
}
