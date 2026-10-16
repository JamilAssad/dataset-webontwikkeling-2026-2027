
import type { Film } from "./interfaces.ts";
import rl from "readline-sync";



async function getFilms(): Promise<Film[]> {
    const response = await fetch("https://raw.githubusercontent.com/JamilAssad/dataset-webontwikkeling-2026-2027/main/films.json");

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error("Failed to fetch films data.");
    }
}

const films = await getFilms();

let choice: number = 0;

while (choice !== 3) {

    console.log("\n" + "=".repeat(40));
    console.log("Welcome to the JSON data viewer!");
    console.log("=".repeat(40));

    console.log("1. View all data");
    console.log("2. Filter by ID");
    console.log("3. Exit");

    console.log();

    choice = rl.questionInt("Please enter your choice: ");

    switch (choice) {
        case 1:
            console.log("\n" + "-".repeat(40));

            films.forEach(el => {
                console.log(`- ${el.titel} (${el.id})`);
            });

            console.log("-".repeat(40));
            break;

        case 2:
            console.log();

            const filmId: number = rl.questionInt("Please enter the ID you want to filter by: ");
            const result = films.find(n => n.id === filmId);

            console.log("\n" + "-".repeat(40));

            if (result) {
                console.log(`- ${result.titel} (${result.id})`);
                console.log(`  - Description: ${result.beschrijving}`);
                console.log(`  - Year: ${result.jaar}`);
                console.log(`  - Duration: ${result.duur} minutes`);
                console.log(`  - Available: ${result.beschikbaar}`);
                console.log(`  - Release Date: ${result.releasedatum}`);
                console.log(`  - Image: ${result.image}`);
                console.log(`  - Genre: ${result.genre}`);
                console.log(`  - Languages: ${result.talen.join(", ")}`);
                console.log(`  - Director: ${result.regisseur.naam}`);
                console.log(`    - ID: ${result.regisseur.id}`);
            } else {
                console.log("Film not found!");
            }

            console.log("-".repeat(40));
            break;

        case 3:
            console.log("Goodbye!");
            break;

        default:
            console.log("Invalid choice! Please try again.");
            break;
    }
}