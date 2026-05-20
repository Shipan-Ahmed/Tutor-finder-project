"use client";

import { ComboBox, Input, Label, ListBox } from "@heroui/react";

export function WithSingleSelection() {
    return (
        <ComboBox className="w-[256px]">
            <Label>Favorite Subject</Label>
            <ComboBox.InputGroup>
                <Input placeholder="Search Subjects..." />
                <ComboBox.Trigger className="text-black" />
            </ComboBox.InputGroup>
            <ComboBox.Popover>
                <ListBox>
                    <ListBox.Item id="Mathematics" textValue="Mathematics">
                        Mathematics
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Chemistry" textValue="Chemistry">
                        Chemistry
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Physics" textValue="Physics">
                        Physics
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Biology" textValue="Biology">
                        Biology
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Programming" textValue="Programming">
                        Programming
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="English" textValue="English">
                        English
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                </ListBox>
            </ComboBox.Popover>
        </ComboBox>
    );
}