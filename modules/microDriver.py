from machine import Pin, I2C
from time import sleep, sleep_ms, sleep_us
from os import uname

machine = uname().machine
if ("KidBright32" in machine) or ("KidMotor V4" in machine):
    i2c1 = I2C(1, scl=Pin(5), sda=Pin(4), freq=400000)
elif ("Mbits" in machine) or ("OpenBIT" in machine):
    i2c1 = I2C(0, scl=Pin(21), sda=Pin(22), freq=400000)
else:
    i2c1 = I2C(0, scl=Pin(22), sda=Pin(21), freq=400000)

"""
for addr in i2c1.scan():
    print(hex(addr))
"""

###############
PCA9685_ADDRESS = const(0x40)
MODE1 = const(0x00)
MODE2 = const(0x01)
SUBADR1 = const(0x02)
SUBADR2 = const(0x03)
SUBADR3 = const(0x04)
PRESCALE = const(0xFE)
LED0_ON_L = const(0x06)
LED0_ON_H = const(0x07)
LED0_OFF_L = const(0x08)
LED0_OFF_H = const(0x09)
ALL_LED_ON_L = const(0xFA)
ALL_LED_ON_H = const(0xFB)
ALL_LED_OFF_L = const(0xFC)
ALL_LED_OFF_H = const(0xFD)

STP_CHA_L = const(2047)
STP_CHA_H = const(4095)

STP_CHB_L = const(1)
STP_CHB_H = const(2047)

STP_CHC_L = const(1023)
STP_CHC_H = const(3071)

STP_CHD_L = const(3071)
STP_CHD_H = const(1023)


BYG_CHA_L = const(3071)
BYG_CHA_H = const(1023)

BYG_CHB_L = const(1023)
BYG_CHB_H = const(3071)

BYG_CHC_L = const(4095)
BYG_CHC_H = const(2047)

BYG_CHD_L = const(2047)
BYG_CHD_H = const(4095)

# The user can choose the step motor model.
Ste1 = const(1)
Ste2 = const(2)

# The user can select the 8 steering gear controller.
S1 = const(0x08)
S2 = const(0x07)
S3 = const(0x06)
S4 = const(0x05)
S5 = const(0x04)
S6 = const(0x03)
S7 = const(0x02)
S8 = const(0x01)

# The user selects the 4-way dc motor.
M1 = const(0x1)
M2 = const(0x2)
M3 = const(0x3)
M4 = const(0x4)

# The user defines the motor rotation direction.
CW = const(1)
CCW = -1

# The user can select a two-path stepper motor controller.
M1_M2 = const(0x1)
M3_M4 = const(0x2)


initialized = False

def i2cWrite(addr, reg, value): 
    i2c1.writeto_mem(addr, reg, bytearray([ int(value) ]))

def i2cCmd(addr, value):
    i2c1.writeto(addr, bytearray([ int(value) ]))

def i2cRead(addr, reg):
    return i2c1.readfrom_mem(addr, reg, 1)[0]

def initPCA9685():
    i2cWrite(PCA9685_ADDRESS, MODE1, 0x00)
    setFreq(50)
    initialized = True

def setFreq(freq):
    # Constrain the frequency
    prescaleval = 25000000;
    prescaleval /= 4096;
    prescaleval /= freq;
    prescaleval -= 1;
    prescale = prescaleval; # Math.floor(prescaleval + 0.5);
    oldmode = i2cRead(PCA9685_ADDRESS, MODE1);
    newmode = (oldmode & 0x7F) | 0x10; # sleep
    i2cWrite(PCA9685_ADDRESS, MODE1, newmode); # go to sleep
    i2cWrite(PCA9685_ADDRESS, PRESCALE, prescale); # set the prescaler
    i2cWrite(PCA9685_ADDRESS, MODE1, oldmode);
    sleep_us(5000);
    i2cWrite(PCA9685_ADDRESS, MODE1, oldmode | 0xa1);

def setPwm(channel, on, off):
    if channel < 0 or channel > 15:
        return None
    i2c1.writeto(PCA9685_ADDRESS, bytearray([
        LED0_ON_L + 4 * channel,
        on & 0xff,
        (on >> 8) & 0xff,
        off & 0xff,
        (off >> 8) & 0xff
    ]))


def setStepper_28(index, dir):
    if index == 1:
        if dir:
            setPwm(4, STP_CHA_L, STP_CHA_H)
            setPwm(6, STP_CHB_L, STP_CHB_H)
            setPwm(5, STP_CHC_L, STP_CHC_H)
            setPwm(7, STP_CHD_L, STP_CHD_H)
        else:
            setPwm(7, STP_CHA_L, STP_CHA_H)
            setPwm(5, STP_CHB_L, STP_CHB_H)
            setPwm(6, STP_CHC_L, STP_CHC_H)
            setPwm(4, STP_CHD_L, STP_CHD_H)
    else:
        if dir:
            setPwm(0, STP_CHA_L, STP_CHA_H)
            setPwm(2, STP_CHB_L, STP_CHB_H)
            setPwm(1, STP_CHC_L, STP_CHC_H)
            setPwm(3, STP_CHD_L, STP_CHD_H)
        else:
            setPwm(3, STP_CHA_L, STP_CHA_H)
            setPwm(1, STP_CHB_L, STP_CHB_H)
            setPwm(2, STP_CHC_L, STP_CHC_H)
            setPwm(0, STP_CHD_L, STP_CHD_H)


def setStepper_42(index, dir):
    if index == 1:
        if dir:
            setPwm(7, BYG_CHA_L, BYG_CHA_H)
            setPwm(6, BYG_CHB_L, BYG_CHB_H)
            setPwm(5, BYG_CHC_L, BYG_CHC_H)
            setPwm(4, BYG_CHD_L, BYG_CHD_H)
        else:
            setPwm(7, BYG_CHC_L, BYG_CHC_H)
            setPwm(6, BYG_CHD_L, BYG_CHD_H)
            setPwm(5, BYG_CHA_L, BYG_CHA_H)
            setPwm(4, BYG_CHB_L, BYG_CHB_H)
    else:
        if dir:
            setPwm(3, BYG_CHA_L, BYG_CHA_H)
            setPwm(2, BYG_CHB_L, BYG_CHB_H)
            setPwm(1, BYG_CHC_L, BYG_CHC_H)
            setPwm(0, BYG_CHD_L, BYG_CHD_H)
        else:
            setPwm(3, BYG_CHC_L, BYG_CHC_H)
            setPwm(2, BYG_CHD_L, BYG_CHD_H)
            setPwm(1, BYG_CHA_L, BYG_CHA_H)
            setPwm(0, BYG_CHB_L, BYG_CHB_H)

###############

def servo(index, degree):
    if not initialized:
        initPCA9685()
    # 50hz
    v_us = (degree * 1800 / 180 + 600) # 0.6ms ~ 2.4ms
    value = v_us * 4096 / 20000
    setPwm(index + 7, 0, value)

def MotorRun(index, direction, speed):
    if not initialized:
        initPCA9685()
    speed = speed * 16 * direction; # map 255 to 4096
    if speed >= 4096:
        speed = 4095
    if speed <= -4096:
        speed = -4095

    if index > 4 or index <= 0:
        return None
    pn = (4 - index) * 2
    pp = (4 - index) * 2 + 1
    if speed >= 0:
        setPwm(pp, 0, speed)
        setPwm(pn, 0, 0)
    else:
        setPwm(pp, 0, 0)
        setPwm(pn, 0, -speed)
    

def stepperDegree_42(index, direction, degree):
    if not initialized:
        initPCA9685()
    # let Degree = Math.abs(degree);
    # Degree = Degree * direction;
    # setFreq(100);
    setStepper_42(index, direction > 0)
    if degree == 0:
        return None
    Degree = abs(degree)
    sleep_ms((50000 * Degree) / (360 * 100));  # 100hz
    if index == 1:
        motorStop(1)
        motorStop(2)
    else:
        motorStop(3)
        motorStop(4)
    # setFreq(50);

def stepperTurn_42(index, direction, turn):
    if turn == 0:
        return None
    degree = turn * 360
    stepperDegree_42(index, direction, degree)

def stepperDegree_28(index, direction, degree):
    if not initialized:
        initPCA9685()

    if degree == 0:
        return None

    Degree = abs(degree)
    Degree = Degree * direction
    # setFreq(100)
    setStepper_28(index, Degree > 0)
    Degree = abs(Degree)
    sleep_ms((1000 * Degree) / 360)
    if index == 1:
        motorStop(1)
        motorStop(2)
    else:
        motorStop(3)
        motorStop(4)
    # setFreq(50);

def stepperTurn_28(index, direction, turn):
    if turn == 0:
        return None
    degree = turn * 360
    stepperDegree_28(index, direction, degree)

def stepperDegreeDual_42(stepper, direction1, degree1, direction2, degree2):
    if not initialized:
        initPCA9685()

    timeout1 = 0
    timeout2 = 0
    Degree1 = abs(degree1)
    Degree2 = abs(degree2)

    if stepper == 1: # 42 stepper
        if Degree1 == 0 and Degree2 == 0:
            setStepper_42(0x01, direction1 > 0)
            setStepper_42(0x02, direction2 > 0)
        elif Degree1 == 0 and Degree2 > 0:
            timeout1 = (50000 * Degree2) / (360 * 100)
            setStepper_42(0x01, direction1 > 0)
            setStepper_42(0x02, direction2 > 0)
            sleep_ms(timeout1)
            motorStop(3)
            motorStop(4)
        elif Degree2 == 0 and Degree1 > 0:
            timeout1 = (50000 * Degree1) / (360 * 100)
            setStepper_42(0x01, direction1 > 0)
            setStepper_42(0x02, direction2 > 0)
            sleep_ms(timeout1)
            motorStop(1)
            motorStop(2)
        elif Degree2 > Degree1:
            timeout1 = (50000 * Degree1) / (360 * 100)
            timeout2 = (50000 * (Degree2 - Degree1)) / (360 * 100)
            setStepper_42(0x01, direction1 > 0)
            setStepper_42(0x02, direction2 > 0)
            sleep_ms(timeout1)
            motorStop(1)
            motorStop(2)
            sleep_ms(timeout2)
            motorStop(3)
            motorStop(4)
        elif Degree2 < Degree1:
            timeout1 = (50000 * Degree2) / (360 * 100)
            timeout2 = (50000 * (Degree1 - Degree2)) / (360 * 100)
            setStepper_42(0x01, direction1 > 0)
            setStepper_42(0x02, direction2 > 0)
            sleep_ms(timeout1)
            motorStop(3)
            motorStop(4)
            sleep_ms(timeout2)
            motorStop(1)
            motorStop(2)
    elif stepper == 2:
        if Degree1 == 0 and Degree2 == 0:
            setStepper_28(0x01, direction1 > 0)
            setStepper_28(0x02, direction2 > 0)
        elif (Degree1 == 0) and (Degree2 > 0):
            timeout1 = (50000 * Degree2) / (360 * 100)
            setStepper_28(0x01, direction1 > 0)
            setStepper_28(0x02, direction2 > 0)
            sleep_ms(timeout1)
            motorStop(3)
            motorStop(4)
        elif (Degree2 == 0) and (Degree1 > 0):
            timeout1 = (50000 * Degree1) / (360 * 100)
            setStepper_28(0x01, direction1 > 0)
            setStepper_28(0x02, direction2 > 0)
            sleep_ms(timeout1)
            motorStop(1)
            motorStop(2)
        elif Degree2 > Degree1:
            timeout1 = (50000 * Degree1) / (360 * 100)
            timeout2 = (50000 * (Degree2 - Degree1)) / (360 * 100)
            setStepper_28(0x01, direction1 > 0)
            setStepper_28(0x02, direction2 > 0)
            sleep_ms(timeout1)
            motorStop(1)
            motorStop(2)
            sleep_ms(timeout2)
            motorStop(3)
            motorStop(4)
        elif Degree2 < Degree1:
            timeout1 = (50000 * Degree2) / (360 * 100)
            timeout2 = (50000 * (Degree1 - Degree2)) / (360 * 100)
            setStepper_28(0x01, direction1 > 0)
            setStepper_28(0x02, direction2 > 0)
            sleep_ms(timeout1)
            motorStop(3)
            motorStop(4)
            sleep_ms(timeout2)
            motorStop(1)
            motorStop(2)
    else:
        pass

def stepperTurnDual_42(stepper, direction1, turn1, direction2, turn2):
    if turn1 == 0 and turn2 == 0:
        return None
    degree1 = turn1 * 360
    degree2 = turn2 * 360
    if stepper == 1:
        stepperDegreeDual_42(stepper, direction1, degree1, direction2, degree2)
    elif stepper == 2:
        stepperDegreeDual_42(stepper, direction1, degree1, direction2, degree2)
    else:
        pass

def motorStop(index):
    setPwm((4 - index) * 2, 0, 0)
    setPwm((4 - index) * 2 + 1, 0, 0)

def motorStopAll():
    for idx in range(1, 4):
        motorStop(idx)


# Test
for i in range(255):
    MotorRun(M1, CW, i)
    MotorRun(M2, CCW, i)
    sleep_ms(50)
    


