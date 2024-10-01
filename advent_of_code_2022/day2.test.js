const day2 = require("./day2")

test("test day1", () => {
    const data = [["A", "Y"], ["B", "X"], ["C", "Z"],]
    const exp = 15
    const res = day2(data)
    expect(res).toBe(exp)
})
