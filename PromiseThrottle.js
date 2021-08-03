// sib.li
/*
Usage:
(async () => {
    let throttler = new PromiseThrottle(reqLimit);
    let results   = [];
    while(true) {
        let p = new Promise(...);
        if ( !throttler.enqueue( p ) ) {
            let resultsChunk = await throttler.flush();
            results = results.concat(resultsChunk);
        }
    }
    results = results.concat( await throttler.flush() );
})();
*/

"use strict";

class PromiseThrottle {

    constructor(limit = 10) {
        this.limit = limit;
        this.queue = [];
    }

    enqueue(promise) {
        if (this.queue.length < this.limit) {
            this.queue.push(promise);
            return true;
        } else {
            return false;
        }
    }

    flush() {
        return Promise.all(
            this.queue.map(
                promise => promise.then(
                    v => v,
                    e => false
                )
            )
        ).then(results => {
            this.queue = [];
            return results.filter(Boolean);
        });
    }

}

module.exports = PromiseThrottle;