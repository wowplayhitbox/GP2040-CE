/*
 * SPDX-License-Identifier: MIT
 * SPDX-FileCopyrightText: Copyright (c) 2021 Jason Skuby (mytechtoybox.com)
 */

#pragma once

#include "device/usbd_pvt.h"
#include "gamepad/descriptors/HIDDescriptors.h"
#include "gamepad/descriptors/SwitchDescriptors.h"
#include "gamepad/descriptors/NeogeoDescriptors.h"
#include "gamepad/descriptors/MDMiniDescriptors.h"
#include "gamepad/descriptors/PCEngineDescriptors.h"
#include "gamepad/descriptors/EgretDescriptors.h"
#include "gamepad/descriptors/AstroDescriptors.h"
#include "gamepad/descriptors/PSClassicDescriptors.h"

extern const usbd_class_driver_t hid_driver;

bool send_hid_report(uint8_t report_id, void *report, uint8_t report_size);
bool send_keyboard_report(void *report);
