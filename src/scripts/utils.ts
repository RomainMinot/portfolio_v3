/**
 * @param stringToSeparate
 * @returns 
 */
export function separateCharactersFromString(stringToSeparate: string): string {
    let separateString = "";
    const newString = stringToSeparate.split("");

    for (let i = 0; i < newString.length; i++) {
        separateString += "<span>" + stringToSeparate[i] + "</span>"
    }   

    return separateString;
}