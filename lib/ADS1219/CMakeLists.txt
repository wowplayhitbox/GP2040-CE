add_library(ADS1219 ADS1219.cpp)
target_link_libraries(ADS1219 PUBLIC PicoPeripherals)
target_include_directories(ADS1219 INTERFACE .)
target_include_directories(ADS1219 PUBLIC . PicoPeripherals)
