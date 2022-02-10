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

const puzzle_2 = `VGl0bGU6IE5ldyBZb3JrIFRpbWVzLCBUdWVzZGF5LCBOb3ZlbWJlciAxNiwgMTk2NQ0KQXV0aG9yOiBVbmtub3duDQpFZGl0b3I6IE1hcmdhcmV0IEZhcnJhcg0KRGF0ZTogMTk2NS0xMS0xNg0KDQoNClNIQVcjU0NBUkYjUlVTSw0KUFVTSCNUQU1JTCNVTlRPDQpBTE9FI0FSRU5BI1NUVUINCk5BUlJBVE9SI0JFU0lERQ0KIyMjRUxFTUkjQk9JTEVSDQpHT1dJTEQjQ0hJTkEjIyMNCkFUT05FI1BBVUwjTkFWRQ0KUkVOVCNESU5HWSNEUkFNDQpCQVRII09OVE8jVFJBSUwNCiMjI0VMREVSI1NFRU1MWQ0KRkxBV0VEI09ET1JTIyMjDQpSRURPTkUjVFJBTlNGRVINCk9WRVIjUk9UT1IjSU9MRQ0KVEVMTCNFTEVWRSNOT1NFDQpIRUVEI0RBUkVEI0dMQUQNCg0KDQpBMS4gXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCJIZWFydGJyZWFrIEhvdXNlXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCIgd3JpdGVyLiB+IFNIQVcNCkE1LiBEcmVzc2VyIGNsb3RoLiB+IFNDQVJGDQpBMTAuIENhYmluZXQgbWVtYmVyLiB+IFJVU0sNCkExNC4gRW50ZXJwcmlzZTogQ29sbG9xLiB+IFBVU0gNCkExNS4gTGFuZ3VhZ2Ugb2YgTWFkcmFzLiB+IFRBTUlMDQpBMTYuIFRvd2FyZHM6IFBvZXQuIH4gVU5UTw0KQTE3LiBZdWNjYVxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFwncyByZWxhdGl2ZS4gfiBBTE9FDQpBMTguIEJyZWFkLWFuZC1jaXJjdXNlcyBzZXR0aW5nLiB+IEFSRU5BDQpBMTkuIFBlbmNpbCBvZiBhIGtpbmQuIH4gU1RVQg0KQTIwLiBUViBkb2N1bWVudGFyeVxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFwncyB2b2ljZS4gfiBOQVJSQVRPUg0KQTIyLiBJbiBjb21wYXJpc29uIHdpdGguIH4gQkVTSURFDQpBMjQuIEZyYWdyYW50IG9sZW9yZXNpbi4gfiBFTEVNSQ0KQTI1LiBTdGVhbSBnZW5lcmF0b3IgcGFydC4gfiBCT0lMRVINCkEyNi4gTG9zZSBzZWxmLWNvbnRyb2w6IENvbGxvcS4gfiBHT1dJTEQNCkEyOS4gU2l0ZSBvZiBhIFdhbGwsIGNpcmNhIDE2MDAuIH4gQ0hJTkENCkEzMS4gRXhwaWF0ZS4gfiBBVE9ORQ0KQTMyLiBSZWNlbnQgdmlzaXRvciB0byBOZXcgWW9yay4gfiBQQVVMDQpBMzMuIENhdGhlZHJhbCBwYXJ0LiB+IE5BVkUNCkEzNy4gRmlyc3Qtb2YtdGhlLW1vbnRoIGl0ZW0uIH4gUkVOVA0KQTM4LiBOb3QgYnJpZ2h0IG9yIGNsZWFuLiB+IERJTkdZDQpBMzkuIFNtYWxsIG1lYXN1cmUuIH4gRFJBTQ0KQTQwLiBTaG93ZXIuIH4gQkFUSA0KQTQxLiBBd2FyZSBvZjogU2xhbmcuIH4gT05UTw0KQTQyLiBNZXRlb3JcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcJ3Mgc3RyZWFrLiB+IFRSQUlMDQpBNDMuIFRyZWUgd2l0aCByZWQgYmVycmllcy4gfiBFTERFUg0KQTQ1LiBHb29kLWxvb2tpbmcuIH4gU0VFTUxZDQpBNDYuIExpa2Ugc29tZSBkaWFtb25kcy4gfiBGTEFXRUQNCkE0OS4gUHJlZG9taW5hbnQgcXVhbGl0aWVzLiB+IE9ET1JTDQpBNTEuIEZhc2hpb25lZCBhbmV3LiB+IFJFRE9ORQ0KQTUyLiBUaWNrZXQgb2YgYSBraW5kLiB+IFRSQU5TRkVSDQpBNTYuIEZpbmkuIH4gT1ZFUg0KQTU3LiBNYWNoaW5lIHBhcnQuIH4gUk9UT1INCkE1OS4gRXVyeXR1c1xcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFwnIGRhdWdodGVyLiB+IElPTEUNCkE2MC4gRW51bWVyYXRlLiB+IFRFTEwNCkE2MS4gUHVwaWw6IEZyLiB+IEVMRVZFDQpBNjIuIE1vdmUgZm9yd2FyZC4gfiBOT1NFDQpBNjMuIFRha2Ugbm90aWNlIG9mLiB+IEhFRUQNCkE2NC4gVGhyZXcgZG93biB0aGUgZ2F1bnRsZXQuIH4gREFSRUQNCkE2NS4gVmVyeSB3aWxsaW5nLiB+IEdMQUQNCg0KRDEuIFJlYWNoIGFjcm9zcy4gfiBTUEFODQpEMi4gV2FoaW5lXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCdzIHNwZWNpYWx0eS4gfiBIVUxBDQpEMy4gSGVicmV3IGx5cmUuIH4gQVNPUg0KRDQuIFN1cnByaXNlZCBleGNsYW1hdGlvbi4gfiBXSEVSRUlOVEhFV09STEQNCkQ1LiBEZWNsYXJlZC4gfiBTVEFURUQNCkQ2LiBCaWxsaWFyZCBzaG90LiB+IENBUk9NDQpENy4gU3RhbmRhcmRicmVkIGhvcnNlLiB+IEFNRVJJQ0FOVFJPVFRFUg0KRDguIFRlbnRoIG9mIGEgc2VuLiB+IFJJTg0KRDkuIEluIGEgbGltcCB3YXkuIH4gRkxBQkJJTFkNCkQxMC4gTWVudSBpdGVtLiB+IFJVU1NJQU5EUkVTU0lORw0KRDExLiBCZWZvcmUgKHVzZWQgd2l0aCBhIG5lZ2F0aXZlKS4gfiBVTlRJTA0KRDEyLiBDYW1wdXMgbWFuOiBTbGFuZy4gfiBTVFVERQ0KRDEzLiBBdXRob3IgQXJ0aHVyLiB+IEtPQkVSDQpEMjEuIFJpdmVyIG9mIFBvbGFuZC4gfiBBTExFDQpEMjMuIEEgdGhvdXNhbmQgYWdlcy4gfiBFT04NCkQyNi4gSGFiaXQuIH4gR0FSQg0KRDI3LiBHcmVhdCBCYXJyaWVyIElzbGFuZC4gfiBPVEVBDQpEMjguIFVzYWdlLiB+IFdPTlQNCkQzMC4gXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCJSdXkgQmxhc1xcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFwiIG5vdmVsaXN0LiB+IEhVR08NCkQzMi4gVXNlZnVsIHdvb2QuIH4gUElORQ0KRDM0LiBBbmNpZW50IFN5cmlhLiB+IEFSQU0NCkQzNS4gVGVsZXBob25lIHBpb25lZXIuIH4gVkFJTA0KRDM2LiBEaWNrZW5zIGNoYXJhY3Rlci4gfiBFTUxZDQpEMzguIFByb2dyZXNzZWQgdW5zdGVhZGlseS4gfiBET0RERVJFRA0KRDQyLiBNYXJpbmUgYmlyZC4gfiBURVJODQpENDQuIE1hblxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFwncyBuaWNrbmFtZS4gfiBMRU4NCkQ0NS4gVG93ZXJlZC4gfiBTT0FSRUQNCkQ0Ni4gQnViYmxlcy4gfiBGUk9USA0KRDQ3LiBFbWJhbmttZW50LiB+IExFVkVFDQpENDguIEdpcmxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcJ3MgbmFtZS4gfiBBREVMRQ0KRDUwLiBMYXJnZSBjcm93ZC4gfiBEUk9WRQ0KRDUzLiBTcGVhayBpbiBqZXN0LiB+IEZPT0wNCkQ1NC4gTG9oZW5ncmluXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCdzIGJyaWRlLiB+IEVMU0ENCkQ1NS4gTXVzaWNhbCBpbnN0cnVtZW50LiB+IFJFRUQNCkQ1OC4gV2F2ZSwgaW4gU3BhaW4uIH4gT0xBDQoNCg==`;

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

test("test base64 encoded puzzle", () => {
    const base64 = atob(puzzle_2);
    const parsed_2 = xd_parser(base64);
    console.log(parsed_2);
    expect(parsed_2.meta.Title).toBe("New York Times, Tuesday, November 16, 1965");
    expect(parsed_2.meta.Author).toBe("Unknown");
    expect(parsed_2.meta.Editor).toBe("Margaret Farrar");
    expect(parsed_2.meta.Date).toBe("1965-11-16");
    expect(parsed_2.grid[0]).toStrictEqual(["S", "H", "A", "W", "#", "S", "C", "A", "R", "F", "#", "R", "U", "S", "K"]);
});