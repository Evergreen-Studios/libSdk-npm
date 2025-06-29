import sdk from "./sdk.lib.js";

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

export function createLibrary(name) {
    return lib.createLibrary(name);
}

export function checkLibrary(library) {
    return lib.checkLibrary(library);
}

export function checkLibraryExport(libraryExport) {
    return lib.checkLibraryExport(libraryExport);
}

export function createLibraryExport(type, value) {
    if (type != "normal" && type != "asker" && type != "getter") return;
    return lib.createLibraryExport(type, value);
}