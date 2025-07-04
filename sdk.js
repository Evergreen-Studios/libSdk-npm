import sdk from "./sdk.lib.js";

/**
 * Sends a request to a library using a specified operator and value.
 *
 * @param library - The target library instance.
 * @param operator - The operation to perform: "norm" (normal), "ask" (asker), or "get" (getter).
 * @param value - The key or identifier for the export or operation.
 * @returns A promise resolving to the result of the operation, or `undefined` if invalid.
 */
export async function libraryRequest(library, operator, value) {
    const lr = await sdk.exports.get("libraryRequest");

    return lr.value(library, operator, value);
}

const lib = {
    createLibrary: await libraryRequest(sdk, "norm", "createLibrary"),
    createLibraryExport: await libraryRequest(sdk, "norm", "createLibraryExport"),
    checkLibrary: await libraryRequest(sdk, "norm", "checkLibrary"),
    checkLibraryExport: await libraryRequest(sdk, "norm", "checkLibraryExport")
};

/**
 * Creates a new library instance with the given name.
 *
 * @param name - The name for the new library.
 * @returns The created `Library` object.
 */
export function createLibrary(name) {
    return lib.createLibrary(name);
}

/**
 * Validates whether the provided object is a well-formed library.
 *
 * @param library - The object to validate as a library.
 * @returns `true` if the object is a valid `Library`, otherwise `false`.
 */
export function checkLibrary(library) {
    return lib.checkLibrary(library);
}

/**
 * Validates whether the provided object is a well-formed library export.
 *
 * @param libraryExport - The object to validate as a library export.
 * @returns `true` if the object is a valid `LibraryExport`, otherwise `false`.
 */
export function checkLibraryExport(libraryExport) {
    return lib.checkLibraryExport(libraryExport);
}

/**
 * Creates a new library export of the specified type and value.
 *
 * @typeParam T - The type of the value to export.
 * @param type - The export type: "normal", "asker", or "getter".
 * @param value - The value to be exported.
 * @returns The constructed `LibraryExport` object.
 */
export function createLibraryExport(type, value) {
    if (type != "normal" && type != "asker" && type != "getter") return;
    return lib.createLibraryExport(type, value);
}