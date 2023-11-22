# IOT-Assignment-3




---

## Preparing the Wiring


You will need:
- Photoresistor
- LED
- Resistor
- 5 wires
- Breadboard
- Raspberry PI (obviously)


On the photoresistor:
- Connect the VCC power to a 5V pin on the PI
- Connect the GND to a GND pin on the PI
- Connect the D0 signal pin to GPIO Pin 4 on the Pi

LED
- Connect the long end to GPIO Pin 18 on the PI
- Connect the other end to one end of the resistor

LED
- Connect the other end of the resistor to a GND pin on the PI

---

## Running the Program

To get started with the program, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/JS-Nate/IOT-Assignment-3 Light-Control
```

Navigate to the project directory:

```bash
cd Light-Control
```

### 2. Apply Migrations

Run the following commands to apply database migrations:

```bash
python3 manage.py makemigrations lightcontrol
python3 manage.py migrate
```

### 3. Start the Server

Start the development server with the following command:

```bash
python manage.py runserver 0.0.0.0:8000
```

### 4. Access the Application

Open your web browser and navigate to the following link:

```
http://0.0.0.0:8000/
```

Now, you can use the app as normal.


---

## Using the Program


