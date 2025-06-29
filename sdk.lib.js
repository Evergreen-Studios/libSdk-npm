const sdk = {
    name: "LibarySDK",
    exports: new Map()
};

function cl0(n) {
    const library = {
        name: n,
        exports: new Map()
    };

    return library;
}

function cle0(t, v) {
    const le = {
        type: t,
        value: v
    };

    return le;
}

function cl1(l) {
    if (l && l.name && l.exports && l.exports instanceof Map) return true;
    return false;
}

function cle1(le) {
    if (le && le.value) {
        if (!le.type || le.type != "normal" && le.type != "asker" && le.type != "getter") return false;
        return true;
    }

    return false;
}

async function lr(l, o, v) {
    if (o != "ask" && o != "get" && o != "norm") return;
    if (!cl1(l)) return;

    if (l.exports.has(v)) {
        const exp = l.exports.get(v);

        if (!cle1(exp)) return;

        switch (o) {
            case "ask": {
                if (exp.type == "asker") return exp.value();
                return;
            }

            case "get": {
                if (exp.type == "getter") return exp.value();
                return;
            }

            case "norm": {
                return exp.value;
            }
        }
    }
}

sdk.exports.set('createLibrary', {
    type: "normal",
    value: cl0
});

sdk.exports.set('createLibraryExport', {
    type: "normal",
    value: cle0
});

sdk.exports.set('checkLibrary', {
    type: "normal",
    value: cl1
});

sdk.exports.set('checkLibraryExport', {
    type: "normal",
    value: cle1
});

sdk.exports.set('libraryRequest', {
    type: "normal",
    value: lr
});

export default sdk;