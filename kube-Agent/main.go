package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"time"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/rest"
)

// const SaaSURL = "https://e04b-2409-40c2-400e-e364-f0f4-d353-6971-4821.ngrok-free.app"
var SaaSURL = os.Getenv("SAAS_URL")

type Metric struct {
	Node   string `json:"node"`
	CPU    string `json:"cpu"`
	Memory string `json:"memory"`
}

func main() {
	config, err := rest.InClusterConfig()
	if err != nil {
		fmt.Printf("Error creating in-cluster: %v\n", err)
		os.Exit(1)
	}

	clientSet, err := kubernetes.NewForConfig(config)
	if err != nil {
		fmt.Printf("Error creating Kubernetes client: %v\n", err)
		os.Exit(1)
	}

	for {
		sendMetrics(clientSet)
		time.Sleep(10 * (time.Second))
	}
}

func sendMetrics(clientset *kubernetes.Clientset) {
	nodes, err := clientset.CoreV1().Nodes().List(context.TODO(), metav1.ListOptions{})
	if err != nil {
		fmt.Printf("Error fetching nodes: %v\n", err)
		return
	}

	for _, node := range nodes.Items {
		metrics := Metric{
			Node:   node.Name,
			CPU:    node.Status.Capacity.Cpu().String(),
			Memory: node.Status.Capacity.Memory().String(),
		}

		payload, _ := json.Marshal(metrics)
		resp, err := http.Post(SaaSURL+"/metrics", "application/json", bytes.NewBuffer(payload))
		if err != nil {
			fmt.Printf("Error sending metrics: %v\n", err)
			return
		}

		defer resp.Body.Close()
		fmt.Printf("metrics sent for node: %s\n", node.Name)
	}
}
