const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database('./maBaseDeDonnees.sqlite', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connecté à la base de données SQLite.');
        // Création de la table personnes
        db.run(`CREATE TABLE IF NOT EXISTS personnes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            adresse TEXT
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('La table personnes a été créée avec succès.');

                // Insertion de données initiales
                db.run(`ALTER TABLE personnes ADD COLUMN adresse TEXT;`, (err) => {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log('La colonne adresse a été ajoutée avec succès à la table personnes.');
                    }
                });
                
            }
        });

    }
});

module.exports = db;
