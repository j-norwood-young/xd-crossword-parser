const xd_parser = require("../index.js");

const puzzle_1 = `
Title: New York Times, Tuesday, November 16, 1965
Author: Unknown
Editor: Margaret Farrar
Date: 1965-11-16


SHAW#SCARF#RUSK
PUSH#TAMIL#UNTO
ALOE#ARENA#STUB
NARRATOR#BESIDE
###ELEMI#BOILER
GOWILD#CHINA###
ATONE#PAUL#NAVE
RENT#DINGY#DRAM
BATH#ONTO#TRAIL
###ELDER#SEEMLY
FLAWED#ODORS###
REDONE#TRANSFER
OVER#ROTOR#IOLE
TELL#ELEVE#NOSE
HEED#DARED#GLAD


A1. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Heartbreak House\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" writer. ~ SHAW
A5. Dresser cloth. ~ SCARF
A10. Cabinet member. ~ RUSK
A14. Enterprise: Colloq. ~ PUSH
A15. Language of Madras. ~ TAMIL
A16. Towards: Poet. ~ UNTO
A17. Yucca\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s relative. ~ ALOE
A18. Bread-and-circuses setting. ~ ARENA
A19. Pencil of a kind. ~ STUB
A20. TV documentary\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s voice. ~ NARRATOR
A22. In comparison with. ~ BESIDE
A24. Fragrant oleoresin. ~ ELEMI
A25. Steam generator part. ~ BOILER
A26. Lose self-control: Colloq. ~ GOWILD
A29. Site of a Wall, circa 1600. ~ CHINA
A31. Expiate. ~ ATONE
A32. Recent visitor to New York. ~ PAUL
A33. Cathedral part. ~ NAVE
A37. First-of-the-month item. ~ RENT
A38. Not bright or clean. ~ DINGY
A39. Small measure. ~ DRAM
A40. Shower. ~ BATH
A41. Aware of: Slang. ~ ONTO
A42. Meteor\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s streak. ~ TRAIL
A43. Tree with red berries. ~ ELDER
A45. Good-looking. ~ SEEMLY
A46. Like some diamonds. ~ FLAWED
A49. Predominant qualities. ~ ODORS
A51. Fashioned anew. ~ REDONE
A52. Ticket of a kind. ~ TRANSFER
A56. Fini. ~ OVER
A57. Machine part. ~ ROTOR
A59. Eurytus\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' daughter. ~ IOLE
A60. Enumerate. ~ TELL
A61. Pupil: Fr. ~ ELEVE
A62. Move forward. ~ NOSE
A63. Take notice of. ~ HEED
A64. Threw down the gauntlet. ~ DARED
A65. Very willing. ~ GLAD

D1. Reach across. ~ SPAN
D2. Wahine\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s specialty. ~ HULA
D3. Hebrew lyre. ~ ASOR
D4. Surprised exclamation. ~ WHEREINTHEWORLD
D5. Declared. ~ STATED
D6. Billiard shot. ~ CAROM
D7. Standardbred horse. ~ AMERICANTROTTER
D8. Tenth of a sen. ~ RIN
D9. In a limp way. ~ FLABBILY
D10. Menu item. ~ RUSSIANDRESSING
D11. Before (used with a negative). ~ UNTIL
D12. Campus man: Slang. ~ STUDE
D13. Author Arthur. ~ KOBER
D21. River of Poland. ~ ALLE
D23. A thousand ages. ~ EON
D26. Habit. ~ GARB
D27. Great Barrier Island. ~ OTEA
D28. Usage. ~ WONT
D30. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Ruy Blas\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" novelist. ~ HUGO
D32. Useful wood. ~ PINE
D34. Ancient Syria. ~ ARAM
D35. Telephone pioneer. ~ VAIL
D36. Dickens character. ~ EMLY
D38. Progressed unsteadily. ~ DODDERED
D42. Marine bird. ~ TERN
D44. Man\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s nickname. ~ LEN
D45. Towered. ~ SOARED
D46. Bubbles. ~ FROTH
D47. Embankment. ~ LEVEE
D48. Girl\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s name. ~ ADELE
D50. Large crowd. ~ DROVE
D53. Speak in jest. ~ FOOL
D54. Lohengrin\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s bride. ~ ELSA
D55. Musical instrument. ~ REED
D58. Wave, in Spain. ~ OLA

`

let parsed = null;

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

beforeEach(() => {
    parsed = xd_parser(puzzle_1);
});

test("test meta data", () => {
    expect(parsed.meta.Title).toBe("New York Times, Tuesday, November 16, 1965");
    expect(parsed.meta.Author).toBe("Unknown");
    expect(parsed.meta.Editor).toBe("Margaret Farrar");
    expect(parsed.meta.Date).toBe("1965-11-16");
});
test("test grid", () => {
    expect(parsed.grid[0]).toStrictEqual(["S", "H", "A", "W", "#", "S", "C", "A", "R", "F", "#", "R", "U", "S", "K"]);
    expect(parsed.grid[1]).toStrictEqual(["P", "U", "S", "H", "#", "T", "A", "M", "I", "L", "#", "U", "N", "T", "O"]);
});

test("test across clues", () => {
    expect(parsed.across[0].num).toBe("A1");
    expect(parsed.across[0].question).toBe(`"Heartbreak House" writer.`);
    expect(parsed.across[0].answer).toBe("SHAW");
    expect(parsed.across[1].num).toBe("A5");
    expect(parsed.across[1].question).toBe(`Dresser cloth.`);
    expect(parsed.across[1].answer).toBe("SCARF");
    expect(parsed.across.last().num).toBe("A65");
    expect(parsed.across.last().question).toBe("Very willing.");
    expect(parsed.across.last().answer).toBe("GLAD");
});

test("test down clues", () => {
    expect(parsed.down[0].num).toBe("D1");
    expect(parsed.down[0].question).toBe(`Reach across.`);
    expect(parsed.down[0].answer).toBe("SPAN");
    expect(parsed.down[1].num).toBe("D2");
    expect(parsed.down[1].question).toBe(`Wahine's specialty.`);
    expect(parsed.down[1].answer).toBe("HULA");
    expect(parsed.down.last().num).toBe("D58");
    expect(parsed.down.last().question).toBe("Wave, in Spain.");
    expect(parsed.down.last().answer).toBe("OLA");
});