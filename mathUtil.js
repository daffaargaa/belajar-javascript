
export const phi = 3.14;

export function getCircumference(radius) {
    return 2 * phi * radius
}

export function getArea(radius) {
    return phi * radius * radius;
}

export function getVolume(radius) {
    return (4/3) * phi * radius * radius * radius;
}