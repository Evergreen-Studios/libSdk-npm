type Library = {
    /** The unique name of the library. */
    name: string;
    /** A map of export names to their corresponding export objects. */
    exports: Map<string, LibraryExport<any>>;
}

/**
 * Represents an exportable value from a library.
 * @typeParam ET - The type of the exported value.
 */
type LibraryExport<ET> = {
    /** The kind of export: "normal", "asker", or "getter". */
    type: "normal" | "asker" | "getter";
    /** The actual exported value. */
    value: ET;
}

import sdk_1 from "./sdk.lib.js";

/** The main SDK library instance. */
declare const sdk: Library = sdk_1;

/**
 * Sends a request to a library using a specified operator and value.
 *
 * @param library - The target library instance.
 * @param operator - The operation to perform: "norm" (normal), "ask" (asker), or "get" (getter).
 * @param value - The key or identifier for the export or operation.
 * @returns A promise resolving to the result of the operation, or `undefined` if invalid.
 */
export declare function libraryRequest(
    library: Library,
    operator: "norm" | "ask" | "get",
    value: string
): Promise<any>;

/**
 * Creates a new library instance with the given name.
 *
 * @param name - The name for the new library.
 * @returns The created `Library` object.
 */
export declare function createLibrary(name: string): Library;

/**
 * Creates a new library export of the specified type and value.
 *
 * @typeParam T - The type of the value to export.
 * @param type - The export type: "normal", "asker", or "getter".
 * @param value - The value to be exported.
 * @returns The constructed `LibraryExport` object.
 */
export declare function createLibraryExport<T = unknown>(
    type: "normal" | "asker" | "getter",
    value: T
): LibraryExport<T>;

/**
 * Validates whether the provided object is a well-formed library.
 *
 * @param library - The object to validate as a library.
 * @returns `true` if the object is a valid `Library`, otherwise `false`.
 */
export declare function checkLibrary(library: Library): boolean;

/**
 * Validates whether the provided object is a well-formed library export.
 *
 * @param libraryExport - The object to validate as a library export.
 * @returns `true` if the object is a valid `LibraryExport`, otherwise `false`.
 */
export declare function checkLibraryExport(libraryExport: LibraryExport<any>): boolean;