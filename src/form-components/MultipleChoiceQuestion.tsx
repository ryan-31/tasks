import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="mcq">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Select value={selectedOption} onChange={updateSelected}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            {selectedOption === expectedAnswer && <div>✔️</div>}
            {selectedOption !== expectedAnswer && <div>❌</div>}
        </div>
    );
}
