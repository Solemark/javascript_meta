const day1 = require("./day1")

test("test day1", () => {
    expect(day1([
        "1000", // 1
        "2000",
        "3000",
        "",
        "4000",  // 2
        "",
        "5000",  // 3
        "6000",
        "",
        "7000",  // 4
        "8000",
        "9000",
        "",
        "10000",  // 5
    ])).toBe("Elf 4 has the most calories")
})
