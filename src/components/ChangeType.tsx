import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { /*Question, */ QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function change(): void {
        type === "short_answer_question"
            ? setType("multiple_choice_question")
            : setType("short_answer_question");
    }
    return (
        <div>
            <Button onClick={change}>Change Type</Button>
            {type === "short_answer_question" && <div>Short Answer</div>}
            {type === "multiple_choice_question" && <div>Multiple Choice</div>}
        </div>
    );
}
