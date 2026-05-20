"use client";

import { ComboBox, Input, Label, ListBox } from "@heroui/react";

export function Shedule() {
    return (
        <ComboBox className="w-[256px]">
            <Label>Available Day & Time</Label>
            <ComboBox.InputGroup>
                <Input placeholder="Search Day & Time..." />
                <ComboBox.Trigger className="text-black" />
            </ComboBox.InputGroup>
            <ComboBox.Popover>
                <ListBox>
                    <ListBox.Item id=" Sun - Tue -  Thu 5:00 PM - 6:00 PM" textValue="Sun - Tue -  Thu 5:00 PM - 6:00 PM">
                        Sun - Tue -  Thu 5:00 PM - 6:00 PM
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id=" Sun - Tue -  Thu 6:00 PM - 7:00 PM" textValue="Sun - Tue -  Thu 6:00 PM - 7:00 PM">
                        Sun - Tue -  Thu 6:00 PM - 7:00 PM
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id=" Sun - Tue -  Thu 7:00 PM - 8:00 PM" textValue="Sun - Tue -  Thu 7:00 PM - 8:00 PM">
                        Sun - Tue -  Thu 7:00 PM - 8:00 PM
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id=" Sat - Mon - Wed 5:00 PM - 6:00 PM" textValue="Sat - Mon - Wed 5:00 PM - 6:00 PM">
                        Sat - Mon - Wed 5:00 PM - 6:00 PM
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id=" Sat - Mon - Wed 6:00 PM - 7:00 PM" textValue="Sat - Mon - Wed 6:00 PM - 7:00 PM">
                        Sat - Mon - Wed 6:00 PM - 7:00 PM
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id=" Sat - Mon - Wed 7:00 PM - 8:00 PM" textValue="Sat - Mon - Wed 7:00 PM - 8:00 PM">
                        Sat - Mon - Wed 7:00 PM - 8:00 PM
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                   
                </ListBox>
            </ComboBox.Popover>
        </ComboBox>
    );
}