add_library(PicoPeripherals peripheral_i2c.cpp peripheral_spi.cpp peripheral_usb.cpp)
target_include_directories(PicoPeripherals INTERFACE .)
target_link_libraries(PicoPeripherals 
pico_stdlib
hardware_gpio
hardware_i2c
hardware_spi
tinyusb_pico_pio_usb
)