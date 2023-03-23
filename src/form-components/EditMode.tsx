import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<string>(" is a student");

    function updateEditMode() {
        setEditMode(!editMode);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        event.target.checked
            ? setIsStudent(" is a student")
            : setIsStudent(" is not a student");
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editMode"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="student"
                    label="Student?"
                    checked={isStudent === " is a student"}
                    onChange={updateIsStudent}
                />
            )}
            {editMode && (
                <Form.Group controlId="textbox">
                    <Form.Label>Enter Name:</Form.Label>
                    <Form.Control
                        disabled={!editMode}
                        hidden={!editMode}
                        value={name}
                        onChange={updateName}
                    />
                </Form.Group>
            )}
            {name}
            {isStudent}
        </div>
    );
}
