# IOT-Assignment-3
---

## Code Description



- `lightapp`: The principal project directory housing settings and root configurations.
- `settings.py`: Within this file, settings and configurations for the Django project are specified.
- `urls.py`: This file encompasses URL declarations for the entire Django project.
- `manage.py`: The Django command-line utility designed for executing administrative tasks.
- `db.sqlite3`: The SQLite database file preserving the application's persistent data.
- `lightcontrol/`: This Django application oversees the management of the lighting system.
- `models.py`: This file defines the data model for configuring system settings.
- `gpio_control.py`: Houses functions facilitating interactions with GPIO pins, utilized for LED and LDR operations.
- `urls.py`: Within this file, URL declarations specific to the application are established.
- `views.py`: Responsible for handling requests and generating responses for the web interface.
- `dashboard.html`: HTML file displaying the functionality on the web.
- `LightControls.js`: Handles the front-end functionality of the different buttons and appearance

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
- Connect the long(+) end to GPIO Pin 18 on the PI
- Connect the other short(-) end to one end of the resistor

Resistor
- Connect the other end of the resistor to a GND pin on the PI


![Assignment 3 Wiring](https://github.com/JS-Nate/IOT-Assignment-3/assets/94251955/de78df86-af86-4f02-938a-f10a3b109a7e)



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


### Manual Mode

Clicking MANUAL ON wil enable the LED. It will also disable the ability to enable AUTO mode while MANUAL mode is on


### Auto Mode

Clicking Auto Mode will enable the photoresistor. When the surrounding envidonment is lit up, the LED will be off. However while the surrounding light level is low or you cover the sensor of the photoresistor (do not touch it directly), the LED will turn on.
The LED being on in AUTO mode will also update the button and indication of MANUAL mode that it is on



https://github.com/JS-Nate/IOT-Assignment-3/assets/94251955/1282a7ec-5431-4d5b-bfb3-9057cabca238


