# Close Tab Detection with sendBeacon

This project detects when a user is about to close or navigate away from a browser tab and reliably sends data to a server using the navigator.sendBeacon API. It's ideal for logging, analytics, or saving critical data during unload events.

## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```
git clone https://github.com/your-username/close-tab-detection.git
cd close-tab-detection
```

### 2. Install Dependencies

```
npm install
```

### 3. Start the Server
```
node server.js
```

### 3. The server will start at:
```
http://localhost:5000
```

### 4. Test the Functionality

- Open a browser and go to http://localhost:5173
- Close the tab
- You should see sendBeacon data logged in the terminal
