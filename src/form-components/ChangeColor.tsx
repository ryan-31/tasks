import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "green",
        "blue",
        "orange",
        "purple",
        "pink",
        "yellow",
        "grey"
    ];
    const [chosenColor, setChosenColor] = useState<string>(colors[0]);

    function updateChosenColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    inline
                    type="radio"
                    key={color}
                    label={color}
                    value={color}
                    checked={chosenColor === color}
                    onChange={updateChosenColor}
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    height: "30px",
                    width: "50px"
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
