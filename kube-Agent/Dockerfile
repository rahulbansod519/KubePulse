# Stage 1: Build the Go binary
FROM golang:1.23 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the Go module files and download dependencies (to leverage Docker cache)
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the application source code
COPY . .

# Build the binary for Linux with static linking
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o kube-agent .

# Stage 2: Create the runtime container
FROM alpine:latest

# Set the working directory inside the container
WORKDIR /root/

# Copy the built binary from the builder stage
COPY --from=builder /app/kube-agent .

# Ensure the binary has executable permissions
RUN chmod +x ./kube-agent

# Set the default command to run the application
CMD ["./kube-agent"]
