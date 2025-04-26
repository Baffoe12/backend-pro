# SafeDrive Pro Backend

A simple Node.js backend for receiving and storing sensor and accident data from the ESP32-based SafeDrive Pro system.

## Features
- Receives live sensor data and accident events from ESP32 via HTTP POST
- Stores accident events and latest sensor data in JSON files
- Provides REST API for dashboard/frontend to fetch data

## Endpoints
- `POST /api/sensor` — Receive live sensor data
- `POST /api/accident` — Receive accident event
- `GET /api/sensor` — Get latest sensor data
- `GET /api/accidents` — Get all accident logs

## Usage
1. Run `npm install` to install dependencies.
2. Run `node server.js` to start the backend (default port: 4000).
3. ESP32 should POST data to `http://<backend-ip>:4000/api/sensor` and `http://<backend-ip>:4000/api/accident`

## Data Storage
- Sensor data: `./data/sensors.json` (latest reading)
- Accident log: `./data/accidents.json` (array of events)

---

You can upgrade to a database later (MongoDB, PostgreSQL, etc.) for more advanced features.
