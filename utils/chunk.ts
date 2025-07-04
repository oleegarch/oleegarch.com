export function chunk<T>(arr: T[], count: number): T[][] {
    const result: T[][] = []

    for(let i = 0; i < arr.length; i += count) {
        result.push(arr.slice(i, i + count))
    }

    return result
}