function doUnknown(cb:unknown) {
    if(typeof cb === 'string') {
        console.log(cb.toUpperCase());
    } else if(typeof cb === 'function') {
        cb();
    }
}

doUnknown("Hello World!!!");