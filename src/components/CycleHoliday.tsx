import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");

    const alphabetical = ["🎄", "🐲", "🎃", "🎆", "🦃"];
    const yearly = ["🐲", "🎃", "🦃", "🎄", "🎆"];

    function nextAlphabetically(): void {
        const currHoliday = alphabetical.indexOf(holiday);
        currHoliday === 4
            ? setHoliday(alphabetical[0])
            : setHoliday(alphabetical[currHoliday + 1]);
    }

    function nextYearly(): void {
        const currHoliday = yearly.indexOf(holiday);
        currHoliday === 4
            ? setHoliday(yearly[0])
            : setHoliday(yearly[currHoliday + 1]);
    }
    return (
        <div>
            <Button onClick={nextAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={nextYearly}>Advance by Year</Button>
            Holiday: {holiday}
        </div>
    );
}
