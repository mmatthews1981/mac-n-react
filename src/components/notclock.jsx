import React from "react";
import Store from '../myStore'

function NotClock() {
    const store = Store.useStore();

    var seconds = store.get('seconds')
    return <div>{seconds}</div>
}

export default NotClock;