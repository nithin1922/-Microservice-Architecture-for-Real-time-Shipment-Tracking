# Microservice Architecture for Real-time Shipment Tracking

A microservices-based shipment tracking system designed for a logistics company. This system leverages Kafka for real-time event streaming and Redis for caching shipment location updates. The services are containerized with Docker and orchestrated with Kubernetes, deployed on AWS with autoscaling enabled.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Technologies](#technologies)

## Overview

This project demonstrates a robust microservices architecture for real-time shipment tracking. It includes:
- A **Shipment Service** that accepts shipment updates via REST endpoints and publishes events to a Kafka topic.
- A **Tracking Service** that listens to Kafka events, processes them, and caches the latest shipment location updates in Redis.
- Full containerization using Docker and orchestration with Kubernetes.
- Deployment on AWS EKS with autoscaling capabilities.

## Architecture

The system is designed using a microservices approach:
- **Shipment Service:**  
  - Receives shipment update requests.
  - Publishes shipment events to Kafka.
- **Tracking Service:**  
  - Subscribes to Kafka events.
  - Updates Redis cache with the latest shipment location.
- **Kafka & Zookeeper:**  
  - Provides a robust event streaming backbone.
- **Redis:**  
  - Caches shipment location updates for fast retrieval.
- **Containerization & Orchestration:**  
  - Docker is used to containerize services.
  - Kubernetes orchestrates these containers.
- **AWS Deployment:**  
  - Deployed on AWS EKS with autoscaling enabled.

## Features

- **Real-Time Updates:**  
  Efficiently stream shipment updates using Kafka.
- **Caching:**  
  Speed up read operations with Redis caching.
- **Scalability:**  
  Easily scale microservices using Kubernetes autoscaling.
- **Containerization:**  
  Seamless development-to-production transition with Docker.
- **Cloud Deployment:**  
  Ready for production deployment on AWS.

## Technologies

- **Backend:** Node.js, Express
- **Messaging:** Apache Kafka (via KafkaJS)
- **Caching:** Redis
- **Containerization:** Docker, Docker Compose
- **Orchestration:** Kubernetes, AWS EKS
- **CI/CD:** GitHub Actions, Jenkins, etc.


