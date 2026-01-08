/*This is my first attempt at a very simple database with SQL, using some basic information about the solar system*/

**Schema (MySQL v5.7)**

    CREATE TABLE planets (
      name VARCHAR(20),
      position INT,
      surface VARCHAR(7),
      moons INT,
      rings BIT,
      rotation VARCHAR(17)
    );
    INSERT INTO planets (name, position, surface, moons, rings, rotation) VALUES ("Mercury", 1, "Rocky", 0, 0, "Counter-clockwise");
    INSERT INTO planets (name, position, surface, moons, rings, rotation) VALUES ("Venus", 2, "Rocky", 0, 0, "Clockwise");
    INSERT INTO planets (name, position, surface, moons, rings, rotation) VALUES ("Earth", 3, "Rocky", 1, 0, "Counter-clockwise");
    INSERT INTO planets (name, position, surface, moons, rings, rotation) VALUES ("Mars", 4, "Rocky", 2, 0, "Counter-clockwise");
    INSERT INTO planets (name, position, surface, moons, rings, rotation) VALUES ("Jupiter", 5, "Gaseous", 97, 1, "Counter-clockwise");
    INSERT INTO planets (name, position, surface, moons, rings, rotation) VALUES ("Saturn", 6, "Gaseous", 274, 1, "Counter-clockwise");
    INSERT INTO planets (name, position, surface, moons, rings, rotation) VALUES ("Uranus", 7, "Gaseous", 29, 1, "Counter-clockwise");
    INSERT INTO planets (name, position, surface, moons, rings, rotation) VALUES ("Neptune", 8, "Gaseous", 16, 1, "Counter-clockwise");

---

**Query #1**

    SELECT * FROM planets;

| name    | position | surface | moons | rings | rotation          |
| ------- | -------- | ------- | ----- | ----- | ----------------- |
| Mercury | 1        | Rocky   | 0     | 0     | Counter-clockwise |
| Venus   | 2        | Rocky   | 0     | 0     | Clockwise         |
| Earth   | 3        | Rocky   | 1     | 0     | Counter-clockwise |
| Mars    | 4        | Rocky   | 2     | 0     | Counter-clockwise |
| Jupiter | 5        | Gaseous | 97    | 1     | Counter-clockwise |
| Saturn  | 6        | Gaseous | 274   | 1     | Counter-clockwise |
| Uranus  | 7        | Gaseous | 29    | 1     | Counter-clockwise |
| Neptune | 8        | Gaseous | 16    | 1     | Counter-clockwise |

---
